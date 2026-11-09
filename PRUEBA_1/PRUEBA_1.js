let fondo;
let fondoX = 0;

let caballoCorre = [];
let caballoSalta = [];

let cuadroCorre = 0;
let cuadroSalto = 0;

let saltando = false;

let alturaSalto = 0;
let velocidadSalto = 20;

function preload() {
  fondo = loadImage("data/fondo.png");

  for (let i = 0; i < 6; i++) {
    caballoCorre[i] = loadImage("data/correr-" + i + ".png");
  }

  for (let i = 0; i < 7; i++) {
    caballoSalta[i] = loadImage("data/saltar-" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 400);
  frameRate(18);
}

function draw() {
  background (255);

  imageMode(CORNER);
  image(fondo, fondoX, 0, 800, 400);
  image(fondo, fondoX + 790, 0, 800, 400);

  fondoX = fondoX - 40;

  if (fondoX <= -800) {
    fondoX = 0;
  }
if (saltando) {

  alturaSalto += velocidadSalto;

  if (alturaSalto >= 100) {
    alturaSalto = 100;
    velocidadSalto = -20;
  }

  if (alturaSalto > 50 && velocidadSalto > 0) {
    cuadroSalto = 3;
  }

  if (velocidadSalto < 0) {
    cuadroSalto = 4;

    if (alturaSalto < 60) {
      cuadroSalto = 5;
    }

    if (alturaSalto < 30) {
      cuadroSalto = 6;
    }
  }

  image(caballoSalta[cuadroSalto], 250, 200 - alturaSalto, 200, 150);

  if (alturaSalto <= 0 && velocidadSalto < 0) {
    alturaSalto = 0;
    velocidadSalto = 10;
    saltando = false;
    cuadroSalto = 0;
  }

} else {
    image(caballoCorre[cuadroCorre], 250, 200, 200, 150);

    cuadroCorre++;

    if (cuadroCorre >= 6) {
      cuadroCorre = 0;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && !saltando) {
    saltando = true;
    bajando = false;
    alturaSalto = 0;
    velocidadSalto = 20;
    cuadroSalto = 0;
  }
}
