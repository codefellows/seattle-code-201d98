'use strict';

function Animal(species, legs) {
  this.species = species;
  this.legs = legs
}
Animal.prototype.sleep = true;
Animal.prototype.willDie = true;


function Pokemon(name, type, legs) {
  Animal.call(this, "pokemon", legs); // why pass in "this" => so Animal doesn't create it's own this.
  this.name = name;
  this.type = type;
}
// allows prototypes to share values
Pokemon.prototype = Animal.prototype;
Pokemon.prototype.willDie = false;

let pokemon1 = new Pokemon('Pikachu', 'electric', 2);
console.log(pokemon1);