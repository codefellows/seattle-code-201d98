// validated functionality for first user story

// Constructor function to create product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

// Array of product objects
let state = [
  new Product('bag', 'img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulhu', 'img/cthulhu.jpg'),
  new Product('dog-duck', 'img/dog-duck.jpg'),
  new Product('dragon', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('pet-sweep', 'img/pet-sweep.jpg'),
  new Product('scissors', 'img/scissors.jpg'),
  new Product('shark', 'img/shark.jpg'),
  new Product('sweep', 'img/sweep.png'),
  new Product('tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('water-can', 'img/water-can.jpg'),
  new Product('wine-glass', 'img/wine-glass.jpg')
];

// Function to generate three unique product images
function generateImages() {
  let product1 = state[Math.floor(Math.random() * state.length)];
  let product2 = state[Math.floor(Math.random() * state.length)];
  let product3 = state[Math.floor(Math.random() * state.length)];

  // Check if products are unique and generate new ones if necessary
  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product1 = state[Math.floor(Math.random() * state.length)];
    product2 = state[Math.floor(Math.random() * state.length)];
    product3 = state[Math.floor(Math.random() * state.length)];
  }

  // Update timesShown property for each product
  product1.timesShown++;
  product2.timesShown++;
  product3.timesShown++;

  // Display images on the page
  document.getElementById('product1').src = product1.imagePath;
  document.getElementById('product2').src = product2.imagePath;
  document.getElementById('product3').src = product3.imagePath;
}

// Add event listener to image container
document.getElementById('image-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('product-image')) {
    generateImages();
  }
});

// Initial image generation
generateImages();
