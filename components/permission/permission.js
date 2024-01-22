import permissionConfig from "../../config/permissionConfig.js";
document.addEventListener("DOMContentLoaded", () => {
    const permission = document.querySelector(".permission");
    permission.addEventListener("click", () => {
        container.style.display = "flex";
    })
    const container = document.querySelector(".permissionContainer");

    permissionConfig.map((permissionItem) => { 
        const permissionContainer = document.createElement("div");
        const title = document.createElement("h1");
        title.innerHTML = permissionItem.title; 
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
    });
});
