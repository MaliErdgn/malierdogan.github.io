window.onload = function(){

const mainMenu = document.getElementById("main-menu");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const one = document.getElementById("one");
const two = document.getElementById("two");
const explanationOne = document.querySelector("#explanation-one");
const explanationTwo = document.querySelector("#explanation-two");
const content = document.querySelector(".content");
const firstDim = document.querySelector("#one");
const secondDim = document.querySelector("#two");
const thirdDim = document.querySelector("#three");

mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}

var isExplanationOneOn = false;
one.addEventListener("click", function(){
  if (isExplanationOneOn == false){
    explanationOne.style.height = "fit-content";
    explanationOne.style.width = "inherit"
    explanationOne.classList.add("fadeIn");
    firstDim.classList.add("hoverDim");
    firstDim.classList.remove("hoverBright");
    isExplanationOneOn = true;
  } else {
    explanationOne.style.width = "0"
    explanationOne.style.height = "0"
    explanationOne.classList.remove("fadeIn");
    firstDim.classList.remove("hoverDim");
    firstDim.classList.add("hoverBright");
    isExplanationOneOn = false;
  }
})

var isExplanationTwoOn = false;
two.addEventListener("click", function(){
  if (isExplanationTwoOn == false){
    explanationTwo.style.height = "fit-content";
    explanationTwo.style.width = "inherit";
    explanationTwo.classList.add("fadeIn");
    firstDim.classList.add("hoverDim");
    firstDim.classList.remove("hoverBright");
    isExplanationTwoOn = true;
  } else {
    explanationTwo.style.width = "0";
    explanationTwo.style.height = "0";
    explanationTwo.classList.remove("fadeIn");
    firstDim.classList.remove("hoverDim");
    firstDim.classList.add("hoverBright");
    isExplanationTwoOn = false;
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

answer2.innerText = questionTwoAnswer;

//#endregion

}