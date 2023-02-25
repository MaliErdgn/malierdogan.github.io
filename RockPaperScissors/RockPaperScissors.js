const _rock = document.getElementById("rock");
const _paper = document.getElementById("paper");
const _scissors = document.getElementById("scissors");
const _reset = document.getElementById("reset");


let playerScore = 0;
let cpuScore = 0;
let choices = ["rock","paper","scissors"]
function scoreboard(cpu) { 
    document.getElementById("score").innerHTML = "Player " + playerScore + " " + cpuScore + " CPU";
    document.getElementById("result").innerHTML = "Computer Choose: " + cpu; 
}

_rock.addEventListener("click", rock)
function rock(){
    console.log("rock");
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    if (cpuChoice == "rock") {}
    if (cpuChoice == "paper") {cpuScore += 1}
    if (cpuChoice == "scissors") {playerScore += 1}
    scoreboard(cpuChoice);
}


_paper.addEventListener("click", paper)
function paper(){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    if (cpuChoice == "rock") {playerScore += 1}
    if (cpuChoice == "scissors") {cpuScore += 1}
    if (cpuChoice == "paper") {}    
    scoreboard(cpuChoice);
}


_scissors.addEventListener("click",scissors)
function scissors(){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    if (cpuChoice == "rock") {cpuScore += 1}
    if (cpuChoice == "paper") {playerScore += 1}
    if (cpuChoice == "scissors") {}
    scoreboard(cpuChoice);

}

_reset.addEventListener("click",reset)
function reset () {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("score").innerHTML = "Player " + playerScore + " " + cpuScore + " CPU"; 
}
