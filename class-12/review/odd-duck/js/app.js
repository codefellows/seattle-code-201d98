'use strict';

// array to hold all products
const objectProducts = [];
let roundsOfVoting = 25;

//function constructor for products
function Product(name, source){
  this.name = name;
  this.source = source;
  this.timesShown = 0;
  this.timesClicked = 0;
}

//generate objects from the img directory
objectProducts.push(new Product('bag','img/bag.jpg'));
objectProducts.push(new Product('banana','img/banana.jpg'));
objectProducts.push(new Product('bathroom','img/bathroom.jpg'));
objectProducts.push(new Product('boots','img/boots.jpg'));
objectProducts.push(new Product('breakfast','img/breakfast.jpg'));
objectProducts.push(new Product('bubblegum','img/bubblegum.jpg'));
objectProducts.push(new Product('chair','img/chair.jpg'));
objectProducts.push(new Product('cthulhu','img/cthulhu.jpg'));
objectProducts.push(new Product('dog-duck','img/dog-duck.jpg'));
objectProducts.push(new Product('dragon','img/dragon.jpg'));
objectProducts.push(new Product('pen','img/pen.jpg'));
objectProducts.push(new Product('pet-sweep','img/pet-sweep.jpg'));
objectProducts.push(new Product('scissors','img/scissors.jpg'));
objectProducts.push(new Product('shark','img/shark.jpg'));
objectProducts.push(new Product('sweep','img/sweep.png'));
objectProducts.push(new Product('tauntaun','img/tauntaun.jpg'));
objectProducts.push(new Product('unicorn','img/unicorn.jpg'));
objectProducts.push(new Product('water-can','img/water-can.jpg'));
objectProducts.push(new Product('wine-glass','img/wine-glass.jpg'));



//global scope needed elements for displaying images - did not work retuned nodelist
// let imageElements = document.querySelectorAll('img');

//calling each image tag by ID to be used in renderProducts()
let image1 =document.getElementById('image1');
let image2 =document.getElementById('image2');
let image3 =document.getElementById('image3');
let voteTracker = document.getElementById('vote-tracker');
voteTracker.addEventListener('click',handleProductClick);



//generate random product number for objectProducts array
function generateRandomProduct(){
  return Math.floor(Math.random() * objectProducts.length);
}
// console.log(generateRandomProduct());

function renderProducts(){
  //find 3 products to be displayes
  let product1 = objectProducts[generateRandomProduct()];
  let product2 = objectProducts[generateRandomProduct()];
  let product3 = objectProducts[generateRandomProduct()]; //number placed inside bracket is number generated from generate random product function

  console.log(product1, product2,product3);

  // slight edge case / at some point we are getting some duplicates.  Suggest turning into a while loop, and nest some conditional logic.
  if(product1.name === product2.name || product1.name === product3.name){
    // small change, set product to object selected from object Products
    product1 = objectProducts[generateRandomProduct()];
  }else if(product2.name === product1.name || product2.name === product3.name){
    product2 = objectProducts[generateRandomProduct()];
  }

  image1.src = product1.source;
  image1.alt = product1.name;
  product1.timesShown +=1;

  image2.src = product2.source;
  image2.alt = product2.name;
  product2.timesShown +=1;

  image3.src = product3.source;
  image3.alt = product3.name;
  product3.timesShown +=1;

}

renderProducts();


//function to handle event listener on clicked picture
function handleProductClick(event){

  //   let productWasClicked = event.target.id;

  objectProducts.forEach(image =>{
    if(image.name === event.target.alt){
      image.timesClicked +=1;
    }
    // console.log('updated Object Product' + objectProducts)
  });

  if(roundsOfVoting){
    renderProducts();
    roundsOfVoting--;
  }else{
    voteTracker.removeEventListener('click',handleProductClick);
    let buttonEl = document.getElementById('results-button');
    // console.log('THIS IS BUTTONEL', buttonEl);
    buttonEl.addEventListener('click', renderData);
    // what type of error are you getting?? TypeError
    alert('You Have reached max attempts');
  }
}

//some random text I messed up dssdadsa

// re-iterate through the array, and render list item data.
//    take the times shown and timesClicked and add those values to our HTML.
function renderData(event) {
  // let buttonClicked = event.target.id;
  objectProducts.forEach(product => {
    let listItemEl = document.createElement('li');
    let parentContainer = document.getElementById('results-list');
    parentContainer.appendChild(listItemEl);
    listItemEl.innerHTML = `${product.name} had ${product.timesClicked} votes, and was seen ${product.timesShown} times.`;
    product.timesClicked;
    product.timesShown;
  });
}
