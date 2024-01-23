import navbarConfig from "../../config/navbarConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerWrapper = document.querySelector(".hamburgerWrapper");
  const body = document.body;
  const mobileMenuContainer = document.querySelector(".mobileMenuContainer");
  const itemsDesktopWrapper = document.querySelector(".itemsDesktopWrapper");
  const navbar = document.querySelector(".navbar");
  let itemsWrapper;

  const toggleMenu = () => {
    hamburgerWrapper.classList.toggle("rotate");
    body.classList.toggle("menuOpen");

    if (body.classList.contains("menuOpen")) {
      navbar.style.opacity = "0.7";
      if (!itemsWrapper) {
        itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("itemsWrapper");
        body.style.overflow = "hidden";
        navbarConfig.map((item) => {
          const paragraph = document.createElement("a");
          paragraph.href = item.link;
          paragraph.textContent = item.title;
          paragraph.classList.add("item");
          itemsWrapper.appendChild(paragraph);

          if (item.id === 3) {
            paragraph.classList.add("active");
          }
        });
      }

      mobileMenuContainer.appendChild(itemsWrapper);
    } else {
      navbar.style.opacity = "1";
      if (itemsWrapper) {
        body.style.overflow = "auto";
        navbar.style.position = "fixed";
        mobileMenuContainer.removeChild(itemsWrapper);
        itemsWrapper = null;
      }
    }
  };
  const updateNavbarOpacity = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = navbar.offsetHeight;

    const opacity = Math.min(scrollPosition / navbarHeight, 1);

    opacity ? navbar.style.opacity = "0.9" : navbar.style.opacity = "1";
  };

  updateNavbarOpacity();

  window.addEventListener("scroll", updateNavbarOpacity);

  navbarConfig.map((item) => {
    const paragraph = document.createElement("a");
    paragraph.textContent = item.title;
    paragraph.href = item.link;
    paragraph.classList.add("item");
    itemsDesktopWrapper.appendChild(paragraph);

    if (item.id === 3) {
      paragraph.classList.add("active");
    }
  });

  hamburgerWrapper.addEventListener("click", toggleMenu);
});
