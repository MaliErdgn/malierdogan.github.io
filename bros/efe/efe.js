const mainMenu = document.getElementById("main-menu");
const back = document.getElementById("back");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

back.addEventListener("click", function() {
    window.location.replace("/bros/bros.html")
})