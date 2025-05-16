let imagenes = [];
let modalIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  imagenes = Array.from(document.querySelectorAll('.gallery-scroll img'));
});

function openModal(index) {
  modalIndex = index;
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imagenes[modalIndex].src;
}

function cambiarImagen(offset) {
  modalIndex = (modalIndex + offset + imagenes.length) % imagenes.length;
  document.getElementById("modal-img").src = imagenes[modalIndex].src;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}


document.addEventListener('keydown', function(event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "ArrowLeft") {
            prevImage();
        } else if (event.key === "Escape") {
            modal.style.display = "none";
        }
    }
});
