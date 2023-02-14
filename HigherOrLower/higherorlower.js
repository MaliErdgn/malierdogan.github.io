const mainMenu = document.getElementById("main-menu");
const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const result = document.getElementById("result");
const lower = document.getElementById("lower");
const higher = document.getElementById("higher")
const amount = document.getElementById("amount");
const _reset = document.getElementById("reset")


mainMenu.addEventListener("click",goToMainMenu)
function goToMainMenu() {
  window.location.replace("/index.html")
}
guessSubmit.addEventListener("click", takeGuess)
_reset.addEventListener("click", reset)

answer = Math.floor(Math.random() * 101); // random guess between 0 and 100
let guessAmount = 0;
function takeGuess () {
    var input = guessInput.value;
    if (input == answer) {
        result.innerHTML = "Congratulations you won!"
        result.style.color = "rgb(87, 226, 87)";
    }
    else if (input < answer) {
        result.innerHTML = "Go Higher!"
        result.style.color = "rgb(87, 87, 226)";
        lower.innerHTML += input + " ";
    }
    else if (input > answer) {
        result.innerHTML = "Go Lower!"
        result.style.color = "rgb(226, 87, 87)";
        higher.innerHTML +=  input + " ";
    }
    guessAmount += 1
    amount.innerHTML = "Number of guesses <br>" + guessAmount;
    guessInput.value = ""   
} 

function reset() {
    answer = Math.floor(Math.random() * 101);
    guessAmount = 0;
    higher.innerHTML = "Higher than the answer<br>"
    lower.innerHTML = "Lower than the answer<br>"
    result.innerHTML = ""
    amount.innerHTML = "Number of guesses <br>"
}