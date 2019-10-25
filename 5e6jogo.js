/*
Equipe:
Luiza Gabriela Gomes de Mesquita - Subturma B
Etapas 1, 2, 3, 4, 5 e 6.
*/

var x = 100;
var y = 295;
var xo = 30;
var yo = 70;
var xd = 0;
var yd = 0;
var estadodisparo = false;
var vidas = 5;
var pontos = 0;
var dificuldade = 1;
var raio1 = 20;
var raio2 = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0, 0, 0);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 100, 30);
  text('Nível: '+dificuldade, 200, 30);
  
  //elipse representando o jogador
  let a = color(255, 204, 0);
  let redValue = red(a); 
  fill(redValue, 0, 0);
  ellipse(x, y, 2*raio1, 2*raio1);
  if(keyIsDown(ENTER) && estadodisparo == false){
    xd = x ;
    yd = y ;
    estadodisparo = true;
  }
  if(estadodisparo == true){
    ellipse(xd,yd, 15, 15);
    yd = yd - 10;
    if(yd<0){
      estadodisparo = false;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  
  if(keyIsDown(UP_ARROW)){
    y -= 30;
  }
  if(keyIsDown(DOWN_ARROW)){
    y += 30;
  }
  while(dist(x, y, xo, yo) < raio1 + raio2){
  if(dist(x, y, xo, yo) < raio1 + raio2){
    x=100;
    y=295;
  }
    vidas= vidas -1
  }
  //quadrado representa o obstaculo
  let c = color(50); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
noStroke(); // Don't draw a stroke around shapes
  square(200, 265, 50);
  
  //objeto
  b = color(150, 75, 0);
  fill(b); // Use color variable 'c' as fill color
  noStroke(); // Don't draw a stroke around shapes
  ellipse( xo, yo, 2*raio2, 2*raio2);
  xo = xo+5 ;
  if(xo>400)
  {
    xo = -random(1000) ;
  }
}