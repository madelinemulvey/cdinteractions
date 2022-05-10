function setup() {
  createCanvas(windowWidth-16, windowHeight-16);
  background(220);
}

function draw() {
  ellipse(100,82,23,25);
  fill(206, 255, 0);
  ellipse(mouseX,mouseY,10,10);
  ellipse(width/2,height/2,10,10);
  fill(255, 266, 0);
  for ( let y = 20 ; y < height ; y+=30 ) {
    for ( let i = 20 ; i < width ; i+=30 ) {
    ellipse( i, y, 20, 20);
}
  }
}
