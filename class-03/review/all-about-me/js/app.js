'use strict';

// let userName = prompt('What is your name?').toLowerCase();
let userName = prompt('What is your name?');

if (userName === null) {
  alert('Please enter a name!');
} else {
  console.log(userName.toLowerCase());

  alert('Hello,' + userName.toLowerCase());
}

let myAge =prompt('Am I 42? Type yes or no').toLowerCase();
console.log(myAge); 
if (myAge === 'yes') {
  alert(userName + 'You are incorrect. I just had a birthday and I am 43!');

} else if (myAge === 'no') {
  // let myAge = prompt('You are correct! I am 43!').toLowerCase();
  alert('You are correct! I am 43!');
}

let QuestionTwo =prompt('Do I like dogs? Type yes or no').toLowerCase();
console.log(QuestionTwo); 
if (QuestionTwo === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionTwo === 'no') {
  // let QuestionTwo = prompt('You are not correct!');
  alert('You are not correct!');
}

let QuestionThree =prompt('Do I like pink? Type yes or no').toLowerCase();
console.log(QuestionThree); 
if (QuestionThree === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionThree === 'no') {
  // let QuestionThree = prompt('You are not correct!');
  alert('You are not correct!');
}

let QuestionFour =prompt('Do I like pink? Type yes or no').toLowerCase();
console.log(QuestionFour); 
if (QuestionFour === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionFour === 'no') {
  let QuestionFour = prompt('You are not correct!');
}

// switch(QuestionFour) {
// case 'yes':
//   alert(userName + 'You are correct!');
//   break;
// case 'no':
//   alert('Nope your wrong');
//   break;
// default:
//   alert('Ugh oh');
// }

let QuestionFive =prompt('Do I like computer scuence? Type yes or no').toLowerCase();
console.log(QuestionFive); 
if (QuestionFive === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionFour === 'no') {
  let QuestionFive = prompt('You are not correct!');
}

