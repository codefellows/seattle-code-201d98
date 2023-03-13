'use strict';

console.log(document.body);
let h1Element = document.getElementById("app-heading");
console.log(h1Element.textContent);
// we'll be working with text Context
// h1Element.textContent = 'Hey from JS!'

let pokemon1 = {
  name: 'Pikachu',
  type: 'Electric',
  // functions on object are known as methods
  speak: function (greeting) {
    console.log(greeting + '. '+ this.name.toUpperCase() + "!!!");
  }
}

// the HTML that we want to append new elements into
let pokemon1Element = document.getElementById('item-1');
pokemon1Element.style="border: thin solid black;"

// create a new element
let h2Element = document.createElement('h2');
// update the element object with values from JS
h2Element.textContent = pokemon1.name;
// this changes our currently render document
pokemon1Element.appendChild(h2Element);
console.log(h2Element);

// add our pokemon type
let pElement = document.createElement('p');
pElement.textContent = pokemon1.type;
pokemon1Element.appendChild(pElement);

let pokemon2 = {
  name: 'Charizard',
  type: 'fire',
  // another method.
  speak: function () {
    console.log(this.name.toUpperCase() + '!!!');
  }
}

// let's add pokemon 2!
let pokemon2Element = document.getElementById('item-2');
pokemon2Element.style="border: thin solid black;"

// add the name value
let charizardName = document.createElement('h2');
charizardName.textContent = pokemon2.name;
pokemon2Element.appendChild(charizardName);

// add the type
let charizardType = document.createElement('p');
charizardType.textContent = pokemon2.type;
pokemon2Element.appendChild(charizardType);

let key = "type";
console.log(pokemon1, pokemon2[key]);
pokemon1.speak('hey there');
pokemon2["speak"]();

// generate a random number between a and b
function generateBetween(a, b) {
  return Math.ceil(Math.random() * (b - a)) + a;
}

console.log(generateBetween(23, 64));