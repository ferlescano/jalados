// =====================================================
// HERO SLIDER – FOTÓGRAFO DE MODA
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Seguridad: si no existen slides o dots, no ejecutar
  if (!slides.length || !dots.length) return;

  let currentIndex = 0;
  const intervalTime = 6000; // 6 segundos
  let sliderInterval;

  // ---------------------------------------------------
  // Mostrar slide
  // ---------------------------------------------------
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  // ---------------------------------------------------
  // Slide siguiente
  // ---------------------------------------------------
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  // ---------------------------------------------------
  // Autoplay
  // ---------------------------------------------------
  function startAutoplay() {
    sliderInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoplay() {
    clearInterval(sliderInterval);
  }

  // ---------------------------------------------------
  // Eventos en dots
  // ---------------------------------------------------
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  // ---------------------------------------------------
  // Inicialización
  // ---------------------------------------------------
  showSlide(currentIndex);
  startAutoplay();
});