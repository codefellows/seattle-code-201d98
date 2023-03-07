'use strict'; // forces use to use proper keywords

let wantsASundae = prompt('Who you like a sundae?').toLowerCase(); // be careful if you click "cancel"

if (wantsASundae === 'yes') {
  // ask about ice cream and toppings
  alert('Great, take a look at our ice cream flavors');

  let iceCreamFlavor = prompt('What flavor of ice cream would you like?').toLowerCase();

  if (iceCreamFlavor === "Vanilla" || iceCreamFlavor === 'Strawberry' || iceCreamFlavor === 'Rocky Road') {
    alert('Great!  Choose from our list of toppings');

    // choose 3 toppings
    let toppingOne = prompt('What is you first topping?');
    alert(toppingOne + ' Great! what else?');
    let toppingTwo = prompt('What is you second topping?');
    alert(toppingOne + ' ' + toppingTwo +  ' Great! what else?');
    let toppingThree = prompt('What is you third topping?');
    alert(toppingOne + ' ' + toppingTwo + ' ' + toppingThree + ' Great!');

    // checking if toppings are valid

  } else {
    alert('Ugh oh, we don\'t have that');
  }

} else {
  // alert that they should want ice cream.
  alert('Sorry about that, return when you want a sundae');
}