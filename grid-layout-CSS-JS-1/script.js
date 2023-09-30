const menuBar = document.getElementById("menu");
const sideBar = document.getElementById("side-bar");
const exit = document.getElementById("exit");
var sideDiv = document.querySelector(".link")


menuBar.addEventListener("click", () => {
    sideBar.style.display = "block";
})

// exit.addEventListener("click", () => {
//     sideBar.style.display = "none";
// });


exit.onclick = () => {
    sideBar.style.display = "none";
}

sideDiv.onclick = () => {
    sideBar.style.display = "none";
}

