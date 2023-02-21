const mainMenu = document.getElementById("main-menu");
const answer1 = document.getElementById("answer1")
const one = document.getElementById("one");
const clickToSee = document.querySelector(".click-to-see");
const explanation = document.querySelector(".explanation");
const content = document.querySelector(".content");
const box = document.querySelectorAll(".box");

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
    contentHovered.style.setProperty("--content-background-color", "#e96390")
    isExplanationOn = true;
  } else {
    explanation.style.width = "0"
    explanation.style.height = "0"
    explanation.classList.remove("fadeIn")
    contentHovered.style.setProperty("--content-background-color", "#e91e63")
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