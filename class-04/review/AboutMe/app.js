"use strict";

let greeting = prompt("Hello, welcome to my site. What is your name?");
console.log(greeting);
alert("Thank you for coming to my site " + greeting);


let age = prompt("I am 26 years old. Yes or no.").toLowerCase();
console.log(age);

if (age === "no" || age === "n") {
    var q1 = 1;
    alert("Correct!");
    console.log("correct");
} else if (age === "yes" || age === "y") {
    var q1 = 0;
    alert("Incorrect I am 28.");
    console.log("incorrect");
} else {
    var q1 = 0;
    console.log(age);
    alert("You do not follow instructions...");
}

let kids = prompt("I have 1 son. Yes or no.").toLowerCase();
console.log(kids);

if (kids === "no" || kids === "n") {
    var q2 = 1;
    console.log("correct");
    alert("Correct I have a daughter.");
} else if (kids === "yes" || kids === "y") {
    var q2 = 0;
    console.log("incorrect");
    alert("Incorrect I have a daughter.");
} else {
    var q2 = 0;
    console.log(kids);
    alert("You do not follow instructions...");
}

let job = prompt("I was in the Army for six years. Yes or no.").toLowerCase();
console.log(job);

if (job === "yes" || job === "y") {
    var q3 = 1;
    console.log("correct");
    alert("That is correct");
} else if (job === "no" || job === "n") {
    var q3 = 0;
    console.log("incorrect");
    alert("Incorrect I was in for six years.");
} else {
    var q3 = 0;
    console.log(job);
    alert("You do not follow instructions...");
}

let education = prompt("I have a degree in UAV applied science. Yes or no.").toLowerCase();
console.log(education);

if (education === "no" || education === "n") {
    var q4 = 1;
    console.log("correct");
    alert("Correct I have not finished that degree yet.");
} else if (education === "yes" || education === "y") {
    var q4 = 0;
    console.log("incorrect");
    alert("Incorrect I have not finished that degree yet.")
} else {
    var q4 = 0;
    console.log(education);
    alert("You do not follow instructions...");
}

let goals = prompt("I want to become a game developer eventually. Yes or no.").toLowerCase();
console.log(goals);

if (goals === "yes" || goals === "y") {
    var q5 = 1;
    console.log("correct");
    alert("Correct once I get a better understanding and am fluid in programming I would really enjoy developing games.");
} else if (goals === "no" || goals === "n") {
    var q5 = 0;
    console.log("incorrect");
    alert("Incorrect I would love to become a game developer one day.");
} else {
    var q5 = o;
    console.log(goals);
    alert("You do not follow instructions...");
}

for (let i = 0; i < 4; i++) {
    console.log();
    let numberGame = parseInt(prompt("Guess a number between 1-20"));

    if (numberGame === 12) {
        var q6 = 1;
        alert("Good guess!")
        console.log("correct");
        break;
    } else if (numberGame > 12) {
        var q6 = 0;
        alert("Incorrect it is lower.");
        console.log("incorrect");
    } else {
        var q6 = 0;
        alert("Incorrect it is higher.");
        console.log("incorrect")
    }
}

let answer = ["valorant", "elden Ring", "csgo"];
let numberOfGuesses = 6;
let correctAnswer = false; // tells us if the answer is correct or not

while (numberOfGuesses > 0) {
    let question = prompt("What is one of my top 3 favorite games?").toLowerCase();
    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i]);
        console.log(question);
        if (question === answer[i]) {
            alert("Correct");
            console.log("correct");
            var q7 = 1;
            correctAnswer = true;
            break;
        }
    }
    if (correctAnswer === false) {
        var q7 = 0;
        alert("Incorrect");
        numberOfGuesses--;
    } else {
        alert("possible answers were Valorant, Elden Ring, or csgo");
        break;
    }
}
let correctAnswers = q1 + q2 + q3 + q4 + q5 + q6 + q7;
console.log(correctAnswers + "/7");
alert("Thank you for taking this quiz " + greeting + " you got " + correctAnswers + " out of 7 right!");


