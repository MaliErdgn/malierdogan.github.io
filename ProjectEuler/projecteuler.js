const mainMenu = document.getElementById("main-menu");
const answer1 = document.getElementById("answer1")
const one = document.getElementById("one");
const clickToSee = document.querySelector(".click-to-see");
const explanation = document.querySelector(".explanation");
const content = document.querySelector(".content");
const firstDim = document.querySelector("#one");
const secondDim = document.querySelector("#two");
const thirdDim = document.querySelector("#three");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

var isExplanationOn = false;
one.addEventListener("click", function(){
  if (isExplanationOn == false){
    explanation.style.height = "fit-content";
    explanation.style.width = "inherit"
    explanation.classList.add("fadeIn");
    firstDim.classList.add("hoverDim");
    firstDim.classList.remove("hoverBright");
    isExplanationOn = true;
  } else {
    explanation.style.width = "0"
    explanation.style.height = "0"
    explanation.classList.remove("fadeIn");
    firstDim.classList.remove("hoverDim");
    firstDim.classList.add("hoverBright");
    isExplanationOn = false;
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

//#region Question Two

var questionTwoAnswer = 0;
var fibonacci1 = 0;
var fibonacci2 = 1;
var fibonacciNextTerm = fibonacci1 + fibonacci2;

do {
  if (fibonacciNextTerm % 2 == 0) {
    questionTwoAnswer += fibonacciNextTerm;
  }
  fibonacci1 = fibonacci2;
  fibonacci2 = fibonacciNextTerm;
  fibonacciNextTerm = fibonacci1 + fibonacci2;
} while (fibonacciNextTerm < 4000000)

//#endregion