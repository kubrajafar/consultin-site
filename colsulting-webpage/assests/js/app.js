const nav_menu = document.querySelector(".nav-menu");
const hamburger_iconBox = document.querySelector(".hamburger-iconBox");
const dropdown_menuBox = document.querySelector(".dropdown-menuBox");
const dropdown_menu = document.querySelector(".dropdown-menu");

console.log(nav_menu);
hamburger_iconBox.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
});

dropdown_menuBox.addEventListener("click", () => {
  if (dropdown_menu.style.display == "block") {
    dropdown_menu.style.display = "none";
  } else {
    dropdown_menu.style.display = "block";
  }
});

