let menu_open = false;

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.getElementById("nav").classList.add("on-scroll");
  } else {
    document.getElementById("nav").classList.remove("on-scroll");
  }
});

document.getElementById("menu-button").addEventListener("click", () => {
  console.log(menu_open);
  menu_open ? (menu_open = false) : (menu_open = true);
  changeMenuState();
});

let mobileMenu = document.getElementById("mobile-menu");

let changeMenuState = () => {
  menu_open
    ? mobileMenu.classList.add("open")
    : mobileMenu.classList.remove("open");
};

document.getElementById("main").addEventListener("click", () => {
  menu_open = false;
  changeMenuState();
});
