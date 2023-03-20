'use strict';

const state = [];
let roundsOfVoting = 5;

function Image(name, source) {
  this.name = name;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.source = source;
}

state.push(new Image('cruisin goat', '/assets/cruisin-goat.jpg'));
state.push(new Image('float your goat', '/assets/float-your-goat.jpg'));
state.push(new Image('goat logo', '/assets/goat-logo.png'));
state.push(new Image('goat away', '/assets/goat-away.jpg'));
state.push(new Image('goat out of hand', '/assets/goat-out-of-hand.jpg'));
state.push(new Image('kissing goat', '/assets/kissing-goat.jpg'));
state.push(new Image('sassy goat', '/assets/sassy-goat.jpg'));
state.push(new Image('smiling goat', '/assets/smiling-goat.jpg'));
state.push(new Image('sweater goat', '/assets/sweater-goat.jpg'));

let imgEls = document.querySelectorAll('img'); //array like thing filled with all the img elements in my html
let voteTrackerEl = document.getElementById('vote-tracker'); 

console.log("CURRENTLY RENDERED IMAGES", imgEls);

console.log('CURRENT STATE', state);

// render our first goat images
// imgEls[0].src = state[0].source;
// imgEls[0].id = state[0].name;
// imgEls[1].src = state[1].source;
// imgEls[1].id = state[1].name;
renderGoats();

function generateRandomGoat() {
  return Math.floor(Math.random() * state.length);
}

function renderGoats() {
  // find some goats from state
  let goat1 = state[generateRandomGoat()];
  let goat2 = state[generateRandomGoat()];
  console.log('GOATS to re-render', imgEls, goat1, goat2);
  while (goat1.name === goat2.name){
    goat2 = state[generateRandomGoat()];
  }
  // this should garuantee fresh goats
  imgEls[0].src = goat1.source; // this makes things render
  imgEls[0].id = goat1.name;
  goat1.timesShown += 1;
  imgEls[1].src = goat2.source;
  imgEls[1].id = goat2.name;
  goat2.timesShown += 1;
}

let eventId = voteTrackerEl.addEventListener('click', function(event) {
  console.log(event.target); // event.target always represents the exact element where an event occurred.

  // identify which image was clicked on??
  let goatThatWasClicked = event.target.id;
  state.forEach(image => {
    if (image.name === goatThatWasClicked) {
      image.timesClicked += 1; // mutation of an object
    }
  });
  console.log('UPDATED STATE', state);

  // re-render new goat images -> random goat image from state
  if (roundsOfVoting) {
    renderGoats();
    roundsOfVoting--;
  } else {
    voteTrackerEl.removeEventListener('click', eventId);
  }
});
