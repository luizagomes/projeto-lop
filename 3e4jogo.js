/*
Equipe:
Luiza Gabriela Gomes de Mesquita - Subturma B
Etapa 1, 2, 3 e 4.
*/

var x = 100;
var y = 200;
var xo = 30;
var yo = 30;
var xd = 0;
var yd = 0;
var estadodisparo = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  //elipse representando o jogador
  ellipse(x, y, 30, 30);
  if(keyIsDown(ENTER) && estadodisparo == false){
    xd = x ;
    yd = y ;
    estadodisparo = true;
  }
  if(estadodisparo == true){
    ellipse(xd,yd, 5, 5);
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
  
  //quadrado representa o obstaculo
  square(200, 165, 50);
  
  //objeto
  ellipse( xo, yo, 45, 45);
  xo = xo+5 ;
  if(xo>400)
  {
    xo = -random(1000) ;
  }
}
