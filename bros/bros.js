const mali = document.getElementById("mali");
const bartu = document.getElementById("bartu");
const bertan = document.getElementById("bertan");
const mainMenu = document.getElementById("main-menu");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

mali.addEventListener("click", goToMali)
function goToMali() {
    window.location.replace("/bros/mali/mali.html")
}

bartu.addEventListener("click", goToBartu)
function goToBartu() {
    window.location.replace("/bros/bartu/bartu.html")
}

bertan.addEventListener("click", goToBertan)
function goToBertan() {
    window.location.replace("/bros/bertan/bertan.html")
}