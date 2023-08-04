/* Global Variables */
/* Inputs* */
const convertButton = document.getElementById("convert");
const inputBar = document.getElementById("measure");

/* Outputs*/
const meterFeet = document.getElementById("meter");
const literGallon = document.getElementById("liter");
const kgPound = document.getElementById("kg");

convertButton.addEventListener("dblclick", () => {
  meterFeet.innerHTML = (inputBar.value * 3.2808).toFixed(3);
  literGallon.innerHTML = (inputBar.value * 0.2642).toFixed(3);
  kgPound.innerHTML = (inputBar.value * 2.2046).toFixed(3);
});
