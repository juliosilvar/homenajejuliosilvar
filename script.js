
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".gallery-scroll img");
let currentIndex = 0;

function openModal(imgElement) {
  modal.style.display = "flex";
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

document.addEventListener("keydown", function(e) {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
    if (e.key === "Escape") closeModal();
  }
});

let touchStartX = 0, touchEndX = 0;
modal.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

modal.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) navigateImage(1);
  if (touchEndX > touchStartX + 50) navigateImage(-1);
}, false);
