'use strict';

function Pokedex() {
  this.list = [];
}

Pokedex.prototype.catch = function (pokemon) {
  this.list.push(pokemon);
}
Pokedex.prototype.search = function(name) {
  let results = null;
  for (let j = 0; j < this.caught.length; j ++) {
    if (this.list[i].name.toLowerCase() === name.toLowerCase()) {
      results = ['this pokemon has been caught!', this.caught[i]];
      return results;
    }
  }

  return results;
}
// Load pokemon from localStorage
Pokedex.prototype.load = function() {
  // what is stored in localStorage??
  let valuesFromStorage = JSON.parse(localStorage.getItem('pokedex')); // option 1 - there are no pokemon / null / option 2 we have a list of Pokemon objects??
  if (valuesFromStorage) {
    // loop through the value an re-instantiate
    valuesFromStorage.forEach(pokemon => {
      this.list.push(new Pokemon(pokemon.name, pokemon.type));
    });
    // this.list = valuesFromStorage;
  }
}
// saves our pokemon into localStorage
Pokedex.prototype.save = function() {
  let stringifiedValues = JSON.stringify(this.list);
  localStorage.setItem('pokedex', stringifiedValues);
}

function Pokemon(name, type) {
  this.name = name;
  this.type = type;
}
Pokemon.prototype.speak = function() {
  let speechEl = document.createElement('h2');
  speechEl.textContent = `${this.name} says: ${this.name.toUpperCase()}!!!`
  document.body.appendChild(speechEl);
}

