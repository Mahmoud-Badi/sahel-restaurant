import aboutSrc from "../assets/about-coast.jpg";

// Helper — builds one contact detail row (icon + label + value)
const createDetailItem = (svgPath, label, valueContent) => {
  const item = document.createElement("div");
  item.classList.add("contact-detail-item");

  const iconWrap = document.createElement("div");
  iconWrap.classList.add("contact-detail-icon");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", svgPath);
  svg.appendChild(path);
  iconWrap.appendChild(svg);

  const textCol = document.createElement("div");
  textCol.classList.add("contact-detail-text");

  const detailLabel = document.createElement("span");
  detailLabel.classList.add("contact-detail-label");
  detailLabel.textContent = label;

  if (typeof valueContent === "string") {
    const detailValue = document.createElement("span");
    detailValue.classList.add("contact-detail-value");
    detailValue.textContent = valueContent;
    textCol.appendChild(detailLabel);
    textCol.appendChild(detailValue);
  } else {
    textCol.appendChild(detailLabel);
    textCol.appendChild(valueContent);
  }

  item.appendChild(iconWrap);
  item.appendChild(textCol);
  return item;
};

const loadContact = () => {
  const content = document.getElementById("content");

  // ── SECTION 1: Contact Hero ───────────────────────────────────────────────

  const contactHero = document.createElement("div");
  contactHero.classList.add("contact-hero");
  contactHero.style.backgroundImage = `url(${aboutSrc})`;

  const contactHeroInner = document.createElement("div");
  contactHeroInner.classList.add("contact-hero-inner");

  const heroLabel = document.createElement("span");
  heroLabel.classList.add("section-label");
  heroLabel.textContent = "Get in Touch";

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("contact-title");
  heroTitle.textContent = "Visit Sahel";

  const heroSubtitle = document.createElement("p");
  heroSubtitle.classList.add("contact-subtitle");
  heroSubtitle.textContent = "We'd love to welcome you to our table";

  contactHeroInner.appendChild(heroLabel);
  contactHeroInner.appendChild(heroTitle);
  contactHeroInner.appendChild(heroSubtitle);
  contactHero.appendChild(contactHeroInner);
  content.appendChild(contactHero);

  // ── SECTION 2: Contact Body ───────────────────────────────────────────────

  const contactBody = document.createElement("div");
  contactBody.classList.add("contact-body");

  const contactInner = document.createElement("div");
  contactInner.classList.add("contact-inner");

  // ── Left column: contact info ─────────────────────────────────────────────

  const infoCol = document.createElement("div");
  infoCol.classList.add("content-fade");

  const infoHeading = document.createElement("h2");
  infoHeading.classList.add("contact-info-heading");
  infoHeading.textContent = "Find Us";

  const infoIntro = document.createElement("p");
  infoIntro.classList.add("contact-info-intro");
  infoIntro.textContent = "Perched on the cliffs of Ra\u2019s Al Hilal, overlooking the clearest water in Libya.";

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  infoCol.appendChild(infoHeading);
  infoCol.appendChild(infoIntro);
  infoCol.appendChild(contactDetails);

  const pinPath =
    "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-10.5 0a7.5 7.5 0 1 1 15 0c0 5.25-7.5 11.25-7.5 11.25S4.5 15.75 4.5 10.5z";
  const phonePath =
    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z";
  const emailPath =
    "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75";
  const clockPath = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z";

  const hoursData = [
    { days: "Mon – Thu", time: "12:00 pm – 10:00 pm" },
    { days: "Fri – Sat", time: "12:00 pm – 11:00 pm" },
    { days: "Sunday",    time:  "1:00 pm –  9:00 pm" },
  ];

  const hoursBlock = document.createElement("div");
  hoursData.forEach((row) => {
    const hoursRow = document.createElement("div");
    hoursRow.classList.add("hours-row");

    const days = document.createElement("span");
    days.classList.add("hours-days");
    days.textContent = row.days;

    const time = document.createElement("span");
    time.classList.add("hours-time");
    time.textContent = row.time;

    hoursRow.appendChild(days);
    hoursRow.appendChild(time);
    hoursBlock.appendChild(hoursRow);
  });

  contactDetails.appendChild(createDetailItem(pinPath,   "Address", "Ra\u2019s Al Hilal, Libya"));
  contactDetails.appendChild(createDetailItem(phonePath, "Phone",   "+218 84 333 4567"));
  contactDetails.appendChild(createDetailItem(emailPath, "Email",   "hello@sahelrestaurant.com"));
  contactDetails.appendChild(createDetailItem(clockPath, "Hours",   hoursBlock));

  // ── Right column: reservation form ───────────────────────────────────────

  const formCol = document.createElement("div");
  formCol.classList.add("content-fade");

  const formWrap = document.createElement("div");
  formWrap.classList.add("reservation-form-wrap");

  const formHeading = document.createElement("h2");
  formHeading.classList.add("form-heading");
  formHeading.textContent = "Make a Reservation";

  const formSubheading = document.createElement("p");
  formSubheading.classList.add("form-subheading");
  formSubheading.textContent = "Reserve your table for an unforgettable evening";

  const form = document.createElement("form");
  form.classList.add("reservation-form");
  form.setAttribute("novalidate", "");

  const createField = (id, labelText, inputType, placeholder, required = true, autocomplete = "") => {
    const group = document.createElement("div");
    group.classList.add("form-group");

    const label = document.createElement("label");
    label.classList.add("form-label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    if (required) {
      const star = document.createElement("span");
      star.classList.add("required");
      star.textContent = " *";
      label.appendChild(star);
    }

    const input = document.createElement("input");
    input.classList.add("form-input");
    input.setAttribute("id", id);
    input.setAttribute("type", inputType);
    if (placeholder)  input.setAttribute("placeholder", placeholder);
    if (required)     input.setAttribute("required", "");
    if (autocomplete) input.setAttribute("autocomplete", autocomplete);

    group.appendChild(label);
    group.appendChild(input);
    return group;
  };

  const row1 = document.createElement("div");
  row1.classList.add("form-row");
  row1.appendChild(createField("res-name",  "Full Name", "text",  "e.g. Ahmed Badi", true, "name"));
  row1.appendChild(createField("res-email", "Email",     "email", "you@example.com",         true, "email"));

  const row2 = document.createElement("div");
  row2.classList.add("form-row");
  row2.appendChild(createField("res-date", "Date", "date", "", true));

  const partyGroup = document.createElement("div");
  partyGroup.classList.add("form-group");

  const partyLabel = document.createElement("label");
  partyLabel.classList.add("form-label");
  partyLabel.setAttribute("for", "res-party");
  partyLabel.textContent = "Party Size";
  const partyStar = document.createElement("span");
  partyStar.classList.add("required");
  partyStar.textContent = " *";
  partyLabel.appendChild(partyStar);

  const partySelect = document.createElement("select");
  partySelect.classList.add("form-select");
  partySelect.setAttribute("id", "res-party");
  partySelect.setAttribute("required", "");

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Select…";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  partySelect.appendChild(defaultOpt);

  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `${i} guest${i > 1 ? "s" : ""}`;
    partySelect.appendChild(opt);
  }

  const optMore = document.createElement("option");
  optMore.value = "10+";
  optMore.textContent = "10+ guests";
  partySelect.appendChild(optMore);

  partyGroup.appendChild(partyLabel);
  partyGroup.appendChild(partySelect);
  row2.appendChild(partyGroup);

  const msgGroup = document.createElement("div");
  msgGroup.classList.add("form-group");

  const msgLabel = document.createElement("label");
  msgLabel.classList.add("form-label");
  msgLabel.setAttribute("for", "res-msg");
  msgLabel.textContent = "Special Requests";

  const msgTextarea = document.createElement("textarea");
  msgTextarea.classList.add("form-textarea");
  msgTextarea.setAttribute("id", "res-msg");
  msgTextarea.setAttribute("rows", "4");
  msgTextarea.setAttribute("placeholder", "Allergies, celebrations, seating preferences…");

  msgGroup.appendChild(msgLabel);
  msgGroup.appendChild(msgTextarea);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("form-submit");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Request Reservation →";

  form.appendChild(row1);
  form.appendChild(row2);
  form.appendChild(msgGroup);
  form.appendChild(submitBtn);

  formWrap.appendChild(formHeading);
  formWrap.appendChild(formSubheading);
  formWrap.appendChild(form);
  formCol.appendChild(formWrap);

  contactInner.appendChild(infoCol);
  contactInner.appendChild(formCol);
  contactBody.appendChild(contactInner);
  content.appendChild(contactBody);
};

export default loadContact;
