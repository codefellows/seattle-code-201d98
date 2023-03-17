'use strict';

let formEl = document.getElementById('form-data');

function Person(name) {
  console.log('THIS IS THE NAME', name);
  this.name = name;
}

let person =new Person(33);
console.log("THIS IS THE NEW PERSON", person, 'ADD THIS TO AN ARRAY');

for (let i = 0; i < 5; i++) {
  let newPerson = new Person('Jacob');
  console.log('This is the new person', newPerson);
  debugger;
}


// console.log(formEl.appendChild());

// let array = new Array(-1);