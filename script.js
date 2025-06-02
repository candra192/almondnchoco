function openModal(elem) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = elem.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
