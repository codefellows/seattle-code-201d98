'use strict';

const pokedex = [];
const tableBodyEl = document.getElementById('table-values');

// function CookieStore() {
    // this.minCust = 
    // this.customersPerHour = 
// }

function Pokemon(name, type) {
  this.name = name;
  this.type = type;
  this.abilities = []
  // this is fine and will work, but is not preferred.
  // this.speak = function () {}
}
// the prototype object is "inherited" by every object made with this constructor function.
Pokemon.prototype.healthPoints = 100;
Pokemon.prototype.speak = function() {
  console.log(this.name.toUpperCase() + '!!!');
}
Pokemon.prototype.drawRow = function() {
  // append data associated with pokemon to the tableBody
  // create a row and 2 tds
  const tableRow = document.createElement('tr');
  tableBodyEl.appendChild(tableRow);
  const tableData1 = document.createElement('td');
  tableData1.textContent = this.name;
  tableRow.appendChild(tableData1);
  const tableData2 = document.createElement('td');
  tableData2.textContent = this.type;
  tableRow.appendChild(tableData2);
}

let pokemon1 = new Pokemon("Pikachu", "electric");
pokedex.push(pokemon1);

let pokemon2 = new Pokemon("Charizard", "fire");
pokedex.push(pokemon2);

let pokemon3 = new Pokemon('Blastoise', 'water');
pokedex.push(pokemon3);

console.log(pokedex);
for (let i = 0; i < pokedex.length; i++) {
  pokedex[i].drawRow();
}