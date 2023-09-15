const loginFormBtn = document.getElementById("login-form");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");
const cancel = document.getElementById("cancelbtn");

// loginFormBtn.addEventListener("click", function(){
//     modal.style.display = "block";
// })

loginFormBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})

cancel.addEventListener("click", () => {
    modal.style.display = "none";
})

// close the modal form when a user clicks outside the modal

window.onclick = (event) =>{
    if (event.target == modal) {
        modal.style.display = "none";
    }
}