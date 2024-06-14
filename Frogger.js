//Creo las Variables para luego utilizarlas
let frog;
let frogimg;
let auto1;
let auto2;
//cargo la imagen
function preload() {
  frogimg = loadImage("frog.png");
}
//Creo los sprites y les asigno velocidades a los vehiculos
function setup() {
  createCanvas(800, 600);
  frog = createSprite(100, 550, 40, 40);
  auto1 = createSprite(50, 360, 100, 50);

  auto2 = createSprite(0, 155, 100, 50);

  auto1.velocity.x = 4;
  auto2.velocity.x = 5;
}
//me pongo a crear las calles, todo con rectangulos y a ojo
function draw() {
  background(25, 120, 25);
  fill(0);
  rect(0, 325, 800, 150);
  fill(255, 255, 255);

  rect(0, 390, 100, 20);
  rect(150, 390, 125, 20);
  rect(325, 390, 125, 20);
  rect(500, 390, 125, 20);
  rect(675, 390, 125, 20);
//hago que si los autos se "salen de la calle" vuelva a aparecer debajo
  if (auto1.position.x > width) {
    auto1.position.x = 775;
    auto1.position.y = 450;
    auto1.velocity.x *= -1;

  }


  if (auto2.position.x > width) {
    auto2.position.x = 775;
    auto2.position.y = 245;
    auto2.velocity.x *= -1;
  }

  fill(0);
  rect(0, 125, 800, 150);
  fill(255, 255, 255);
  rect(0, 190, 100, 20);
  rect(150, 190, 125, 20);
  rect(325, 190, 125, 20);
  rect(500, 190, 125, 20);
  rect(675, 190, 125, 20);
//hago el movimiento de la rana
  if (keyIsDown(UP_ARROW) === true) {
    frog.position.y -= 3;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    frog.position.y += 3;
  }

  drawSprites();
}
