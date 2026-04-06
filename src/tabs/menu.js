import heroImg         from "../assets/hero-coast.jpg";
import imgShakshuka    from "../assets/dish-shakshuka.jpg";
import imgAsida        from "../assets/dish-asida.jpg";
import imgBazeen       from "../assets/dish-bazeen.jpg";
import imgCouscous     from "../assets/dish-couscous.jpg";
import imgSamak        from "../assets/dish-samak.jpg";
import imgMbakbaka     from "../assets/dish-mbakbaka.jpg";
import imgRuzKhlata    from "../assets/dish-ruz-khlata.jpg";
import imgRashta       from "../assets/dish-rashta.jpg";
import imgMakroudh     from "../assets/dish-makroudh.jpg";
import imgBasbousa     from "../assets/dish-basbousa.jpg";
import imgBaklawa      from "../assets/dish-baklawa.jpg";
import imgCrepe        from "../assets/dish-crepe.jpg";
import imgMintTea      from "../assets/dish-mint-tea.jpg";
import imgAsbane        from "../assets/dish-asbane.jpg";
import imgBatataMabatna from "../assets/dish-batata-mabatna.jpg";
import imgBrak          from "../assets/dish-brak.jpg";
import imgShorba        from "../assets/dish-shorba.jpg";
import imgKhubzTannour  from "../assets/dish-khubz-tannour.jpg";

const loadMenu = () => {
  const content = document.getElementById("content");

  // ── SECTION 1: Menu Hero ──────────────────────────────────────────────────

  const menuHero = document.createElement("div");
  menuHero.classList.add("menu-hero");
  menuHero.style.backgroundImage = `url(${heroImg})`;

  const menuHeroInner = document.createElement("div");
  menuHeroInner.classList.add("menu-hero-inner");

  const heroLabel = document.createElement("span");
  heroLabel.classList.add("section-label");
  heroLabel.textContent = "Our Menu";

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("menu-title");
  heroTitle.textContent = "The Table of Sahel";

  const heroSubtitle = document.createElement("p");
  heroSubtitle.classList.add("menu-subtitle");
  heroSubtitle.textContent = "Authentic Libyan dishes from the coast";

  menuHeroInner.appendChild(heroLabel);
  menuHeroInner.appendChild(heroTitle);
  menuHeroInner.appendChild(heroSubtitle);
  menuHero.appendChild(menuHeroInner);
  content.appendChild(menuHero);

  // ── SECTION 2: Menu Body ──────────────────────────────────────────────────

  // Each dish carries its own imported image alongside name/desc/price
  const sections = [
    {
      label: "To Start",
      title: "Starters",
      dishes: [
        { name: "Shakshuka",     desc: "Spiced tomato and egg dish",                            price: "$12", img: imgShakshuka    },
        { name: "Shorba",        desc: "Libyan spiced lamb soup with orzo and fresh herbs",      price: "$10", img: imgShorba       },
        { name: "Khubz Tannour", desc: "Traditional clay-oven flatbread, blistered and charred", price: "$5",  img: imgKhubzTannour },
      ],
    },
    {
      label: "The Main Event",
      title: "Mains",
      dishes: [
        { name: "Bazeen",          desc: "Libya's iconic national dish, hard barley dough served with lamb stew",      price: "$24", img: imgBazeen     },
        { name: "Couscous", desc: "Slow-cooked lamb and vegetables over couscous",                         price: "$22", img: imgCouscous   },
        { name: "Samak Mashwi",    desc: "Libyan grilled sea bass with chermoula",                                price: "$28", img: imgSamak      },
        { name: "Mbakbaka",        desc: "Libyan spiced pasta with tomato and lamb",                              price: "$20", img: imgMbakbaka   },
        { name: "Ruz Bil Khlata",  desc: "Fragrant rice with slow-roasted lamb, almonds, cashews and raisins",   price: "$26", img: imgRuzKhlata  },
        { name: "Rashta",          desc: "Homemade flat noodles with braised lamb, chickpeas and rich tomato stew",   price: "$22", img: imgRashta  },
      ],
    },
    {
      label: "On the Side",
      title: "Sides",
      dishes: [
        { name: "Asbane",           desc: "Libyan stuffed sheep intestines with spiced rice and herbs",     price: "$14", img: imgAsbane        },
        { name: "Batata Mabatna",   desc: "Golden fried potatoes stuffed with spiced minced meat",          price: "$10", img: imgBatataMabatna },
        { name: "Brak",             desc: "Crispy fried pastry rolls filled with spiced meat, egg and herbs",  price: "$9", img: imgBrak         },
      ],
    },
    {
      label: "To Finish",
      title: "Desserts",
      dishes: [
        { name: "Asida",          desc: "Traditional Libyan porridge with honey and butter", price: "$8",  img: imgAsida     },
        { name: "Makroudh",       desc: "Semolina and date pastries with sesame and pistachio", price: "$7",  img: imgMakroudh   },
        { name: "Basbousa",       desc: "Golden semolina cake soaked in syrup with almonds",   price: "$8",  img: imgBasbousa   },
        { name: "Baklawa", desc: "Crispy filo layers with pistachio and honey syrup",   price: "$10", img: imgBaklawa    },
        { name: "Nutella Crepe",  desc: "Thin crepe filled with Nutella, banana and strawberry", price: "$11", img: imgCrepe    },
        { name: "Mint Tea", desc: "Traditional three-pour tea service",                 price: "$5",  img: imgMintTea    },
      ],
    },
  ];

  const menuBody = document.createElement("div");
  menuBody.classList.add("menu-body");

  const menuInner = document.createElement("div");
  menuInner.classList.add("menu-inner");

  // Loop over sections — one iteration builds one full Starters / Mains / Desserts block
  sections.forEach((section) => {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section", "content-fade");

    const sectionLabel = document.createElement("span");
    sectionLabel.classList.add("menu-section-label");
    sectionLabel.textContent = section.label;

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("menu-section-title");
    sectionTitle.textContent = section.title;

    const sectionDivider = document.createElement("div");
    sectionDivider.classList.add("menu-section-divider");

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");

    // Inner loop — one iteration builds one dish card
    section.dishes.forEach((dish) => {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      // Photo at the top of the card
      const itemImg = document.createElement("img");
      itemImg.classList.add("menu-item-img");
      itemImg.src = dish.img;
      itemImg.alt = dish.name;
      itemImg.loading = "lazy";

      const itemBody = document.createElement("div");
      itemBody.classList.add("menu-item-body");

      const itemName = document.createElement("p");
      itemName.classList.add("menu-item-name");
      itemName.textContent = dish.name;

      const itemDesc = document.createElement("p");
      itemDesc.classList.add("menu-item-desc");
      itemDesc.textContent = dish.desc;

      const itemPrice = document.createElement("span");
      itemPrice.classList.add("menu-item-price");
      itemPrice.textContent = dish.price;

      itemBody.appendChild(itemName);
      itemBody.appendChild(itemDesc);
      itemBody.appendChild(itemPrice);

      item.appendChild(itemImg);
      item.appendChild(itemBody);
      menuItems.appendChild(item);
    });

    menuSection.appendChild(sectionLabel);
    menuSection.appendChild(sectionTitle);
    menuSection.appendChild(sectionDivider);
    menuSection.appendChild(menuItems);
    menuInner.appendChild(menuSection);
  });

  menuBody.appendChild(menuInner);
  content.appendChild(menuBody);
};

export default loadMenu;
