document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const logos = Array.from(carousel.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const logosPerSlide = 3;
  let currentIndex = 0;
  let autoSlideInterval;

  // Fonction pour mettre à jour le carrousel
  function updateCarousel() {
    const offset = -(currentIndex * (logos[0].offsetWidth + 10)); // 10 est l'écart entre les logos
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Fonction pour démarrer le défilement automatique
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % Math.ceil(logos.length / logosPerSlide);
      updateCarousel();
    }, 3000); // 3 secondes
  }

  // Fonction pour arrêter le défilement automatique
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Navigation manuelle
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Math.ceil(logos.length / logosPerSlide)) % Math.ceil(logos.length / logosPerSlide);
    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Math.ceil(logos.length / logosPerSlide);
    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  });

  // Démarrer le défilement automatique au chargement
  startAutoSlide();

  // Réinitialiser le défilement automatique lors de l'interaction
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
});
