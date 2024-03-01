let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * (document.querySelector('.carousel-item').offsetWidth + 20) + 'px'; /* Largura da imagem + margem */
  document.querySelector('.carousel').style.transform = `translateX(${offset})`;
}