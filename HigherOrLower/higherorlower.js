const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const result = document.getElementById("result");
const lower = document.getElementById("lower");
const higher = document.getElementById("higher");

answer = Math.floor(Math.random() * 101); // random guess between 0 and 100
function takeGuess () {
    var input = guessInput.value;
    if (input == answer) {
        result.innerHTML = "Congratulations you won!"
        result.style.color = "green";
    }
    else if (input < answer) {
        result.innerHTML = "Go Higher!"
        result.style.color = "blue";
        lower.innerHTML += input + " ";
    }
    else if (input > answer) {
        result.innerHTML = "Go Lower!"
        result.style.color = "red";
        higher.innerHTML +=  input + " ";
    }
} 

function reset() {
    answer = Math.floor(Math.random() * 101);
    higher.innerHTML = "Higher <br>"
    lower.innerHTML = "Lower <br>"
    result.innerHTML = ""
}