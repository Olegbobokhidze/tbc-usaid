import navbarConfig from "../../config/navbarConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerWrapper = document.querySelector(".hamburgerWrapper");
  const body = document.body;
  const mobileMenuContainer = document.querySelector(".mobileMenuContainer");
  let itemsWrapper;

  const toggleMenu = () => {
    hamburgerWrapper.classList.toggle("rotate");
    body.classList.toggle("menuOpen");

    if (body.classList.contains("menuOpen")) {
      if (!itemsWrapper) {
        itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("itemsWrapper");

        navbarConfig.forEach((item) => {
          const paragraph = document.createElement("p");
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
      if (itemsWrapper) {
        mobileMenuContainer.removeChild(itemsWrapper);
        itemsWrapper = null;
      }
    }
  };


  hamburgerWrapper.addEventListener("click", toggleMenu);
});