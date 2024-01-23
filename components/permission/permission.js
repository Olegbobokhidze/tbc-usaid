import permissionConfig from "../../config/permissionConfig.js";
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const overlay = document.querySelector(".permissionOverlay");
  const permission = document.querySelectorAll(".permission");
  permission.forEach((permissionItem) => {
    permissionItem.addEventListener("click", () => {
      container.style.display = "flex";
      container.scrollTop = 0;
      body.style.overflow = "hidden";
      overlay.style.display = "flex";
    });
  });
  const permissionCloseSvg = document.createElement("img");
  permissionCloseSvg.src = "../../assets/icons/iconPermissionClose.svg";
  permissionCloseSvg.classList.add("permissionCloseSvg");
  const container = document.querySelector(".permissionContainer");
  const buttonClose = document.createElement("button");
  buttonClose.innerHTML = "დახურვა";
  buttonClose.classList.add("buttonClose");
  buttonClose.addEventListener("click", () => {
    container.style.display = "none";
    body.style.overflow = "auto";
    overlay.style.display = "none";
  });
  permissionCloseSvg.addEventListener("click", () => {
    container.style.display = "none";
    body.style.overflow = "auto";
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", () => {
    container.style.display = "none";
    body.style.overflow = "auto";
    overlay.style.display = "none";
  });
  container.appendChild(permissionCloseSvg);
  permissionConfig.map((permissionItem) => {
    const permissionContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.innerHTML = permissionItem.title;
    if (permissionItem.id === 1) {
      title.style.fontSize = "24px";
    } else {
      title.style.fontSize = "16px";
    }
    const description = document.createElement("div");
    description.style.display = "flex";
    description.style.flexDirection = "column";
    description.style.gap = "1rem";
    permissionItem.description.map((descriptionItem) => {
      const paragraph = document.createElement("p");
      paragraph.style.fontSize = "14px";
      paragraph.innerHTML = descriptionItem.paragraph;
      description.appendChild(paragraph);
    });
    permissionContainer.appendChild(title);
    permissionContainer.appendChild(description);
    permissionContainer.style.display = "flex";
    permissionContainer.style.flexDirection = "column";
    permissionContainer.style.gap = "1rem";
    container.appendChild(permissionContainer);
    container.appendChild(buttonClose);
  });
});
