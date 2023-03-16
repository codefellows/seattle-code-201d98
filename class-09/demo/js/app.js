'use strict';
console.log('js loaded');

const pokedex = [];
const tableBodyEl = document.getElementById('table-values');


function Pokemon(name, type, hp) {
  this.name = name;
  this.type = type;
  this.hp = hp
}

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
  const tableData3 = document.createElement('td');
  tableData3.textContent = this.hp;
  tableRow.appendChild(tableData3);
}

let pokemon1 = new Pokemon("Pikachu", "electric", 100);
pokedex.push(pokemon1);

let pokemon2 = new Pokemon("Charizard", "fire", 100);
pokedex.push(pokemon2);

let pokemon3 = new Pokemon('Blastoise', 'water', 100);
pokedex.push(pokemon3);

console.log(pokedex);
for (let i = 0; i < pokedex.length; i++) {
  pokedex[i].drawRow();
}


function drawFooter() {
  // check if there is footer
  let footer = document.getElementById('footer-row');
  footer.innerHTML = ''; // erase footer first.

  // redraw footer
  let cell1 = document.createElement('td');
  let cell2 = document.createElement('td');
  cell1.textContent = 'Total:';
  cell2.textContent = pokedex.length// however many pokemon I currently have
  tableBodyEl.appendChild(footer);
  footer.appendChild(cell1);
  footer.appendChild(cell2);
}
// Use the DOM to find an element we want to attach an event to.
let buttonEl = document.getElementById('test-button');
let formEl = document.getElementById('pokemon-form');

function handleClick() {
  console.log("click has happened");
}

buttonEl.addEventListener('click', handleClick);

// the browser has some defaults, prevent default submission behavior so our page doesn't reload.
// formEl.addEventListener('submit', function (event) {
//   event.preventDefault(); // don't refresh the page please.
//   console.log("POKEMON NAME on submit: ", event.target.pokemon_name.value, typeof event.target.pokemon_name.value);
//   console.log("POKEMON TYPE on submit: ", event.target.pokemon_type.value, typeof event.target.pokemon_type.value);
//   console.log("POKEMON HP on submit: ", event.target.pokemon_hp.value, typeof event.target.pokemon_hp.value);
// });

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Pokemon Submit Occured!');
  // let formEl = event.target;
  // let pokemonNameInputEl = formEl.pokemon_name;
  // let pokemonName = event.target.pokemon_name.value;
  // let pokemonType = event.target.pokemon_type.value;

  let { pokemon_name, pokemon_type, pokemon_hp } = event.target;

  console.log(pokemon_name.value, pokemon_type.value, pokemon_hp.value);
  let newPokemon = new Pokemon(
    pokemon_name.value,
    pokemon_type.value,
    parseInt(pokemon_hp.value)
  );
  pokedex.push(newPokemon);
  console.log("Pokedex updated: ", pokedex);
  newPokemon.drawRow();
  drawFooter();
});
drawFooter();