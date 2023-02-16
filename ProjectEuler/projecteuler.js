const mainMenu = document.getElementById("main-menu");
const answer1 = document.getElementById("answer1")
const one = document.getElementById("one");
const explanation = document.getElementById("explanation");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

one.addEventListener("click", function(){
  if (explanation.style.display == "none"){
  explanation.style.display = "block"
  } else {
    explanation.style.display = "none"
  }
})

//#region Question One

var questionOneAnswer = 0;

for (let i = 0; i < 1000; i++) {
  if (i%3 == 0) {
    questionOneAnswer += i;
  } else if (i%5 == 0) {
    questionOneAnswer += i;
  }
}
answer1.innerText = questionOneAnswer;

//#endregion