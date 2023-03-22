let buttonEl = document.getElementById('open-btn');

buttonEl.addEventListener('click', function () {

  let footerEl = document.getElementById('footer');

  footerEl.classList += 'open';

});

function Pokemon(name, type) {
  this.name = name;
  this.type = type;
  this.hp = 100;
  this.isCute = true
}
Pokemon.prototype.speak = function() {
  console.log(this.name.toUpperCase());
}

let state = {
  pokedex: [new Pokemon('Pikachu', 'electric'), new Pokemon('Charizard', 'fire')],
}
state.pokedex[0].speak();

// state -> jargon meaning any values that are important to our application.

// Odd Duck State => Products => click event => state updates to increment an object property by one.

// when do we READ / WRITE to local storage??

// localStorage API -> file in your file system that only accesible by the current browser your using. Considered safe from other applications, but any code that runs in your browser will have access (DONT store user info here).
// key : value paired.

// console.log(localStorage);

// READ from storage
let data = localStorage.getItem('pokemon');
// console.log(data);

// WRITE to storage
// setting an item into storage requires both a 'key' and a 'value'.
// localStorage.setItem('banana', 'Hello World');

// console.log(localStorage);

// REMOVE ALL THINGS
// localStorage.clear();
// console.log(localStorage);

// JSON -> JavaScript Object Notation -> the syntax for js objects and arrays
// JS Object but not quite JSON
// {
//   Jacob: 'Instructor',
//   favorites: ['math', 'video games']
// }

// {
//   "Jacob": "Instructor",
//   "favorites": ['math', 'video games']
// }

// JSON.parse / JSON.stringify
localStorage.setItem('pokemon', JSON.stringify(state));
// console.log('CURRENT STATE AFTER SET: ', localStorage);

let pokemonState = localStorage.getItem('pokemon');
// console.log('STATE FROM STORAGE: ', JSON.parse(pokemonState));

function writeData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readData(key) {
  return JSON.parse(localStorage.getItem(key));
}

state = readData('pokemon');
// state.pokedex[0].speak(); // sorry your pokemon objects are just regular object now
console.log('FRESH DATA FROM LOCAL STORAGE', state.pokedex[0]);

state.pokedex[0] = new Pokemon('Blastoise', 'water');

writeData('pokemon', state);
// console.log(readData('pokemon'));