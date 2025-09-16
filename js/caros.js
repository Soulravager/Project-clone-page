let index = 0;
function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const totalItems = carousel.children.length;
  const visibleItems = 4;
  const gap = 30;
  const cardWidth = carousel.querySelector(".card").offsetWidth + gap;

  const maxIndex = totalItems - visibleItems;
  index += direction;
  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
}
