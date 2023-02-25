

const mali = document.getElementById("mali");
const bartu = document.getElementById("bartu");
const bertan = document.getElementById("bertan");

mali.addEventListener("click", goToMali)
function goToMali() {
    window.location.href = "/bros/mali/mali.html";
}

bartu.addEventListener("click", goToBartu)
function goToBartu() {
    window.location.href = "/bros/bartu/bartu.html";
}

bertan.addEventListener("click", goToBertan)
function goToBertan() {
    window.location.href = "/bros/bertan/bertan.html";
}