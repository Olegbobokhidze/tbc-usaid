import accordionsConfig from "../../config/accordionsConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const accordionsContainer = document.querySelector(".accordions");

  accordionsConfig.forEach((accordion, index) => {
    accordion.isOpen = false;

    const accordionElement = document.createElement("div");
    accordionElement.classList.add("accordion");

    const questionElement = document.createElement("div");
    questionElement.classList.add("accordionQuestion");
    const questionParagraph = document.createElement("p");
    questionParagraph.innerHTML = accordion.question;
    const questionArrow = document.createElement("img");
    questionArrow.src = "../../assets/icons/iconArrowAccordion.svg";
    questionArrow.classList.add("accordionArrow");
    questionElement.appendChild(questionParagraph);
    questionElement.appendChild(questionArrow);

    const answersElement = document.createElement("div");
    answersElement.classList.add("accordionAnswers");
    answersElement.style.display = "none";

    if (accordion.header) {
      const headerElement = document.createElement("div");
      headerElement.classList.add("accordionHeader");
      headerElement.innerHTML = accordion.header;
      answersElement.appendChild(headerElement);
    }

    if (accordion.stages) {
      const stagesElement = document.createElement("div");
      stagesElement.classList.add("accordionStage");
      accordion.stages.forEach((stage) => {
        const stageParagraph = document.createElement("p");
        stageParagraph.innerHTML = stage;
        stagesElement.appendChild(stageParagraph);
      });
      answersElement.appendChild(stagesElement);
    }

    const answerParagraph = document.createElement("p");
    answerParagraph.innerHTML = accordion.answer;
    answersElement.appendChild(answerParagraph);

    accordionElement.addEventListener("click", () => {
      accordion.isOpen = !accordion.isOpen;
      questionArrow.style.transform = accordion.isOpen
        ? "rotate(180deg)"
        : "rotate(0deg)";
      accordionsConfig.forEach((acc) => {
        if (acc !== accordion) {
          acc.isOpen = false;
          const accIndex = accordionsConfig.indexOf(acc);
          const accElement =
            accordionsContainer.children[accIndex].querySelector(
              ".accordionAnswers"
            );
          const accArrow = accordionsContainer.children[accIndex].querySelector(
            ".accordionArrow"
          );
          accArrow.style.transform = "rotate(0deg)";
          accElement.style.display = "none";
        }
      });

      const answerElement =
        accordionsContainer.children[index].querySelector(".accordionAnswers");
      answerElement.style.display = accordion.isOpen ? "flex" : "none";
    });

    accordionElement.appendChild(questionElement);
    accordionElement.appendChild(answersElement);
    accordionsContainer.appendChild(accordionElement);
  });
});
