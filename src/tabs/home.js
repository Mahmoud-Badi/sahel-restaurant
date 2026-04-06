import heroImg   from "../assets/hero-coast.jpg";
import aboutSrc  from "../assets/about-coast.jpg";
import desertImg from "../assets/desert-oasis.jpg";

const loadHome = () => {
  const content = document.getElementById("content");

  // ── SECTION 1: Hero ───────────────────────────────────────────────────────
  // The actual photo sits as the background; the CSS ::before overlay
  // darkens it so text stays readable while the scenery bleeds through

  const hero = document.createElement("div");
  hero.classList.add("hero");
  hero.style.backgroundImage = `url(${heroImg})`;

  const heroInner = document.createElement("div");
  heroInner.classList.add("hero-inner");

  const eyebrow = document.createElement("span");
  eyebrow.classList.add("hero-eyebrow");
  eyebrow.textContent = "Est. 2004 · Ra's Al Hilal, Libya";

  const headline = document.createElement("h1");
  headline.classList.add("hero-headline");
  headline.appendChild(document.createTextNode("Where the Desert "));
  const headlineEm = document.createElement("em");
  headlineEm.textContent = "Meets";
  headline.appendChild(headlineEm);
  headline.appendChild(document.createTextNode(" the Sea"));

  const tagline = document.createElement("p");
  tagline.classList.add("hero-tagline");
  tagline.textContent =
    "A Libyan coastal restaurant celebrating the flavors, warmth, and culture of Libya's Mediterranean coastline.";

  const cta = document.createElement("button");
  cta.classList.add("hero-cta");
  cta.textContent = "Explore Our Menu";

  heroInner.appendChild(eyebrow);
  heroInner.appendChild(headline);
  heroInner.appendChild(tagline);
  heroInner.appendChild(cta);
  hero.appendChild(heroInner);
  content.appendChild(hero);

  // ── SECTION 2: About ──────────────────────────────────────────────────────
  // Split layout: text on the left, the wide coastal cliffs photo on the right

  const about = document.createElement("section");
  about.classList.add("about-section");

  const aboutInner = document.createElement("div");
  aboutInner.classList.add("about-inner");

  // Left — label + heading + body
  const aboutLeft = document.createElement("div");
  aboutLeft.classList.add("content-fade");

  const aboutLabel = document.createElement("p");
  aboutLabel.classList.add("about-label");
  aboutLabel.textContent = "Our Story";

  const aboutHeading = document.createElement("h2");
  aboutHeading.classList.add("about-heading");
  aboutHeading.appendChild(document.createTextNode("Born from the "));
  const aboutEm = document.createElement("em");
  aboutEm.textContent = "Libyan Sea";
  aboutHeading.appendChild(aboutEm);

  const aboutBody = document.createElement("p");
  aboutBody.classList.add("about-body");
  aboutBody.textContent =
    "Sahel was founded on a single belief: that Libyan coastal cooking deserves a seat at the world's table. Every dish on our menu is rooted in recipes passed down through generations of fishing families along the shores of Ra's Al Hilal, cooked with patience, spiced with tradition, and served with the warmth that defines Libyan hospitality.";

  aboutLeft.appendChild(aboutLabel);
  aboutLeft.appendChild(aboutHeading);
  aboutLeft.appendChild(aboutBody);

  // Right — the coastal cliffs photo in a styled frame
  const aboutRight = document.createElement("div");
  aboutRight.classList.add("about-photo-wrap", "content-fade");

  const aboutImg = document.createElement("img");
  aboutImg.classList.add("about-photo");
  aboutImg.src = aboutSrc;
  aboutImg.alt = "The crystal-clear turquoise waters of the Libyan coastline";
  aboutImg.loading = "lazy";

  aboutRight.appendChild(aboutImg);

  aboutInner.appendChild(aboutLeft);
  aboutInner.appendChild(aboutRight);
  about.appendChild(aboutInner);
  content.appendChild(about);

  // ── SECTION 3: Scenic strip ───────────────────────────────────────────────
  // Full-width photo of the desert oasis — acts as a visual breath between sections

  const scenicStrip = document.createElement("div");
  scenicStrip.classList.add("scenic-strip");
  scenicStrip.style.backgroundImage = `url(${desertImg})`;
  scenicStrip.setAttribute("aria-hidden", "true");

  const stripOverlay = document.createElement("div");
  stripOverlay.classList.add("scenic-strip-overlay");

  const stripQuote = document.createElement("blockquote");
  stripQuote.classList.add("scenic-strip-quote");
  stripQuote.textContent = "\"The desert and the sea. Two souls of Libya, one table at Sahel.\"";

  stripOverlay.appendChild(stripQuote);
  scenicStrip.appendChild(stripOverlay);
  content.appendChild(scenicStrip);

  // ── SECTION 4: Highlights ─────────────────────────────────────────────────

  const highlights = document.createElement("section");
  highlights.classList.add("highlights-section");

  const highlightsHeader = document.createElement("div");
  highlightsHeader.classList.add("highlights-header");

  const highlightsLabel = document.createElement("p");
  highlightsLabel.classList.add("section-label");
  highlightsLabel.textContent = "Why Sahel";

  const highlightsHeading = document.createElement("h2");
  highlightsHeading.classList.add("highlights-heading");
  highlightsHeading.textContent = "Three reasons to come back";

  const divider = document.createElement("div");
  divider.classList.add("section-divider");

  highlightsHeader.appendChild(highlightsLabel);
  highlightsHeader.appendChild(highlightsHeading);
  highlightsHeader.appendChild(divider);
  highlights.appendChild(highlightsHeader);

  const cards = [
    {
      title: "Fresh Catch",
      desc: "Daily-caught fish and seafood from Tripoli's harbour, cooked to ancient Libyan coastal recipes.",
      svgPath: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    },
    {
      title: "Traditional Recipes",
      desc: "Dishes passed down through Libyan families for centuries, from bazeen to mbakbaka, unchanged and uncompromised.",
      svgPath: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    },
    {
      title: "Coastal Ambiance",
      desc: "Sun-bleached walls, the scent of the sea, and warm Libyan hospitality, a corner of the Mediterranean coastline.",
      svgPath: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z",
    },
  ];

  const grid = document.createElement("div");
  grid.classList.add("highlights-grid");

  cards.forEach((cardData) => {
    const card = document.createElement("div");
    card.classList.add("highlight-card", "content-fade");

    const iconWrap = document.createElement("div");
    iconWrap.classList.add("highlight-icon");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", cardData.svgPath);

    svg.appendChild(path);
    iconWrap.appendChild(svg);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("highlight-title");
    cardTitle.textContent = cardData.title;

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("highlight-desc");
    cardDesc.textContent = cardData.desc;

    card.appendChild(iconWrap);
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    grid.appendChild(card);
  });

  highlights.appendChild(grid);
  content.appendChild(highlights);
};

export default loadHome;
