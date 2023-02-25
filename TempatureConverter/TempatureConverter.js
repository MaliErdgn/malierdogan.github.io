
const CtoK = document.getElementById("CtoK");
const CtoKinputMenu = document.getElementById("CtoK-input-menu");
const CtoKinput = document.getElementById("CtoK-input");

const CtoF = document.getElementById("CtoF");
const CtoFinputMenu = document.getElementById("CtoF-input-menu");
const CtoFinput = document.getElementById("CtoF-input");

const FtoC = document.getElementById("FtoC");
const FtoCinputMenu = document.getElementById("FtoC-input-menu");
const FtoCinput = document.getElementById("FtoC-input");

const FtoK = document.getElementById("FtoK");
const FtoKinputMenu = document.getElementById("FtoK-input-menu");
const FtoKinput = document.getElementById("FtoK-input");

const KtoC = document.getElementById("KtoC");
const KtoCinputMenu = document.getElementById("KtoC-input-menu");
const KtoCinput = document.getElementById("KtoC-input");

const KtoF = document.getElementById("KtoF");
const KtoFinputMenu = document.getElementById("KtoF-input-menu");
const KtoFinput = document.getElementById("KtoF-input");


var enteredValue;
var result = "0";


CtoK.addEventListener("click", showCtoK)
CtoKinput.addEventListener("input", CtoKCalc)
function showCtoK() {
    CtoKinputMenu.style.display = "block"
} 
function CtoKCalc() {
  enteredValue = CtoKinput.value;
  enteredValue = parseFloat(enteredValue)
  result = enteredValue + 273.15;
  document.getElementById("CtoK-result").innerText = result + " Kelvin";
}


CtoF.addEventListener("click", showCtoF)
CtoFinput.addEventListener("input", CtoFCalc)
function showCtoF() {
    CtoFinputMenu.style.display = "block"
} 
function CtoFCalc() {
  enteredValue = CtoFinput.value;
  enteredValue = parseFloat(enteredValue)
  result = enteredValue * (9 / 5) + 32;
  document.getElementById("CtoF-result").innerText = result + " Fahrenheit";
}


FtoC.addEventListener("click", showFtoC)
FtoCinput.addEventListener("input", FtoCCalc)
function showFtoC() {
    FtoCinputMenu.style.display = "block"
} 
function FtoCCalc() {
  enteredValue = FtoCinput.value;
  enteredValue = parseFloat(enteredValue)
  result = (enteredValue - 32) * (5/9);
  document.getElementById("FtoC-result").innerText = result + " Celcius";
}


FtoK.addEventListener("click", showFtoK)
FtoKinput.addEventListener("input", FtoKCalc)
function showFtoK() {
    FtoKinputMenu.style.display = "block"
} 
function FtoKCalc() {
  enteredValue = FtoKinput.value;
  enteredValue = parseFloat(enteredValue)
  result = ((enteredValue-32)*(5/9)) + 273.15;
  document.getElementById("FtoK-result").innerText = result + " Kelvin";
}


KtoC.addEventListener("click", showKtoC)
KtoCinput.addEventListener("input", KtoCCalc)
function showKtoC() {
    KtoCinputMenu.style.display = "block"
} 
function KtoCCalc() {
  enteredValue = KtoCinput.value;
  enteredValue = parseFloat(enteredValue)
  result = enteredValue - 273.15;
  document.getElementById("KtoC-result").innerText = result + " Celcius";
}


KtoF.addEventListener("click", showKtoF)
KtoFinput.addEventListener("input", KtoFCalc)
function showKtoF() {
    KtoFinputMenu.style.display = "block"
} 
function KtoFCalc() {
  enteredValue = KtoFinput.value;
  enteredValue = parseFloat(enteredValue)
  result = ((enteredValue - 273.15) * (9 / 5)) + 32;
  document.getElementById("KtoF-result").innerText = result + " Fahrenheit";
}
