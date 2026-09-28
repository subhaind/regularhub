import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";

const CloudBillingSoftwareServicePage = () => {
  const charAnim = useRef();
  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  const pageTitle = "Cloud Billing Software";
  const pageSubtitle = "Bill Anywhere. Manage Everywhere. Grow Without Limits.";
  const overview = "";
  const problems = ["A client calls asking for an invoice while you're on-site. Your accountant needs the sales data for the week and it's locked on one computer in the office. Your CA wants the GST summary and you have to go to the office, extract it, and email it. A customer's payment history is in a file only your billing staff can access. Billing that lives on one machine creates bottlenecks, delays, and risk. A cloud-native system eliminates all three."];
  const audience = ["Freelancers and independent consultants", "Service businesses: agencies, IT firms, consultancies, law firms", "Wholesale distributors and B2B traders", "SMEs with remote or multi-location billing teams", "Retailers wanting browser-based access alongside POS", "Businesses with field sales teams raising invoices on-site", "Any business currently running billing on a single desktop machine", "Budget hotels and business hotels", "Boutique hotels, heritage properties, and boutique resorts", "Homestays and villa rental operators", "Service apartments and extended-stay properties", "Hotel chains and franchised properties", "Motels, lodges, and transit accommodation", "Any property with 5\u2013500+ rooms", "Companies issuing employee ID and access cards", "Schools and universities issuing student and faculty IDs", "Hospitals issuing staff, visitor, and patient ID cards", "Event organisers issuing delegate and exhibitor credentials", "Government offices and public service departments", "Factories and industrial plants with access control requirements", "Gyms, clubs, and membership organisations issuing member cards", "Retailers and wholesalers labelling product inventory", "Manufacturers applying product and compliance labels", "Warehouses and logistics companies labelling shipments", "Pharmacies printing prescription and medicine labels", "Schools and organisations tagging fixed assets", "Food businesses printing ingredient and nutritional labels", "E-commerce businesses printing shipping and packing labels", "Any business currently using manually written or third-party printed labels"];
  const features = [{"title": "GST-Compliant Invoice Creation", "desc": "Create professional, branded invoices in under 60 seconds. Pre-set customer records, product/service catalogs, and GST rates \u2014 every field auto-filled on selection. Support for Tax Invoice, Bill of Supply, Credit Note, Debit Note, Proforma, and Delivery Challan. HSN/SAC code mapping per product. CGST/SGST/IGST auto-applied based on customer location (intrastate vs. interstate). Invoice numbering auto-incremented per financial year.", "useCase": "A marketing agency creates 40+ client invoices per month. Switching from Word templates to cloud billing reduced invoice creation time from 8 minutes to under 90 seconds per invoice \u2014 and eliminated the manual GST calculation errors that caused two disputed payments last quarter."}, {"title": "Recurring Invoice & Subscription Billing", "desc": "Set up recurring billing schedules for retainer clients: monthly, quarterly, or annual. Invoice auto-generated and emailed on the billing date \u2014 no manual trigger required. Payment reminder emails sent automatically at due date and 3 days overdue. Recurring billing dashboard shows next due dates, amounts, and payment status for all subscription clients.", "useCase": "A SaaS company with 60 monthly retainer clients automates the entire billing cycle \u2014 invoices go out on the 1st, reminders on the 10th, and the accounts team only handles actual escalations, not routine follow-ups."}, {"title": "Payment Tracking & Receivables Management", "desc": "Real-time outstanding payment dashboard: who owes what, for how long. Ageing analysis: 0\u201330 days, 30\u201360 days, 60\u201390 days, 90+ days. One-click payment reminder email or WhatsApp message to overdue customers. Record partial payments, advance payments, and write-offs. Customer ledger: complete transaction history from first invoice to last payment.", "useCase": ""}, {"title": "Multi-User Access & Role Control", "desc": "Invite your accountant, billing team, or CA with specific role-based access. Admin sees everything. Billing staff can create invoices but not approve credits. Accountant has read-only report access. CA gets GST report access only. All actions logged with user and timestamp \u2014 complete audit trail.", "useCase": ""}, {"title": "GST Returns & Reports", "desc": "GSTR-1 report: outward supply summary ready for portal upload. GSTR-3B data: auto-computed tax liability summary. GSTR-2A reconciliation: match your purchase records against supplier filings. HSN-wise sales summary. Input tax credit (ITC) tracker. One-click export in JSON and Excel formats compatible with the GST portal.", "useCase": ""}, {"title": "Expense & Purchase Management", "desc": "Record business expenses with vendor details, GST, and payment mode. Purchase invoice entry for input tax credit tracking. Vendor ledger and outstanding payment management. Expense categorisation for P&L reporting.", "useCase": ""}, {"title": "Business Dashboard & Reports", "desc": "Sales summary: today, this week, this month, this financial year \u2014 at a glance. Top customers by revenue. Top products/services by billing volume. Profit & Loss statement. Balance sheet. Cash flow statement. All reports exportable to Excel, PDF, and shareable via link.", "useCase": ""}, {"title": "Front Desk & Reservation Management", "desc": "Live room availability view \u2014 colour-coded by status: available, occupied, checked-out, under maintenance, or blocked. Walk-in, phone, and online booking handled in one system. Guest profile database: name, ID proof, contact, stay history, preferences, and special requests stored permanently. Group booking management: block multiple rooms for a single corporate or event booking. Booking modification, cancellation, and no-show handling with policy-based charges auto-applied.", "useCase": "A 45-room business hotel replaces a manual register with a live dashboard \u2014 front desk check-in time reduced from 8 minutes to under 2 minutes per guest."}, {"title": "Check-In & Check-Out", "desc": "Rapid digital check-in: select room \u2192 verify ID \u2192 assign room \u2192 print or email registration card. Early check-in and late check-out fee auto-applied per property policy. Express checkout: bill generated in advance, guest verifies and pays \u2014 zero queue at departure. Folio management: all room charges, restaurant charges, laundry, and extras compiled in a single guest bill. GST-compliant invoice generated at checkout.", "useCase": ""}, {"title": "Housekeeping Management", "desc": "Room status board visible to all housekeeping staff on mobile. Checkout rooms automatically queued for cleaning. Housekeeping staff assigned rooms by floor or section. Room cleaned \u2192 staff marks as \"clean\" on app \u2192 front desk notified instantly \u2014 room becomes available for next check-in. Maintenance request logging: guest reports an issue \u2192 maintenance team notified \u2192 status tracked to resolution. Do Not Disturb (DND) and Make Up Room (MUR) status visible to all staff.", "useCase": "A resort with 80 rooms eliminates the radio-call system between housekeeping and front desk \u2014 average room turnaround time reduced from 45 minutes to 28 minutes, enabling more same-day check-ins."}, {"title": "Booking Channel Integration", "desc": "Direct booking widget on your hotel website \u2014 commission-free. Integration with OTA platforms: Booking.com, MakeMyTrip, Goibibo, Airbnb \u2014 rates and availability synced automatically via channel manager. No more manual overbooking corrections. Rate management: update room rates across all channels simultaneously from one screen. OTA vs. direct booking revenue comparison report.", "useCase": ""}, {"title": "Rate & Revenue Management", "desc": "Multiple room type and rate plan configuration: standard, deluxe, suite \u2014 each with rack rate, weekend rate, seasonal rate, and corporate rate. Dynamic pricing tools: set occupancy-based automatic rate adjustments. Package building: room + breakfast, room + spa, honeymoon package \u2014 priced and billed as a bundle. Advance deposit management and refund processing.", "useCase": ""}, {"title": "Point of Sale \u2014 F&B, Spa & Ancillary Services", "desc": "Post in-house restaurant, room service, bar, spa, and laundry charges directly to the guest folio. No manual charge-posting delays. Guest can review all charges at any time via self-service. Charge posting from any outlet \u2014 POS integrated with the front desk.", "useCase": ""}, {"title": "Reports & Revenue Analytics", "desc": "Occupancy report: daily, weekly, and monthly occupancy percentage. Revenue report: RevPAR (Revenue Per Available Room), ADR (Average Daily Rate), and total revenue. Arrival and departure forecast: upcoming check-ins and checkouts for the next 7 and 30 days. Channel-wise revenue: Booking.com vs. MakeMyTrip vs. direct \u2014 commission cost analysis. Nationality and source-market analysis. GST summary and accommodation tax reports.", "useCase": ""}, {"title": "Professional Card Design Studio", "desc": "Drag-and-drop card design interface \u2014 no design experience required. Pre-built templates for employee, student, visitor, and membership cards. Fully customisable: add logo, background image, QR code, barcode, photo, signature, and any text field. Front and back card design supported. Card size presets: CR80 standard, custom dimensions. Design saved as a reusable template \u2014 change data without redesigning.", "useCase": "A school with 1,200 students designs a single ID card template in 20 minutes \u2014 then prints all student cards individually, each with the correct photo, name, class, and roll number, in under 2 hours using the bulk print feature."}, {"title": "Database Integration & Bulk Printing", "desc": "Import employee or student data from Excel \u2014 name, designation, department, photo path, and any custom fields. Data mapped to card design fields automatically. Preview individual cards before printing. Bulk print entire database or filter by department, batch, or category. Reprint individual cards on demand. Card issuance log: who was issued which card and on which date.", "useCase": "A corporate office with 350 employees issues new ID cards after a rebrand \u2014 the IT team imports the HR database export, maps it to the new card template, and prints all 350 cards in 3 hours with zero manual data entry."}, {"title": "Photo Capture & Management", "desc": "Integrated webcam capture for on-the-spot photo taking. Photo cropping and resizing to fit the card template. Bulk photo import from a folder matched to employee/student records by name or ID number. Photo quality check before printing.", "useCase": ""}, {"title": "QR Code & Barcode Integration", "desc": "Auto-generate unique QR codes or barcodes per card linked to employee or student ID. QR code contains configurable data: name, ID number, department, contact \u2014 scannable for instant verification. Barcode formats: Code 128, Code 39, EAN-13, QR Code \u2014 all supported. Access control system integration via barcode output.", "useCase": ""}, {"title": "Card Issuance & Inventory Tracking", "desc": "Issue log: every card printed is logged with name, date, and card number. Replacement card tracking: original card marked as replaced, replacement reason logged. Lost card report and blocking (for access-integrated systems). Card stock inventory tracking \u2014 get alerts when blank card stock is running low.", "useCase": ""}, {"title": "Visitor ID Card Management", "desc": "Walk-in visitor registration: name, contact, purpose of visit, person meeting. Temporary visitor card printed on the spot \u2014 auto-expires at end of day or visit duration. Visitor log report: who visited, when, and whom they met. Recurring visitor profiles for frequent visitors \u2014 one-click reissue.", "useCase": ""}, {"title": "Professional Label Design Studio", "desc": "WYSIWYG (What You See Is What You Get) drag-and-drop label designer \u2014 design the label exactly as it will print. Pre-built label templates: product label, price tag, shipping label, asset tag, food label, and pharmaceutical label. Add elements freely: text, barcode, QR code, logo, image, line, rectangle, and table. Font styling: size, bold, italic, alignment per text field. Multi-zone layouts: main label + sub-label (e.g., product name zone + barcode zone + price zone). Label dimensions: standard sizes preloaded (30\u00d720mm, 50\u00d725mm, 100\u00d750mm, A4, etc.) or fully custom.", "useCase": "A garment manufacturer designs a product tag with brand logo, size, fabric content, care instructions, MRP, and barcode \u2014 all on a 50\u00d730mm label \u2014 in under 30 minutes, without a designer."}, {"title": "Barcode & QR Code Generation", "desc": "Supported barcode formats: Code 128, Code 39, EAN-13, EAN-8, UPC-A, UPC-E, ITF-14, GS1-128, DataMatrix, PDF417, QR Code. Auto-generate sequential barcodes for batch labelling. QR codes can encode: URL, text, phone number, product data (name, batch, expiry), or any custom string. Barcode readability preview \u2014 check scannability before printing.", "useCase": ""}, {"title": "Database-Driven Bulk Label Printing", "desc": "Import product, asset, or inventory data from Excel. Map columns to label design fields: product name \u2192 Name field, SKU \u2192 Barcode field, price \u2192 Price field. Preview all labels from the dataset before printing. Print the entire dataset or filter by category, location, or date range. Quantity-per-label setting: print 3 labels per product record for shelf, package, and backup.", "useCase": "A wholesale grocery distributor imports 2,000 product records from their inventory Excel. Labels for all 2,000 products \u2014 each with the correct product name, MRP, weight, and barcode \u2014 are printed in a single session in 45 minutes."}, {"title": "Variable Data Printing", "desc": "Print labels where each label has unique data \u2014 serial numbers, batch numbers, expiry dates, or sequential barcodes \u2014 without redesigning between prints. Auto-increment serial number field. Date field with configurable format. Batch number and expiry date fields for pharmaceutical and food labelling.", "useCase": ""}, {"title": "Label Printing Management", "desc": "Compatible with all major thermal label printers: Zebra, TSC, Godex, Bixolon, Honeywell, Brother, and standard inkjet/laser printers. Print to roll labels (continuous feed) and sheet labels (A4). Print preview with exact label dimensions before job runs. Reprint individual labels from the print history log. Label print quantity tracker: how many of each label has been printed and when.", "useCase": ""}, {"title": "Asset Tagging & Tracking", "desc": "Design and print asset tags with unique sequential barcodes or QR codes. Link asset tags to an asset register: asset name, location, purchase date, and assigned user. Scan asset QR code with any smartphone camera \u2014 view asset details instantly. Asset tracking report: print count, location, and assigned user.", "useCase": ""}];
  const usecases = [{"type": "Organisation Type", "pain": "Use Case", "feature": "Outcome"}, {"type": "Corporate", "pain": "Employee onboarding ID issuance", "feature": "New joiner card printed and ready on Day 1"}, {"type": "School", "pain": "Annual student ID card batch print", "feature": "1,000+ cards printed in one session"}, {"type": "Hospital", "pain": "Visitor management system", "feature": "Secure visitor log with expiring temp cards"}, {"type": "Event", "pain": "Delegate credential printing", "feature": "On-site registration with instant ID printing"}, {"type": "Factory", "pain": "Access control card issuance", "feature": "Barcode-linked cards for gate entry"}, {"type": "Gym", "pain": "Member card with QR for check-in", "feature": "Member database linked to card scan"}, {"type": "Retail / Wholesale", "pain": "Price + barcode product label", "feature": "Bulk print for large catalogs"}, {"type": "Pharmaceutical", "pain": "Prescription + batch/expiry label", "feature": "Variable data printing per batch"}, {"type": "Food & Beverage", "pain": "Ingredient + nutritional info label", "feature": "Regulatory compliance formatting"}, {"type": "Warehouse", "pain": "Bin location + SKU label", "feature": "Sequential barcode generation"}, {"type": "E-Commerce", "pain": "Shipping label", "feature": "Bulk print with order data import"}, {"type": "Schools / Offices", "pain": "Asset tag", "feature": "QR-linked asset register"}];
  const outcomes = [{"label": "Invoice creation time", "detail": "90% faster with auto-filled customer and product data"}, {"label": "Overdue collections", "detail": "Automated payment reminders reduce average payment delay by 8\u201312 days"}, {"label": "GST filing time", "detail": "75% reduction in time spent preparing return data"}, {"label": "Team collaboration", "detail": "Accountant, owner, and billing staff work simultaneously without file-sharing or version conflicts"}, {"label": "Business continuity", "detail": "No data lost if a device is lost, stolen, or damaged \u2014 everything is in the cloud"}, {"label": "Check-in speed", "detail": "Reduced from 8\u201312 minutes to under 2 minutes with digital guest profile lookup"}, {"label": "Room turnaround", "detail": "Housekeeping-to-front-desk communication time eliminated \u2014 rooms available faster"}, {"label": "Overbooking", "detail": "Near-zero overbooking incidents with real-time channel manager sync"}, {"label": "Revenue visibility", "detail": "RevPAR, ADR, and channel performance visible daily without a manual report"}, {"label": "OTA dependency", "detail": "Direct booking channel reduces average commission paid per booking"}, {"label": "Label design time", "detail": "From hours with external designers to under 30 minutes in-house"}, {"label": "Printing cost", "detail": "Label printing brought in-house eliminates per-unit cost from external print vendors"}, {"label": "Accuracy", "detail": "Data-imported labels eliminate manual entry errors on individual labels"}, {"label": "Compliance", "detail": "Pharmaceutical, food, and chemical labels designed to include all mandatory fields"}, {"label": "Scalability", "detail": "Batch sizes from 1 label to 100,000+ handled in a single print job"}];
  const integrations = [];
  const faqs = [{"question": "Is the data secure on the cloud?", "answer": "Yes. Data is encrypted in transit and at rest, stored on secured servers with automatic backups and 99.9% uptime SLA."}, {"question": "Can I use it on my phone while visiting a client?", "answer": "Yes. The full invoicing interface is mobile-optimised \u2014 create, send, and track invoices from your phone."}, {"question": "Can I import my existing customer and product data?", "answer": "Yes. Bulk import via Excel template is available for customers, products, and opening balances."}, {"question": "Does it work for both goods and services businesses?", "answer": "Yes. HSN codes for goods and SAC codes for services are both supported within the same account."}, {"question": "Can the software manage multiple properties under one account?", "answer": "Yes. Multi-property management with consolidated and individual property reporting is supported."}, {"question": "Does the channel manager sync in real time?", "answer": "Yes. Availability and rate changes push to all connected OTA channels within 60 seconds."}, {"question": "Can guests receive a digital check-in confirmation and bill via WhatsApp?", "answer": "Yes. WhatsApp and email confirmations, pre-arrival messages, and digital folios are supported."}, {"question": "Is the system accessible for front desk staff without technical training?", "answer": "Yes. The interface is designed for speed and simplicity \u2014 most front desk staff are operational within a 2-hour training session."}, {"question": "What type of card printer does the software work with?", "answer": "Compatible with all major direct-to-card ID card printers: Evolis, Zebra, Fargo/HID, Magicard, Entrust, and others. Standard printer drivers supported."}, {"question": "Can I design different card templates for different departments?", "answer": "Yes. Unlimited card templates can be saved \u2014 employee, visitor, contractor, and department-specific designs maintained separately."}, {"question": "Does the software work without an internet connection?", "answer": "Yes. The desktop version operates fully offline. A cloud version with team access is also available."}, {"question": "Can I export the card design for printing by a third-party print shop?", "answer": "Yes. Cards can be exported as high-resolution PDF or image files for external printing."}, {"question": "Can I design labels with both a barcode and a QR code on the same label?", "answer": "Yes. Multiple barcode/QR code elements can be placed on the same label, each carrying different data."}, {"question": "Does the software print directly to a thermal label printer?", "answer": "Yes. Thermal printers are supported via standard Windows printer drivers \u2014 no additional configuration needed."}, {"question": "Can I save multiple label templates for different product categories?", "answer": "Yes. Unlimited templates can be saved and recalled \u2014 switch between product label, price tag, and shipping label in seconds."}, {"question": "Can the expiry date on pharmaceutical labels auto-calculate from a manufactured date input?", "answer": "Yes. Date arithmetic fields can auto-calculate expiry based on shelf life rules defined in the template."}];

  return (
    <>
      <Head>
        <title>{pageTitle} | Regularhub Private Limited</title>
        <meta name="description" content={pageSubtitle || overview} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          
          {/* Hero Section */}
          <section className="development__area pt-130 pb-100">
            <div className="container g-0 line">
              <div className="line-3"></div>
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block">
                      Enterprise Software Solution
                    </span>
                    <h1 className="sec-title animation__char_come text-dark fw-bold mb-3" ref={charAnim}>
                      {pageTitle}
                    </h1>
                    {pageSubtitle && <p className="lead fw-bold text-primary mb-4" style={{ color: "#1d4ed8" }}>{pageSubtitle}</p>}
                  </div>
                  {overview && <p className="text-secondary fs-5 mb-4" style={{ lineHeight: "1.7" }}>{overview}</p>}
                  {audience && audience.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-4 mb-4">
                      {audience.slice(0, 5).map((item, idx) => (
                        <span key={idx} className="badge bg-light text-dark border p-2 px-3 rounded-pill">
                          <i className="fa-solid fa-check text-success me-2"></i>{item}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="d-flex gap-3 mt-4">
                    <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span>Book Live Demo <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                    <Link href="/contact" className="wc-btn-dark btn-hover btn-item">
                      <span></span>Start Free Trial <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="development__img shadow-lg rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={800}
                          height={450}
                          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                          src="/assets/imgs/thumb/dev-1.jpg"
                          alt={pageTitle}
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="development__img shadow-md rounded-4 overflow-hidden border">
                        <Image
                          priority
                          width={800}
                          height={300}
                          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                          src="/assets/imgs/thumb/dev-2.jpg"
                          alt={pageTitle}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problems & Audience */}
          <section className="service__detail bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div className="sec-title-wrapper mb-4">
                    <h2 className="sec-title title-anim text-dark">Operational Gaps We Eliminate</h2>
                  </div>
                  <div className="development__content">
                    <ul className="list-unstyled">
                      {problems.map((prob, index) => (
                        <li key={index} className="mb-3 p-3 bg-white rounded-3 border-start border-4 border-danger shadow-sm">
                          <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i>{prob}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div className="sec-title-wrapper mb-4">
                    <h2 className="sec-title title-anim text-dark">Built Specifically For</h2>
                  </div>
                  <div className="development__wrapper">
                    <div className="row g-2">
                      {audience.map((aud, index) => (
                        <div key={index} className="col-12">
                          <div className="p-3 bg-white rounded-3 border shadow-sm d-flex align-items-center">
                            <i className="fa-solid fa-circle-check text-success me-3 fs-5"></i>
                            <span className="fw-semibold text-dark">{aud}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="workflow__area-6 pt-130 pb-130">
            <div className="container g-0 line pb-130">
              <div className="line-3"></div>
              <div className="sec-title-wrapper mb-5 text-center">
                <h2 className="sec-title title-anim">Core Features & Capabilities</h2>
                <p className="text-muted">Designed around how your business actually operates daily</p>
              </div>
              <div className="workflow__wrapper-6">
                <div className="row">
                  {features.map((feat, index) => (
                    <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                      <div className="workflow__slide-6 p-4 border rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="feature-icon mb-3 text-primary">
                            <i className="fa-solid fa-layer-group fs-2"></i>
                          </div>
                          <h3 className="workflow__title-6 fw-bold mb-3 fs-4 text-dark" style={{ fontSize: "1.25rem" }}>
                            {feat.title}
                          </h3>
                          <p className="text-muted">{feat.desc}</p>
                        </div>
                        {feat.useCase && (
                          <div className="bg-light border-start border-4 border-primary p-3 mt-3 rounded-3 shadow-sm" style={{ fontSize: "0.875rem" }}>
                            <span className="badge bg-primary text-white mb-2">Use Case Scenario</span>
                            <p className="mb-0 text-dark fw-medium">{feat.useCase}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Matrix Table */}
          {usecases && usecases.length > 0 && (
            <section className="service__detail pb-130">
              <div className="container g-0 line">
                <div className="line-3"></div>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="sec-title-wrapper mb-5">
                      <h2 className="sec-title title-anim">Industry Application Matrix</h2>
                    </div>
                    <div className="table-responsive rounded-4 border shadow-sm">
                      <table className="table table-hover table-striped align-middle mb-0">
                        <thead className="table-dark">
                          <tr>
                            <th className="py-3 px-4">Business Niche</th>
                            <th className="py-3 px-4">Primary Pain Solved</th>
                            <th className="py-3 px-4">Feature / Solution Deployed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usecases.map((uc, index) => (
                            <tr key={index}>
                              <td className="fw-bold px-4 py-3 text-dark">{uc.type}</td>
                              <td className="px-4 py-3 text-danger fw-medium">{uc.pain}</td>
                              <td className="px-4 py-3"><span className="badge bg-success-subtle text-success border border-success-subtle p-2 px-3 fs-6">{uc.feature}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Business Outcomes & Integrations */}
          <section className="development__area bg-light py-5">
            <div className="container g-0 line pt-100 pb-100">
              <div className="line-3"></div>
              <div className="row">
                {outcomes && outcomes.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Measurable Business Outcomes</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {outcomes.map((out, idx) => (
                          <div key={idx} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-success">
                            <h4 className="fw-bold text-success mb-1" style={{ fontSize: "1.1rem" }}>
                              <i className="fa-solid fa-chart-line me-2"></i>{out.label}
                            </h4>
                            <p className="mb-0 text-muted">{out.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {integrations && integrations.length > 0 && (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                    <div className="sec-title-wrapper mb-4">
                      <h2 className="sec-title title-anim">Integrations & Compatibility</h2>
                    </div>
                    <div className="development__wrapper">
                      <div className="d-flex flex-column gap-3">
                        {integrations.map((integ, idx) => (
                          <div key={idx} className="p-3 bg-white border rounded-3 shadow-sm border-start border-4 border-primary">
                            <h4 className="fw-bold text-primary mb-1" style={{ fontSize: "1.1rem" }}>
                              <i className="fa-solid fa-plug me-2"></i>{integ.label}
                            </h4>
                            <p className="mb-0 text-muted">{integ.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className="faq__area pt-130 pb-140">
              <div className="container g-0 line pb-140">
                <div className="line-3"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="faq__img">
                      <Image
                        priority
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                        src="/assets/imgs/thumb/faq.jpg"
                        alt="FAQ Image"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="faq__content">
                      <h2 className="faq__title title-anim">
                        Frequently Asked Questions
                      </h2>
                      <div className="faq__list shadow-sm border rounded-3 p-3">
                        <Accordion defaultActiveKey="0" className="accordion" id="faqAccordion">
                          {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={String(index)} className="accordion-item mb-2 border rounded" key={index}>
                              <Accordion.Header className="accordion-header">
                                {faq.question}
                              </Accordion.Header>
                              <Accordion.Body className="accordion-body">
                                <p className="mb-0 text-muted">{faq.answer}</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="cta__area py-5 bg-dark text-white">
            <div className="container line pb-110">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content text-center py-5">
                    <p className="cta__sub-title mb-2 text-primary fw-bold text-uppercase tracking-wider">Transform Your Operations Today</p>
                    <h2 className="cta__title title-anim mb-4 text-white">
                      Ready to upgrade your system with {pageTitle}?
                    </h2>
                    <div className="btn_wrapper d-flex gap-3 justify-content-center mt-4">
                      <Link href="/contact" className="wc-btn-primary btn-hover btn-item">
                        <span></span>Book Live Demo <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                      <Link href="/contact" className="wc-btn-dark btn-hover btn-item">
                        <span></span>Start Free Trial <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </RootLayout>
      </main>
    </>
  );
};

export default CloudBillingSoftwareServicePage;
