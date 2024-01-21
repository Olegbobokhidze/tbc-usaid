import carouselConfig from "../../config/carouselConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel");
  const arrowLeft = document.querySelector(".arrowLeft");
  const arrowRight = document.querySelector(".arrowRight");
  const markers = document.querySelectorAll(".marker");

  const itemsPerSlide = 3;
  const transitionDuration = 1000;
  const autoAdvanceIntervalDuration = 3000;

  const totalSlides = Math.ceil(carouselConfig.length / itemsPerSlide);
  let currentSlide = 0;
  let autoAdvanceInterval;
  let touchStartX = 0;
  let touchEndX = 0;

  const updateCarouselContent = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    const currentItems = carouselConfig.slice(start, end);

    const fragment = document.createDocumentFragment();

    currentItems.forEach((item) => {
      const imgElement = document.createElement("img");
      imgElement.src = item.image;
      imgElement.alt = `Carousel Image ${item.id}`;
      fragment.appendChild(imgElement);
    });

    carouselContainer.innerHTML = "";
    carouselContainer.appendChild(fragment);
  };

  const updateCarouselStyles = () => {
    carouselContainer.classList.remove("fade-out");

    markers.forEach((marker, index) => {
      marker.classList.toggle("active", index === currentSlide);
    });
  };

  const updateCarousel = () => {
    carouselContainer.classList.add("fade-out");
    setTimeout(() => {
      updateCarouselContent();
      updateCarouselStyles();
    }, transitionDuration);
  };

  const handleArrowClick = (direction) => {
    clearInterval(autoAdvanceInterval);
    if (direction === "next") {
      currentSlide = (currentSlide + 1) % totalSlides;
    } else {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    updateCarousel();
    setAutoAdvanceInterval();
  };

  arrowRight.addEventListener("click", () => handleArrowClick("next"));
  arrowLeft.addEventListener("click", () => handleArrowClick("prev"));

  const handleMarkerClick = (index) => {
    clearInterval(autoAdvanceInterval);
    currentSlide = index;
    updateCarousel();
    setAutoAdvanceInterval();
  };

  markers.forEach((marker, index) => {
    marker.addEventListener("click", () => handleMarkerClick(index));
  });

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      handleArrowClick("next");
    } else if (touchDiff < -50) {
      handleArrowClick("prev");
    }

    touchStartX = 0;
    touchEndX = 0;
  };

  carouselContainer.addEventListener("touchstart", handleTouchStart);
  carouselContainer.addEventListener("touchmove", handleTouchMove);
  carouselContainer.addEventListener("touchend", handleTouchEnd);

  const setAutoAdvanceInterval = () => {
    autoAdvanceInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, autoAdvanceIntervalDuration);
  };

  setAutoAdvanceInterval();

  updateCarousel();
});