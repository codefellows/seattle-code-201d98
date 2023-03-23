'use strict';

let pokedex = new Pokedex();
pokedex.load();
console.log('POKEMON FROM STORAGE', pokedex);

pokedex.list.forEach(pokemon => {
  pokemon.speak();
});