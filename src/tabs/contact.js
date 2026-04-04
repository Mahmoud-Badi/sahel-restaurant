// TODO: create and append contact page content to #content using JS only.
//
// This function builds a two-part layout:
//
//   1. CONTACT HERO (.contact-hero)
//      - An eyebrow label: "Get in Touch"
//      - A large title (e.g. "Visit Sahel")
//      - A subtitle (e.g. "We'd love to welcome you to our table")
//      Structure hint:
//        div.contact-hero > div.contact-hero-inner >
//          span.section-label + h1.contact-title + p.contact-subtitle
//
//   2. CONTACT BODY (.contact-body)
//      Structure hint:
//        div.contact-body > div.contact-inner >
//          div (left: info column) + div (right: form column)
//
//      Add .content-fade to both columns for staggered entrance animation.
//
// ─── LEFT COLUMN: Contact Info ───────────────────────────────────────────────
//
//   h2.contact-info-heading — e.g. "Find Us"
//
//   div.contact-details — four .contact-detail-item blocks:
//
//     a) Address
//        label: "Address"
//        value: "14 Corniche Road, Tripoli, Libya"
//        icon hint: a location pin SVG
//
//     b) Phone
//        label: "Phone"
//        value: "+218 21 333 4567"
//        icon hint: a phone SVG
//
//     c) Email
//        label: "Email"
//        value: "hello@sahelrestaurant.com"
//        icon hint: an envelope SVG
//
//     d) Hours — instead of a single value, render a small hours table:
//        label: "Hours"
//        Three .hours-row items, each with:
//          span.hours-days + span.hours-time
//            Mon – Thu  |  12:00 pm – 10:00 pm
//            Fri – Sat  |  12:00 pm – 11:00 pm
//            Sunday     |   1:00 pm –  9:00 pm
//        icon hint: a clock SVG
//
//     Each .contact-detail-item contains:
//       div.contact-detail-icon (inline SVG inside) +
//       div >
//         span.contact-detail-label +
//         span.contact-detail-value  (or div for the hours table)
//
// ─── RIGHT COLUMN: Reservation Form ─────────────────────────────────────────
//
//   div.reservation-form-wrap >
//     h2.form-heading      — e.g. "Make a Reservation"
//     p.form-subheading    — e.g. "Reserve your table for an unforgettable evening"
//     form.reservation-form (novalidate attribute) >
//
//       div.form-row >           (two-column on tablet+)
//         div.form-group >
//           label.form-label (for="res-name")  — "Full Name" + span.required "*"
//           input.form-input  id="res-name"  type="text"  autocomplete="name"
//                             placeholder="e.g. Ahmed Al-Mansouri"  required
//         div.form-group >
//           label.form-label (for="res-email") — "Email" + span.required "*"
//           input.form-input  id="res-email" type="email" autocomplete="email"
//                             placeholder="you@example.com"  required
//
//       div.form-row >
//         div.form-group >
//           label.form-label (for="res-date")  — "Date" + span.required "*"
//           input.form-input  id="res-date"  type="date"  required
//         div.form-group >
//           label.form-label (for="res-party") — "Party Size" + span.required "*"
//           select.form-select id="res-party" required >
//             option value="" disabled selected — "Select…"
//             options for 1 through 10 guests
//             option value="10+" — "10+ guests"
//
//       div.form-group >
//         label.form-label (for="res-msg") — "Special Requests"
//         textarea.form-textarea id="res-msg" rows="4"
//                  placeholder="Allergies, celebrations, seating preferences…"
//
//       button.form-submit type="submit" — "Request Reservation"
//         (you can add a small arrow character after the text if you like)
//
// RULES:
//   - No innerHTML anywhere — use createElement and appendChild only
//   - All form inputs need explicit <label> elements with matching `for`/`id`
//   - Use setAttribute for HTML attributes like type, id, for, required, autocomplete
//   - SVG icons: create SVG elements with createElementNS("http://www.w3.org/2000/svg", "svg")
//     and set attributes with setAttribute

const loadContact = () => {
  // your implementation here
};

export default loadContact;
