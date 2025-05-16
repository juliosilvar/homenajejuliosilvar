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
