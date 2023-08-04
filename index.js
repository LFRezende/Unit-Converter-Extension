/* Global Variables */
/* Inputs* */
const convertButton = document.getElementById("convert");
const inputBar = document.getElementById("measure");

/* Outputs*/
const meterFeet = document.getElementById("meter");
const literGallon = document.getElementById("liter");
const kgPound = document.getElementById("kg");

convertButton.addEventListener("dblclick", () => {
  let outputs = [];

  outputs.push(inputBar.value / 0.3048);
  outputs.push(inputBar.value / 0.2642);
  outputs.push(inputBar.value * 2.2046);
});
