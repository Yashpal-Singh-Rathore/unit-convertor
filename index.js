const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
let lengthConvertor = document.querySelector("#length-convertor")
let volumeConvertor = document.getElementById("volume-convertor")
let massConvertor = document.querySelector("#mass-convertor")

inputEl.addEventListener("input", function() {
    const length = inputEl.value.length
    if(length > 3 && length <= 5) {
        inputEl.style.fontSize = "40px"
    } else if(length > 5) {
        inputEl.style.fontSize = "20px"
    } else {
        inputEl.style.fontSize = "52px"
    }
})  

convertBtn.addEventListener("click", function() {
    convertLength( Number(inputEl.value) )
    convertVolume( Number(inputEl.value) )
    convertMass ( Number(inputEl.value) )
})

function convertLength(num) {
    const meter_to_feet = 3.28084
    const mToF = num * meter_to_feet
    const fToM = num / meter_to_feet
    lengthConvertor.innerHTML = `<p>${num} meters = ${mToF.toFixed(3)} feet | ${num} feet = ${fToM.toFixed(3)} meters</p>`
}

function convertVolume(num) {
    const liter_to_galoon = 0.264172
    const lToG = num * liter_to_galoon
    const gToL = num / liter_to_galoon
    volumeConvertor.innerHTML = `<p>${num} liters = ${lToG.toFixed(3)} gallons | ${num} gallons = ${gToL.toFixed(3)} liter</p>`
}

function convertMass(num) {
    const kilo_to_pound = 2.20462
    const kToP = num * kilo_to_pound
    const pToK = num / kilo_to_pound
    massConvertor.innerHTML = `<p>${num} kilos = ${kToP.toFixed(3)} pounds | ${num} pounds = ${pToK.toFixed(3)} kilos</p>`
}