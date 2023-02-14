const passInput = document.getElementById("passwordInput");
const passSubmit = document.getElementById("passwordSubmit");
const passAnswer = document.getElementById("passwordAnswer");
const maindiv = document.getElementById("grid-container")
const form = document.getElementById("form");
const mainMenu = document.getElementById("main-menu");

passSubmit.addEventListener("click", login);

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

function login () {
    if (passInput.value == "nusret") {
        window.location.replace("./bros.html")
    } else {  
        passAnswer.innerText = "Wrong Password" 
    }
}

passInput.addEventListener("keypress", function(event) {
    console.log("asdklşjas")
  if (event.key === "Enter") {
    event.preventDefault();
    passSubmit.click();
  }
});