/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let pEl = document.getElementById("p-el")
let pEl2 = document.getElementById("p-el2")
let pEl3 = document.getElementById("p-el3")

const meter = (num) => {return num * 3.281};
const liter = (num) => {return num * .264};
const kilogram = (num) => {return num * 2.204};
const feet = (num) => {return num * 0.3048};
const gallons = (num) => {return num * 3.78541178};
const pounds = (num) => {return num * 0.45359237};

convertBtn.addEventListener ("click", function() {
    const input = inputEl.value;
    const meterInp = meter(inputEl.value);
    const literInp = liter(inputEl.value);
    const kiloInp = kilogram(inputEl.value);
    const feetInp = feet(inputEl.value);
    const gallonInp = gallons(inputEl.value);
    const poundInp = pounds(inputEl.value);
    
    pEl.innerHTML = (`${input} meters = ${meterInp.toFixed(2)} feet | ${input} feet = ${feetInp.toFixed(2)} meters`)
    pEl2.innerHTML = (`${input} liters = ${literInp.toFixed(2)} gallons | ${input} gallons = ${gallonInp.toFixed(2)} liters`)
    pEl3.innerHTML = (`${input} kilos = ${kiloInp.toFixed(2)} pounds | ${input} pounds = ${poundInp.toFixed(2)} kilos`)})