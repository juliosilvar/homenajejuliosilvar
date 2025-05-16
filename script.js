
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-scroll img');
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
}
function closeModal() {
    modal.style.display = "none";
}
function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
}
document.addEventListener("keydown", function(event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "ArrowLeft") changeImage(-1);
        if (event.key === "Escape") closeModal();
    }
});

// Swipe en móviles
let touchStartX = 0;
let touchEndX = 0;
modal.addEventListener("touchstart", e => touchStartX = e.changedTouches[0].screenX);
modal.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) changeImage(1);
    if (touchEndX > touchStartX + 50) changeImage(-1);
});
