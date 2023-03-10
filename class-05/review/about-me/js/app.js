'use strict';
// console.log('Hello World');

let guessName = prompt('What is your name?');
// console.log(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);
alert(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);

let question = ['Would I ever go to Disney World?', 'Did I have a good day?', 'Have you ever played Monopoly?', 'Would I ever go sky diving?', 'Would I ever go sky diving?', 'Do you I social media?'];

let answer = ['yes', 'yes', 'yes', 'yes','yes','yes'];

function askQuestion(question, answer) {
  let response = prompt(question).toLowerCase();
  if (response === answer) {
    return true;
  } else {
    return false;
  } 
}

// for (let i = 0; i < question.length; i++) {
//   console.log(i);
//   let rightAnswer = askQuestion(question[i], answer[i]);
//   if (rightAnswer === true) {
//     alert('Correct! You guessed it right! Good-job!');
//   } else {
//     alert('Wrong answer better luck next time!');
//   }
// } 

function test(){
  for (let i = 0; i < question.length; i++) {
    console.log(i);
    // let response = prompt(question[i]).toLowerCase();
    let isAnswerCorrect = askQuestion(question[i], answer[i]);
    // if (response === 'yes' || response === 'y') {
    if (isAnswerCorrect) {
      alert('Correct! You guessed it right! Good-job!');
    } else {
      alert('Wrong answer better luck next time!');
    }
  }
}
test();


function guessingGame() {
  let myNumber = 17;
  let guesses = 4;
  while (guesses > 0) {
    let questionSix = +prompt('Guess my favorite number. It is between 1 and 25');
    if (questionSix === myNumber) {
      alert('Correct! You are good at this game!');
      score++;
      break;
    } else if (questionSix > myNumber) {
      alert(`That is toooo high! Try guessing again. ${guesses - 1} guesses left.`);
    } else if (questionSix < myNumber) {
      alert(`Too low, try again. ${guesses - 1} guesses left.`);
    }
    guesses--;
  }
  // did they guess on the last guess attempt.
  if (guesses === 0) {
    alert(`Correct! Yayyy you got it! My favorite number is ${myNumber}!`);
  }
}
guessingGame();


function myFavorite() {
  let favColor = ['black', 'red', 'yellow', 'blue'];
  let guessesLeft = 6;
  let correctAnswer = false;
  while (guessesLeft > 0) {
    let questionSeven = prompt('What is my favorite color?').toLowerCase();
    for (let i = 0; i < favColor.length; i++) {
      if (favColor[i] === questionSeven) {
        console.log('Correct ${guessName} ! I love this color!');
        correctAnswer = true;
      }
    }
    if (correctAnswer) {
      alert(`Corrrecttttt ${questionSeven}! I love this color!`);
      score++;
      break;
    } else {
      alert(`${questionSeven} is not my favorite color. Try again, ${guessesLeft - 1} guesses left.`);
    }
    guessesLeft--;
  }
  alert(`My favorite colors are ${favColor[0]}, ${favColor[1]}, ${favColor[2]}, ${favColor[3]}.`);
}
myFavorite();

alert(`Your final score is ${score} out of 7.`);

alert(`Thanks for participating, ${guessName}. Thank you for visiting my site!`);
