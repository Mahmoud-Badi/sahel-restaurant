import "./styles.css";
import loadHome    from "./tabs/home.js";
import loadMenu    from "./tabs/menu.js";
import loadContact from "./tabs/contact.js";
import sahelLogo   from "./assets/sahel-logo.png";

// Set the Arabic calligraphy logo — imported through webpack so it gets
// a hashed production URL, same as any other bundled asset
document.getElementById("logo-arabic-img").src = sahelLogo;

const content    = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");

// Maps each button's label to the function that builds that tab's content
const tabLoaders = {
  Home:    loadHome,
  Menu:    loadMenu,
  Contact: loadContact,
};

// Removes the active class from every button, then applies it only to the
// one that was just clicked — also updates aria-current for screen readers
const setActiveTab = (activeButton) => {
  navButtons.forEach((btn) => {
    btn.classList.remove("btn-active");
    btn.removeAttribute("aria-current");
  });
  activeButton.classList.add("btn-active");
  activeButton.setAttribute("aria-current", "page");
};

// Clears #content, triggers the entrance animation, then calls the right loader
const loadTab = (loaderFn) => {
  // Remove all existing child nodes — safer than clearing innerHTML
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // Remove the class first so re-clicking the same tab still replays the animation
  content.classList.remove("tab-enter");
  // A tiny timeout lets the browser register the removal before we re-add
  setTimeout(() => content.classList.add("tab-enter"), 10);

  loaderFn();

  // Move focus to #content so keyboard/screen-reader users know the page changed
  content.focus();
};

// Wire up every nav button with a single loop
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button);
    const loader = tabLoaders[button.textContent.trim()];
    if (loader) loadTab(loader);
  });
});

// Scroll effect — adds a shadow to the header once the user scrolls down
const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true }
);

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav   = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("nav-open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile nav when a tab is selected
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    siteNav.classList.remove("nav-open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Hero CTA — "Explore Our Menu" button switches to the Menu tab.
// Uses event delegation: one listener on the document catches the click
// even though the button is created dynamically by loadHome().
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("hero-cta")) {
    const menuBtn = [...navButtons].find(
      (btn) => btn.textContent.trim() === "Menu"
    );
    if (menuBtn) {
      setActiveTab(menuBtn);
      loadTab(loadMenu);
    }
  }
});

// Render the Home tab on first load
loadTab(loadHome);
