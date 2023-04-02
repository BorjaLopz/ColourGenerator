"use strict";

const button = document.querySelector("#buttonNewColour");
console.log(button);

const valueNewColour = document.querySelector("#newColour");
console.log(valueNewColour);

const bodyElement = document.querySelector("body");
console.log(bodyElement);

button.addEventListener("click", generateNewColour);

function generateNewColour(){
    let newColour = newRGB();
    
    //Cambiamos el valor por pantalla
    valueNewColour.textContent = newColour;

    //Cambiamos el color del body
    bodyElement.style.background = newColour;
}

function randomNumber(max)
{
    return Math.floor(Math.random() * max);
}

function newRGB()
{
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

generateNewColour();