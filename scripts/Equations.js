const FeetToCm = (feet) => {
    return feet * 30.48;
}

const CmToFeet = (cm) => {
    return cm / 30.48;
}

const FeetToInches = (feet) => {
    return feet * 12;
}

const InchesToFeet = (inches) => {
    return inches / 12;
}

const CelsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

const FahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
}

const KilogramToPound = (kilogram) => {
    return kilogram * 2.205
}

const PoundToKilogram = (Pound) => {
    return Pound / 2.205
}

const KilometerToMile = (kilometer) => {
    return kilometer * 0.6214
}

const MileToKilometer = (mile) => {
    return mile / 0.6214
}

const LiterToGallon = (liter) => {
    return liter * 0.2642
}

const GallonToLiter = (gallon) => {
    return gallon / 0.2642
}

const InchToCm = (inch) => {
    return inch * 2.54
}

const CmToInch = (cm) => {
    return cm / 2.54
} 

const input = document.getElementById('Number');
const unit = document.getElementById('Conversion')
let result;

const ConvertButton = document.getElementById('ConvertButton');

ConvertButton.addEventListener('click', () => {
    event.preventDefault();
    console.log(unit.value)
  
    if (input.value < 1 || input.value === null) {
      alert(`Invalid number \n ${input.value} is less than 1. \n The number entered must be at least 1`)
    }
  
    if (unit.value.toLowerCase() === 'feet to cm') {
      result = FeetToCm(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Feet = ${result} Cm`
    }
  
    else if (unit.value.toLowerCase() === 'cm to feet') {
      result = CmToFeet(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Cm = ${result} Feet`
    }
  
    else if (unit.value.toLowerCase() === 'feet to inches') {
      result = FeetToInches(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Feet = ${result} Inches`
    }
  
    else if (unit.value.toLowerCase() === 'inch to feet') {
      result = InchesToFeet(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Inches = ${result} Feet`
    }
  
    else if (unit.value.toLowerCase() === 'celsius to fahrenheit') {
      result = CelsiusToFahrenheit(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Celsius = ${result} Fahrenheit`
    }
  
    else if (unit.value.toLowerCase() === 'fahrenheit to celsius') {
      result = FahrenheitToCelsius(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Fahrenheit = ${result} Celsius`
    }
  
    else if (unit.value.toLowerCase() === 'kilogram to pound') {
      result = KilogramToPound(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Kilogram = ${result} Pound`
    }
  
    else if (unit.value.toLowerCase() === 'pound to kilogram') {
      result = PoundToKilogram(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Pound = ${result} Kilogram`
    }
  
    else if (unit.value.toLowerCase() === 'kilometer to mile') {
      result = KilometerToMile(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Kilometer = ${result} Mile`
    }
  
    else if (unit.value.toLowerCase() === 'mile to kilometer') {
      result = MileToKilometer(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Mile = ${result} Kilometer`
    }
  
    else if (unit.value.toLowerCase() === 'liter to gallon') {
      result = LiterToGallon(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Liter = ${result} Gallon`
    }
  
    else if (unit.value.toLowerCase() === 'gallon to liter') {
      result = GallonToLiter(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Gallon = ${result} Liter`
    }
  
    else if (unit.value.toLowerCase() === 'inch to cm') {
      result = InchToCm(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Inches = ${result} Cm`
    }
  
    else if (unit.value.toLowerCase() === 'cm to inch') {
      result = CmToInch(input.value)
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `${input.value} Cm = ${result} inches`
    }
    else {
      alert(`Invalid unit \n ${unit.value} is not a valid unit of measurement`)
    }

})
