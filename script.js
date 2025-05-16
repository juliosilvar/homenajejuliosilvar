let currentIndex = 0;
const images = document.querySelectorAll('.gallery-scroll img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(imgElement) {
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  currentIndex = Array.from(images).indexOf(imgElement);
}

function closeModal() {
  modal.style.display = "none";
}

function navigateImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  modalImg.src = images[currentIndex].src;
}

// Soporte para teclado
document.addEventListener('keydown', function (event) {
  if (modal.style.display === "block") {
    if (event.key === "ArrowLeft") navigateImage(-1);
    if (event.key === "ArrowRight") navigateImage(1);
    if (event.key === "Escape") closeModal();
  }
});
// Swipe táctil
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

modal.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      navigateImage(-1); // Swipe derecha
    } else {
      navigateImage(1);  // Swipe izquierda
    }
  }
}
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".gallery-scroll img");
let currentIndex = 0;

// Abrir modal
function openModal(imgElement) {
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
  currentIndex = Array.from(images).indexOf(imgElement);
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// Navegar
function navigateImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  modalImg.src = images[currentIndex].src;
}

// Flechas de teclado
document.addEventListener("keydown", function(e) {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
    if (e.key === "Escape") closeModal();
  }
});

// Swipe táctil
let touchStartX = 0, touchEndX = 0;
modal.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

modal.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) navigateImage(1); // izquierda
  if (touchEndX > touchStartX + 50) navigateImage(-1); // derecha
}, false);
