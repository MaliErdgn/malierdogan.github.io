const temperatureConverter = document.getElementById("TemperatureConverter");
const rps = document.getElementById("rps") // rockpaperscissors
const hlgame = document.getElementById("hlgame") //higher or lower game
const ttt = document.getElementById("ttt") // tictactoe
const bros = document.getElementById("bros") //bros
const euler = document.getElementById("euler") //project euler



temperatureConverter.addEventListener("click", temperatureConverterRedirect)
function temperatureConverterRedirect() {
    window.location.href = "./TempatureConverter/TempatureConverter.html"
}

rps.addEventListener("click", rpsRedirect)
function rpsRedirect() { 
    window.location.href = "./RockPaperScissors/RockPaperScissors.html";
}

hlgame.addEventListener("click", hlgameRedirect)
function hlgameRedirect() {
    window.location.href = "./HigherOrLower/higherorlower.html";
}

ttt.addEventListener("click", tttRedirect)
function tttRedirect() {
    window.location.href = "./tictactoe/tictactoe.html";
}

bros.addEventListener("click", brosRedirect)
function brosRedirect(){
    window.location.href = "./bros/broslogin.html";
}

euler.addEventListener("click", function(){
    window.location.href = "/ProjectEuler/projecteuler.html";
})