import { useCallback, useEffect, useRef, useState } from "react";

// Every form on the site posts here: a Google Apps Script web app that appends the
// submission to a Google Sheet and emails the team (see /google-apps-script).
// The site is a static export, so the URL is inlined at build time.
export const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL || "";
export const CONTACT_EMAIL = "hello@regularhub.in";

const REQUEST_TIMEOUT_MS = 20000;
const MAX_FILE_BYTES = 2 * 1024 * 1024; // Apps Script request bodies are limited; keep CVs small.
const MIN_FILL_MS = 1500; // Faster than a human can type → bot.

// Names of the honeypot field. Real visitors never see or fill it.
export const HONEYPOT = "company_website";

const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type, data: String(reader.result).split(",")[1] });
    reader.onerror = () => reject(new Error("Could not read the attached file."));
    reader.readAsDataURL(file);
  });

// Where the visitor came from, so every row in the sheet is attributable.
const collectContext = () => {
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
    if (params.get(key)) utm[key] = params.get(key);
  });
  return {
    page: window.location.pathname,
    referrer: document.referrer || "",
    ...utm,
  };
};

const post = async (payload) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    // text/plain keeps this a "simple" request: Apps Script cannot answer a CORS preflight.
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "The server rejected the submission.");
    return result;
  } finally {
    clearTimeout(timer);
  }
};

/**
 * Collects a <form> into a plain object plus any attached files (base64).
 * Honeypot is stripped here and reported separately.
 */
export const readForm = async (form) => {
  const fields = {};
  const files = [];
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value === "string") {
      fields[key] = value.trim();
    } else if (value && value.size > 0) {
      if (value.size > MAX_FILE_BYTES) {
        throw new Error(`"${value.name}" is larger than 2 MB. Please attach a smaller file.`);
      }
      files.push({ field: key, ...(await readFile(value)) });
    }
  }
  const trapped = Boolean(fields[HONEYPOT]);
  delete fields[HONEYPOT];
  return { fields, files, trapped };
};

/**
 * Form state machine shared by every form.
 *   status: idle → sending → success | error | fallback
 * `fallback` means the script URL is not configured and the visitor was handed to
 * their email client instead (only when `mailtoFallback` is provided).
 */
export const useLeadForm = (formType, options = {}) => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const openedAt = useRef(0);
  const optionsRef = useRef(options);
  optionsRef.current = options; // always the latest callbacks, without re-creating the handler

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setError("");
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (status === "sending") return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      setError("");
      setStatus("sending");
      try {
        const { mailtoFallback, getExtra, onSuccess } = optionsRef.current;
        const { fields, files, trapped } = await readForm(form);
        const extra = getExtra ? getExtra(fields) : {};
        const data = { ...fields, ...extra };

        // Bots: pretend it worked, send nothing.
        if (trapped || Date.now() - openedAt.current < MIN_FILL_MS) {
          setStatus("success");
          return;
        }

        if (!GAS_URL) {
          if (mailtoFallback) {
            window.location.href = mailtoFallback(data);
            setStatus("fallback");
            return;
          }
          throw new Error("This form is not connected yet. Please email us instead.");
        }

        await post({ formType, ...data, files, ...collectContext(), submittedAt: new Date().toISOString() });
        form.reset();
        setStatus("success");
        if (onSuccess) onSuccess(data);
      } catch (err) {
        setError(
          err.name === "AbortError"
            ? "That took too long. Please check your connection and try again."
            : err.message || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    },
    [formType, status]
  );

  return { status, error, reset, handleSubmit, sending: status === "sending" };
};
