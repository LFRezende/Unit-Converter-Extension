/* Global Variables */
/* Inputs* */
const convertButton = document.getElementById("convert");
const inputBar = document.getElementById("measure");

/* Outputs*/
const meterFeet = document.getElementById("meter");
const literGallon = document.getElementById("liter");
const kgPound = document.getElementById("kg");

convertButton.addEventListener("dblclick", () => {
  const value = inputBar.value;

  meterFeet.innerHTML = `Meter/Feet: ${(value * 3.2808).toFixed(
    3
  )} || Feet/Meter: ${(value / 3.2808).toFixed(3)} `;
  literGallon.innerHTML = `Liter/Gallon(US): ${(value * 0.2642).toFixed(
    3
  )} || Gallon(US)/Liter: ${(value / 0.2642).toFixed(3)} `;
  kgPound.innerHTML = `kg/lbs: ${(value * 2.2046).toFixed(3)} || lbs/kg: ${(
    value / 2.2046
  ).toFixed(3)} `;
});
