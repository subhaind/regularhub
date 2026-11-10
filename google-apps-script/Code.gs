/**
 * Regularhub — form backend (Google Apps Script web app).
 *
 * Every form on the website POSTs JSON here. Each submission is validated,
 * appended to a Google Sheet tab and emailed to the team. Optional CV uploads
 * are saved to a Drive folder.
 *
 * Setup: see README.md in this folder. Nothing secret lives in this file —
 * the spreadsheet is the one this script is bound to, and the folder id is an
 * optional Script Property.
 */

// ── Configuration ─────────────────────────────────────────────────────────────
var CONFIG = {
  NOTIFY_EMAIL: 'hello@regularhub.in',     // who gets the alert for each submission
  SEND_AUTO_REPLY: true,                   // confirmation email to the visitor
  BRAND: 'Regularhub',
  RATE_LIMIT_SECONDS: 20,                  // same email + form can't resubmit faster than this
  MAX_FIELD_LENGTH: 5000,
  CV_FOLDER_PROPERTY: 'CV_FOLDER_ID'       // Script Property holding a Drive folder id (optional)
};

// formType → sheet tab + column order. Anything not listed lands in "Extra".
var FORMS = {
  'contact':           { sheet: 'Leads',        label: 'Contact enquiry' },
  'service-enquiry':   { sheet: 'Leads',        label: 'Service enquiry' },
  'portfolio-quote':   { sheet: 'Leads',        label: 'Portfolio quote request' },
  'newsletter':        { sheet: 'Newsletter',   label: 'Newsletter signup' },
  'job-application':   { sheet: 'Applications', label: 'Job application' }
};

var COLUMNS = {
  'Leads': ['Timestamp', 'Form', 'Name', 'Email', 'Phone', 'Business', 'Service', 'Intent', 'Segment',
            'Subject', 'Message', 'Page', 'Referrer', 'UTM', 'Status', 'Extra'],
  'Newsletter': ['Timestamp', 'Email', 'Page', 'Referrer', 'UTM'],
  'Applications': ['Timestamp', 'Name', 'Email', 'Phone', 'Role', 'Answers', 'CV link', 'Page', 'Status', 'Extra']
};

// ── Entry points ──────────────────────────────────────────────────────────────
function doGet() {
  return json_({ ok: true, service: CONFIG.BRAND + ' forms', time: new Date().toISOString() });
}

function doPost(e) {
  try {
    var body = parse_(e);
    var form = FORMS[body.formType];
    if (!form) return json_({ ok: false, error: 'Unknown form.' });

    var data = clean_(body);
    var problem = validate_(body.formType, data);
    if (problem) return json_({ ok: false, error: problem });

    if (tooSoon_(body.formType, data.email)) {
      return json_({ ok: false, error: 'Please wait a moment before submitting again.' });
    }

    var cvLink = '';
    if (body.files && body.files.length) cvLink = saveFiles_(body.files, data);

    var lock = LockService.getScriptLock();
    lock.waitLock(15000);
    try {
      append_(form, body, data, cvLink);
    } finally {
      lock.releaseLock();
    }

    notify_(form, body, data, cvLink);
    if (CONFIG.SEND_AUTO_REPLY && data.email && body.formType !== 'job-application') autoReply_(form, data);

    return json_({ ok: true });
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    return json_({ ok: false, error: 'Something went wrong on our side. Please email ' + CONFIG.NOTIFY_EMAIL + '.' });
  }
}

// ── Parsing + validation ──────────────────────────────────────────────────────
function parse_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error('Empty request');
  return JSON.parse(e.postData.contents);
}

var KNOWN = ['formType', 'files', 'submittedAt', 'page', 'referrer', 'utm_source', 'utm_medium',
             'utm_campaign', 'utm_term', 'utm_content'];

function clean_(body) {
  var out = {};
  Object.keys(body).forEach(function (key) {
    if (key === 'files') return;
    var v = body[key];
    if (typeof v !== 'string') return;
    out[key] = v.trim().slice(0, CONFIG.MAX_FIELD_LENGTH);
  });
  return out;
}

function validate_(formType, d) {
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || '');
  if (!emailOk) return 'Please enter a valid email address.';
  if (formType !== 'newsletter' && !d.name) return 'Please enter your name.';
  if ((formType === 'contact' || formType === 'portfolio-quote') && !d.message) return 'Please add a short message.';
  return '';
}

function tooSoon_(formType, email) {
  var cache = CacheService.getScriptCache();
  var key = 'rl:' + formType + ':' + String(email).toLowerCase();
  if (cache.get(key)) return true;
  cache.put(key, '1', CONFIG.RATE_LIMIT_SECONDS);
  return false;
}

// ── Sheet ─────────────────────────────────────────────────────────────────────
function sheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(COLUMNS[name]);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLUMNS[name].length).setFontWeight('bold');
  }
  return sh;
}

// Spreadsheet formula injection: a cell starting with = + - @ would run as a formula.
function safe_(v) {
  v = String(v == null ? '' : v);
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function utm_(body) {
  return ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    .filter(function (k) { return body[k]; })
    .map(function (k) { return k.replace('utm_', '') + '=' + body[k]; })
    .join('&');
}

function extra_(d, used) {
  var rest = {};
  Object.keys(d).forEach(function (k) {
    if (KNOWN.indexOf(k) === -1 && used.indexOf(k) === -1) rest[k] = d[k];
  });
  return Object.keys(rest).length ? JSON.stringify(rest) : '';
}

function append_(form, body, d, cvLink) {
  var sh = sheet_(form.sheet);
  var now = new Date();
  var row;

  if (form.sheet === 'Leads') {
    row = [now, form.label, d.name, d.email, d.phone, d.business, d.service, d.intent, d.segment,
           d.subject, d.message, d.page, d.referrer, utm_(body), 'New',
           extra_(d, ['name', 'email', 'phone', 'business', 'service', 'intent', 'segment', 'subject', 'message'])];
  } else if (form.sheet === 'Newsletter') {
    row = [now, d.email, d.page, d.referrer, utm_(body)];
  } else {
    var answers = Object.keys(d)
      .filter(function (k) { return /^(question|answer)/i.test(k); })
      .sort()
      .map(function (k) { return k + ': ' + d[k]; })
      .join('\n\n');
    row = [now, d.name, d.email, d.phone, d.role || 'Frontend Developer', answers, cvLink, d.page, 'New',
           extra_(d, ['name', 'email', 'phone', 'role'].concat(Object.keys(d).filter(function (k) { return /^(question|answer)/i.test(k); })))];
  }
  sh.appendRow(row.map(function (v) { return v instanceof Date ? v : safe_(v); }));
}

// ── Files (CVs) ───────────────────────────────────────────────────────────────
function saveFiles_(files, d) {
  var folderId = PropertiesService.getScriptProperties().getProperty(CONFIG.CV_FOLDER_PROPERTY);
  var folder = folderId ? DriveApp.getFolderById(folderId) : DriveApp.getRootFolder();
  var links = [];
  files.slice(0, 3).forEach(function (f) {
    var blob = Utilities.newBlob(Utilities.base64Decode(f.data), f.type || 'application/octet-stream',
      (d.name || 'applicant').replace(/[^\w\- ]/g, '') + ' - ' + String(f.name).replace(/[^\w.\- ]/g, ''));
    links.push(folder.createFile(blob).getUrl());
  });
  return links.join('\n');
}

// ── Email ─────────────────────────────────────────────────────────────────────
function esc_(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function notify_(form, body, d, cvLink) {
  var rows = Object.keys(d).filter(function (k) { return d[k]; }).map(function (k) {
    return '<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top"><b>' + esc_(k) +
           '</b></td><td style="padding:4px 0;white-space:pre-wrap">' + esc_(d[k]) + '</td></tr>';
  }).join('');
  if (cvLink) rows += '<tr><td><b>CV</b></td><td>' + esc_(cvLink) + '</td></tr>';

  var subject = '[' + CONFIG.BRAND + '] ' + form.label + (d.name ? ' — ' + d.name : '') + (d.service ? ' (' + d.service + ')' : '');
  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAIL,
    replyTo: d.email,
    subject: subject.replace(/[\r\n]+/g, ' '),
    htmlBody: '<table style="font:14px/1.5 Arial,sans-serif">' + rows + '</table>',
    name: CONFIG.BRAND + ' website'
  });
}

function autoReply_(form, d) {
  var first = (d.name || '').split(' ')[0] || 'there';
  var text = form.sheet === 'Newsletter'
    ? 'Thanks for subscribing — you are on the list.'
    : 'Thanks for reaching out. We have your message and will reply within one business day with specific next steps.';
  MailApp.sendEmail({
    to: d.email,
    subject: 'We received your message — ' + CONFIG.BRAND,
    htmlBody: '<p style="font:15px/1.6 Arial,sans-serif">Hi ' + esc_(first) + ',</p>' +
              '<p style="font:15px/1.6 Arial,sans-serif">' + text + '</p>' +
              '<p style="font:15px/1.6 Arial,sans-serif">— The ' + CONFIG.BRAND + ' team<br>' + esc_(CONFIG.NOTIFY_EMAIL) + '</p>',
    name: CONFIG.BRAND,
    replyTo: CONFIG.NOTIFY_EMAIL
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to authorise Sheets, Mail and Drive scopes and create the tabs. */
function setup() {
  Object.keys(COLUMNS).forEach(sheet_);
  MailApp.getRemainingDailyQuota();
  DriveApp.getRootFolder();
}
