function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 50; x <= width - 10; x = x + 10) {
    line(x, height/2, x+100, height/2-100);
  }
}
