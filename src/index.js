import "./styles.css";

// TODO: import loadHome, loadMenu, loadContact from their tab modules
// import loadHome from "./tabs/home.js";
// import loadMenu from "./tabs/menu.js";
// import loadContact from "./tabs/contact.js";

// TODO: get a reference to the #content div
// const contentDiv = document.getElementById("content");

// TODO: get references to all three nav buttons
// const navButtons = document.querySelectorAll(".nav-btn");

// ─── setActiveTab ───────────────────────────────────────────────────────────
// TODO: write a helper that:
//   1. Removes .btn-active and aria-current="page" from ALL nav buttons
//   2. Adds .btn-active and aria-current="page" to the clicked button only
// const setActiveTab = (activeButton) => { ... };

// ─── loadTab ─────────────────────────────────────────────────────────────────
// TODO: write a helper that:
//   1. Clears contentDiv.innerHTML (or removes all child nodes)
//   2. Adds the .tab-enter CSS class to contentDiv to trigger the entrance animation
//      (remove it first if already present, then re-add so it fires each time)
//   3. Calls the correct loader function passed in as an argument
//   4. Moves focus to contentDiv for keyboard/screen-reader users
// const loadTab = (loaderFn) => { ... };

// ─── Event listeners ─────────────────────────────────────────────────────────
// TODO: loop over navButtons and add a "click" listener to each one.
//       Each listener should:
//         - call setActiveTab(button)
//         - call loadTab with the matching loader:
//             button text "Home"    → loadHome
//             button text "Menu"    → loadMenu
//             button text "Contact" → loadContact
//
// navButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     setActiveTab(button);
//     // match button.textContent.trim() to the right loader
//   });
// });

// ─── Header scroll effect ────────────────────────────────────────────────────
// TODO (optional enhancement): add/remove the .scrolled class on .site-header
//   when the page scrolls past a threshold — the CSS already has styles for it.
// window.addEventListener("scroll", () => {
//   const header = document.querySelector(".site-header");
//   header.classList.toggle("scrolled", window.scrollY > 20);
// }, { passive: true });

// ─── Mobile nav toggle ───────────────────────────────────────────────────────
// TODO (optional enhancement): wire up the .nav-toggle button to
//   open/close the mobile nav by toggling .nav-open on .site-nav
//   and .open on the toggle button itself.
//   Update aria-expanded on the toggle button each time.
// const navToggle = document.querySelector(".nav-toggle");
// const siteNav   = document.querySelector(".site-nav");
// navToggle.addEventListener("click", () => { ... });

// ─── Initial page load ───────────────────────────────────────────────────────
// TODO: call loadHome() so the Home tab renders when the page first opens
// loadHome();
