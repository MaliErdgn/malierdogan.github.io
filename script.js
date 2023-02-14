const temperatureConverter = document.getElementById("TemperatureConverter");
const rps = document.getElementById("rps") // rockpaperscissors
const hlgame = document.getElementById("hlgame") //higher or lower game
const ttt = document.getElementById("ttt") // tictactoe
const bros = document.getElementById("bros") //bros



temperatureConverter.addEventListener("click", temperatureConverterRedirect)
function temperatureConverterRedirect() {
    window.location.replace("./TempatureConverter/TempatureConverter.html")
}

rps.addEventListener("click", rpsRedirect)
function rpsRedirect() { 
    window.location.replace("./RockPaperScissors/RockPaperScissors.html")
}

hlgame.addEventListener("click", hlgameRedirect)
function hlgameRedirect() {
    window.location.replace("./HigherOrLower/higherorlower.html")
}

ttt.addEventListener("click", tttRedirect)
function tttRedirect() {
    window.location.replace("./tictactoe/tictactoe.html")
}

bros.addEventListener("click", brosRedirect)
function brosRedirect(){
    window.location.replace("./bros/broslogin.html")
}