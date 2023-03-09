'use strict';

// global scope variable
let typeGlobal = 'string';

function sayName(name, type) {
  console.log("Hello " + name);
  console.log(type);
  let upper = name.toUpperCase();
  return upper;
}

// where is function called and what values are passed a arguments.
let value = sayName('Jacob', typeGlobal);
console.log(value);

/**
 * 
 * @param {String} question 
 * @param {String} answer 
 */
function askQuestion(question, answer) {
  let response = prompt(question).toLowerCase();
  if (parseInt(response)) {
    response = parseInt(response);
  }
  if (response === answer) {
    return true;
  } else {
    return false;
  }
}

// let isCorrect = askQuestion('What is my favorite pokemon', 'pikachu');
// console.log(isCorrect);


let questions = ['Who is my favorite Pokemon', 'What is my age'];
let answers = ['pikachu', 33];

for (let i = 0; i < questions.length; i++) {
  let isCorrect = askQuestion(questions[i], answers[i]);
  if (isCorrect === 'true') {
    alert('Great!');
  } else {
    alert('Wrong :(');
  }
}