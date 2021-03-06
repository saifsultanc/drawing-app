const color = document.getElementById("color");
const weight = document.getElementById("weight");
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  paths.splice(0);
  background(255);
});

const paths = [];
let current = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function mousePressed() {
  current = [];
  paths.push(current);
}

function draw() {
  noFill();

  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: color.value,
      weight: weight.value
    };

    current.push(point);
  }

  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
}
