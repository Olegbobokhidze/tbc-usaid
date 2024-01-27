import navbarConfig from "../../config/navbarConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerWrapper = document.querySelector(".hamburgerWrapper");
  const body = document.body;
  const mobileMenuContainer = document.querySelector(".mobileMenuContainer");
  const itemsDesktopWrapper = document.querySelector(".itemsDesktopWrapper");
  const mobileOverlay = document.querySelector(".mobileOverlay");
  const navbar = document.querySelector(".navbar");
  let itemsWrapper;

  const createItemsWrapper = () => {
    if (!itemsWrapper) {
      itemsWrapper = document.createElement("div");
      itemsWrapper.classList.add("itemsWrapper");
      navbarConfig.forEach((item) => {
        const paragraph = document.createElement("a");
        paragraph.href = item.link;
        paragraph.textContent = item.title;
        paragraph.classList.add("item");
        itemsWrapper.appendChild(paragraph);

        if (item.id === 3) {
          paragraph.classList.add("active");
        }
      });
      mobileMenuContainer.appendChild(itemsWrapper);
    }
  };

  const closeMenu = () => {
    body.classList.remove("menuOpen");
    mobileOverlay.style.display = "none";
    navbar.style.opacity = "1";
    body.style.overflow = "auto";
    if (itemsWrapper) {
      itemsWrapper.remove();
      itemsWrapper = null;
    }
  };

  const toggleMenu = () => {
    hamburgerWrapper.classList.toggle("rotate");
    body.classList.toggle("menuOpen");

    if (body.classList.contains("menuOpen")) {
      mobileOverlay.style.display = "block";
      navbar.style.opacity = "0.7";
      if (window.innerWidth <= 768) {
        body.style.overflow = "hidden";
        createItemsWrapper();
      }
    } else {
      closeMenu();
    }
  };

  const updateNavbarOpacity = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = navbar.offsetHeight;
    const opacity = Math.min(scrollPosition / navbarHeight, 1);
    opacity ? (navbar.style.opacity = "0.9") : (navbar.style.opacity = "1");
  };

  updateNavbarOpacity();

  window.addEventListener("scroll", updateNavbarOpacity);

  navbarConfig.forEach((item) => {
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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && body.classList.contains("menuOpen")) {
      closeMenu();
      hamburgerWrapper.classList.remove("rotate");
    }
  });
});
