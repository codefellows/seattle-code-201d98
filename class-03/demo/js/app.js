'use strict';

let people = [];

// creates 2 new index positions
people.push('Jacob');
people.push('JB');

console.log(people);

// modify a value at any index
people[0] = 'Dr. Robin';

// add values to the end using 'push'
people.push(3);
people.push(true);
console.log(people);

people[100] = 'Brooke';
console.log(people);

let lastPerson = people.pop(); // hold onto our value that we removed from the end.
console.log(lastPerson, people);

// use unshift and shift to add and remove (respectively) from the front.

let timesRan = 0;

for (let i = 0; i <= 27; i += 3) {
  timesRan++;
  console.log('i is equal to ' + i, 'times ran ' + timesRan); // hypothesis - 8 or maybe 26
}
  

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

let j = 5;
while(j < 25) {
  console.log("While loop is running!");
  j += 5;
}

// the statements in the do block will always run at least once
do {
  console.log('This runs just once');
} while(false)

let questionOne = "How old Am I";
let questions = [questionOne, 'What is my favorite pokemon?'];
let answers = [33, 'Pikachu'];
let response = null;

for (let i =0; i < questions.length; i++) {
  let questionOne = questions[i];
  let answerOne = answers[i];

  response = prompt(questionOne); // response is created by the user.
  console.log(typeof(parseInt(response)));
  if (response == answerOne) {
    alert('correct!!');
  } else {
    alert('Wrong :(');
  }
}

console.log('Done with my quiz!');
