let playerScore = 0;
let cpuScore = 0;
let choices = ["rock","paper","scissors"]
function scoreboard(cpu) { 
    document.getElementById("score").innerHTML = "Player " + playerScore + " " + cpuScore + " CPU";
    document.getElementById("result").innerHTML = "Computer Choose: " + cpu; 
}

function rock(){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
     if (cpuChoice == "rock") {}
     if (cpuChoice == "paper") {cpuScore += 1}
     if (cpuChoice == "scissors") {playerScore += 1}
    scoreboard(cpuChoice);
    }
function paper(){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    if (cpuChoice == "rock") {playerScore += 1}
    if (cpuChoice == "scissors") {cpuScore += 1}
    if (cpuChoice == "paper") {}    
    scoreboard(cpuChoice);
    }

function scissors(){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    if (cpuChoice == "rock") {cpuScore += 1}
    if (cpuChoice == "paper") {playerScore += 1}
    if (cpuChoice == "scissors") {}
    scoreboard(cpuChoice);

    }

function reset () {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("score").innerHTML = "Player " + playerScore + " " + cpuScore + " CPU"; 
}
