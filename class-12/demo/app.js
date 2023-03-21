'use strict';

const canvasEl = document.getElementById('draw-on-me');

// declare what context we want to draw
const drawingContext = canvasEl.getContext('2d');

// first 2 arguments, (x, y) location on the canvas for the first pixel
// second 3 arguments, (height and width)
drawingContext.strokeRect(0, 0, 20, 20);
drawingContext.strokeRect(20, 0, 20, 20);

let scale = 1;
function drawRectangles() {
  let x = 40;
  let y = 0;
  let height = 20 * scale;
  let width = 20 * scale;
  drawingContext.strokeRect(x,y,height, width);
}

// let intervalId = setInterval(() => {
//   drawRectangles(scale += 1);
// }, 1000);
drawingContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

// chart.js stuff
let chartObj = new Chart(drawingContext, {
  type: 'bar',
  data: {
    labels: ['One', 'Two', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Total Bananas',
      data: [20, 15, 33, 7, 2, 13],
      borderWidth: 1
    },{
      label: 'Total Potatoes',
      data: [13, 12, 4, 9, 3, 5],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});