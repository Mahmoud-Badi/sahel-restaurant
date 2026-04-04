// TODO: create and append menu content to #content using JS only.
//
// This function builds a two-part layout:
//
//   1. MENU HERO (.menu-hero)
//      - An eyebrow label: "Our Menu"
//      - A large title (e.g. "The Table of Sahel")
//      - A subtitle (e.g. "Authentic Libyan dishes from the coast")
//      Structure hint:
//        div.menu-hero > div.menu-hero-inner >
//          span.section-label + h1.menu-title + p.menu-subtitle
//
//   2. MENU BODY (.menu-body)
//      Structure hint:
//        div.menu-body > div.menu-inner > [three .menu-section blocks]
//
//      Each .menu-section contains:
//        span.menu-section-label  — e.g. "To Start"
//        h2.menu-section-title    — e.g. "Starters"
//        div.menu-section-divider
//        div.menu-items           — one .menu-item per dish (see below)
//
//      Each .menu-item contains:
//        div.menu-item-info >
//          p.menu-item-name   — the dish name
//          p.menu-item-desc   — the description
//        span.menu-item-price — e.g. "$12"
//
//      Add .content-fade to each .menu-section for staggered entrance animation.
//
// ─── DISHES DATA ─────────────────────────────────────────────────────────────
//
// STARTERS
//   - Shakshuka           | Spiced tomato and egg dish                              | $12
//   - Asida               | Traditional Libyan porridge with honey and butter       | $8
//   - Harira              | Libyan spiced soup with chickpeas and lamb               | $10
//
// MAINS
//   - Bazeen              | Libya's iconic national dish, hard barley dough with lamb stew | $24
//   - Couscous Libyen     | Slow-cooked lamb and vegetables over couscous           | $22
//   - Samak Mashwi        | Libyan grilled sea bass with chermoula                  | $28
//   - Mbakbaka            | Libyan spiced pasta with tomato and lamb                | $20
//
// DESSERTS
//   - Asida Helwa         | Sweet semolina pudding with dates                       | $9
//   - Makroudh            | Semolina and date pastries                              | $7
//   - Libyan Mint Tea     | Traditional three-pour tea service                      | $5
//
// RULES:
//   - No innerHTML anywhere — use createElement and appendChild only
//   - Store dish data in plain JS objects or arrays (not hardcoded in the DOM)
//   - Each section needs a heading, label, divider, and a list of dish items
//   - Each dish item needs a name, description, and price

const loadMenu = () => {
  // your implementation here
};

export default loadMenu;
