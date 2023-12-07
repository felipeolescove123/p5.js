function setup() {
  createCanvas (400,400)
}
let velocidadeXBolinha = 5;
function draw() {
  background(0);
circle(xBolinha,yBolinha,diametro);
}
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
xBolinha = xBolinha + velocidadeXBolinha;