import coursesConfig from "../../config/coursesConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const coursesList = document.querySelector(".coursesList");
  coursesConfig.map((course) => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("courseBox");
    courseElement.innerHTML = `
          <img class="courseImg" src="${course.image}" alt="${course.id}" />
          <div class="courseTextContainer">
              <p class="courseTitle">${course.title} </p>
              <p class="courseDescription">${course.description}</p>
              <div class="linkContainer">
                  <img src="./assets/icons/iconArrowCourse.svg" />
                  <a href="#" class="courseLink">${course.details}</a>
              </div>
          </div>
    `;
    coursesList.appendChild(courseElement);
  });
});
