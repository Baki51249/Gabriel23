const modal = document.getElementById("modal");

function openModal(){
    modal.style.display = "flex"
}
function closeModal(){
    modal.style.display = "None";
    
  };

  document.addEventListener("click", (event) => {
    if (event.target.className === "modal-bg") {
        closeModal();
    }
});