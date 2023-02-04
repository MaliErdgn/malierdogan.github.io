const mainMenu = document.getElementById("main-menu");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}