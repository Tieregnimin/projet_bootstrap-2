let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselContainer = document.querySelector('.carousel-container');
    let autoPlayInterval;

    // Fonction pour déplacer les slides
    function moveCarousel() {
      // Retirer la classe active de l'ancien slide
      slides[currentIndex].classList.remove('active');

      // Déplacer le carrousel
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Ajouter la classe active au nouveau slide
      slides[currentIndex].classList.add('active');
    }

    // Fonction pour démarrer l'automatisation
    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveCarousel();
      }, 3000); // Change slide toutes les 3 secondes
    }

    // Fonction pour arrêter l'automatisation
    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // Bouton précédent
    document.getElementById('prevBtn').addEventListener('click', () => {
      stopAutoPlay();
      currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
      moveCarousel();
      startAutoPlay(); // Redémarre l'automatisation après l'interaction
    });

    // Bouton suivant
    document.getElementById('nextBtn').addEventListener('click', () => {
      stopAutoPlay();
      currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
      moveCarousel();
      startAutoPlay(); // Redémarre l'automatisation après l'interaction
    });

    // Démarrer l'automatisation à l'initialisation
    moveCarousel(); // S'assurer que le premier slide est visible dès le départ
    startAutoPlay();