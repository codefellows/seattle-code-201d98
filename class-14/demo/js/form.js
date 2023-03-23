'use strict';

let formEl = document.getElementById('pokemon-form');
let pokedex = new Pokedex();
pokedex.load(); // load any pokemon from localstorage

function createPokemon(event) {
  event.preventDefault();
  let { pokemon_name, pokemon_type } = event.target;
  let pokemon = new Pokemon(
    pokemon_name.value,
    pokemon_type.value,
  );
  pokedex.catch(pokemon);
  pokedex.save();
  console.log('UPDATES POKEDEX: ', pokedex, localStorage);
}

formEl.addEventListener('submit', createPokemon);
