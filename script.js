//#region Tempature Converter

//#region variables
const tempatureConverterButton = document.getElementById("tempatureConverter");
const tempatureMenu = document.getElementById("tempature-menu");
const tempatureGrid = document.getElementById("tempature-grid");
const tempgoBack = document.getElementById("temp-go-back");

const CK = document.getElementById("C-K");
const CF = document.getElementById("C-F");
const FC = document.getElementById("F-C");
const FK = document.getElementById("F-K");
const KC = document.getElementById("K-C");
const KF = document.getElementById("K-F");

const CtoKInput = document.getElementById("CtoKInput");
const CtoFInput = document.getElementById("CtoFInput");
const FtoKInput = document.getElementById("FtoKInput");
const FtoCInput = document.getElementById("FtoCInput");
const KtoFInput = document.getElementById("KtoFInput");
const KtoCInput = document.getElementById("KtoCInput");
const CtoKSubmit = document.getElementById("CtoKSubmit");
const CtoFSubmit = document.getElementById("CtoFSubmit");
const FtoKSubmit = document.getElementById("FtoKSubmit");
const FtoCSubmit = document.getElementById("FtoCSubmit");
const KtoFSubmit = document.getElementById("KtoFSubmit");
const KtoCSubmit = document.getElementById("KtoCSubmit");
const results = document.getElementById("results");
//#endregion
function tempatureConverter() {
  tempatureGrid.style.display = "block";
  tempatureConverterButton.style.display = "none";
  tempatureMenu.style.display = "grid";
  tempatureGrid.style.gridTemplateColumns = "auto auto";
  tempatureGrid.style.padding = "10px";
}

function tempGoBack() {
  tempatureGrid.style.display = "grid";
  tempatureGrid.style.gridTemplateColumns = "auto auto";
  tempatureGrid.style.padding = "10px";
  CK.style.display = "block";
  CF.style.display = "block";
  FC.style.display = "block";
  FK.style.display = "block";
  KC.style.display = "block";
  KF.style.display = "block";
  CtoKInput.style.display = "none";
  CtoFInput.style.display = "none";
  FtoKInput.style.display = "none";
  FtoCInput.style.display = "none";
  KtoFInput.style.display = "none";
  KtoCInput.style.display = "none";
  CtoKSubmit.style.display = "none";
  CtoFSubmit.style.display = "none";
  FtoKSubmit.style.display = "none";
  FtoCSubmit.style.display = "none";
  KtoFSubmit.style.display = "none";
  KtoCSubmit.style.display = "none";
  results.style.display = "none";
}
//#region conversions
function celciusToKelvin() {
  CF.style.display = "none";
  FC.style.display = "none";
  FK.style.display = "none";
  KC.style.display = "none";
  KF.style.display = "none";
  CtoKInput.style.display = "block";
  CtoKSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function celciusToKelvinCalc() {
  var enteredValue = document.getElementById("CtoKInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = enteredValue + 273.15;
  document.getElementById("results").innerHTML = result + " Kelvin";
  results.style.display = "block";
}

function celciusToFahrenheit() {
  CK.style.display = "none";
  FC.style.display = "none";
  FK.style.display = "none";
  KC.style.display = "none";
  KF.style.display = "none";
  CtoFInput.style.display = "block";
  CtoFSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function celciusToFahrenheitCalc() {
  var enteredValue = document.getElementById("CtoFInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = (enteredValue * 9) / 5 + 32;
  document.getElementById("results").innerHTML = result + " Fahrenheit";
  results.style.display = "block";
}

function fahrenheitToKelvin() {
  CK.style.display = "none";
  CF.style.display = "none";
  FC.style.display = "none";
  KC.style.display = "none";
  KF.style.display = "none";
  FtoKInput.style.display = "block";
  FtoKSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function fahrenheitToKelvinCalc() {
  var enteredValue = document.getElementById("FtoKInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = ((enteredValue - 32) * 5) / 9 + 273;
  document.getElementById("results").innerHTML = result + " Kelvin";
  results.style.display = "block";
}

function fahrenheitToCelcius() {
  CK.style.display = "none";
  CF.style.display = "none";
  KC.style.display = "none";
  KF.style.display = "none";
  FK.style.display = "none";
  FtoCInput.style.display = "block";
  FtoCSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function fahrenheitToCelciusCalc() {
  var enteredValue = document.getElementById("FtoCInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = ((enteredValue - 32) * 5) / 9;
  document.getElementById("results").innerHTML = result + " Celcius";
  results.style.display = "block";
}

function kelvinToCelcius() {
  CK.style.display = "none";
  CF.style.display = "none";
  KF.style.display = "none";
  FK.style.display = "none";
  FC.style.display = "none";
  KtoCInput.style.display = "block";
  KtoCSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function kelvinToCelciusCalc() {
  var enteredValue = document.getElementById("KtoCInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = enteredValue - 273.15;
  document.getElementById("results").innerHTML = result + " Celcius";
  results.style.display = "block";
}

function kelvinToFahrenheit() {
  CK.style.display = "none";
  CF.style.display = "none";
  KC.style.display = "none";
  FK.style.display = "none";
  FC.style.display = "none";
  KtoFInput.style.display = "block";
  KtoFSubmit.style.display = "block";
  tempgoBack.style.display = "block";
}
function kelvinToFahrenheitCalc() {
  var enteredValue = document.getElementById("KtoFInput").value;
  enteredValue = parseFloat(enteredValue);
  var result = 0;
  result = ((enteredValue - 273.15) * 9) / 5 + 32;
  document.getElementById("results").innerHTML = result + " Fahrenheit";
  results.style.display = "block";
}
//#endregion
//#endregion
