// TODO: create and append all home page content to #content using JS only.
//
// This function builds three sections:
//
//   1. HERO SECTION (.hero)
//      - An eyebrow line (e.g. "Est. 2010 · Tripoli, Libya")
//      - A large headline: something evocative about Sahel / the Libyan sea
//        Tip: use two lines, e.g. "Where the Desert / Meets the Sea"
//        Wrap a word in <em> for the italic gold highlight from the CSS
//      - A tagline paragraph (1–2 sentences about the restaurant's identity)
//      - A CTA button labelled "Explore Our Menu" (clicking it could switch
//        to the Menu tab — wire this up in index.js later if you like)
//      Structure hint:
//        div.hero > div.hero-inner >
//          span.hero-eyebrow + h1.hero-headline + p.hero-tagline + button.hero-cta
//
//   2. ABOUT SECTION (.about-section)
//      - A label: "Our Story"
//      - A heading: something about Sahel's identity
//        Wrap a key word in <em> for the italic terracotta tint from the CSS
//      - A paragraph describing the restaurant, its Libyan coastal identity,
//        the team, and the philosophy behind the food
//      Structure hint:
//        section.about-section > div.about-inner >
//          div (label + heading) + div (body paragraph)
//        Add .content-fade to both inner divs for the staggered entrance animation
//
//   3. HIGHLIGHTS SECTION (.highlights-section)
//      - A header with a label ("Why Sahel") and a heading
//      - A grid of 3 highlight cards (.highlight-card), one for each of:
//
//          a) "Fresh Catch"
//             desc: Daily-caught fish and seafood from Tripoli's harbour,
//                   cooked to ancient Libyan coastal recipes
//             SVG icon: a fish shape (or wave/water icon)
//
//          b) "Traditional Recipes"
//             desc: Dishes passed down through Libyan families for centuries —
//                   from bazeen to mbakbaka, unchanged and uncompromised
//             SVG icon: an open book or a pot/flame
//
//          c) "Coastal Ambiance"
//             desc: Sun-bleached walls, the scent of the sea, and warm Libyan
//                   hospitality — a corner of the Mediterranean coastline
//             SVG icon: a sun, a wave, or a building/arch
//
//      Structure hint for each card:
//        div.highlight-card.content-fade >
//          div.highlight-icon (contains inline SVG) +
//          h3.highlight-title +
//          p.highlight-desc
//
// RULES:
//   - No innerHTML anywhere — use createElement and appendChild only
//   - No hardcoded HTML strings
//   - Each element's classes, text, and attributes must be set via JS properties

const loadHome = () => {
  // your implementation here
};

export default loadHome;
