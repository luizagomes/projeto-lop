/*
Equipe:
Luiza Gabriela Gomes de Mesquita - Subturma B
Etapas 1, 2, 3, 4, 5, 6, 7 e 8.
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
var barreiraDePontos = 1000;
var nivel = 1;
//raio do jogador
var raio1 = 20;
//raio bonus
var raio2 = 25;
//raio disparo
var raio3 = 10;
var vx = []; 
var vy = [];
var qt = 10; 
var i;
var tam = 40;
//raio inimigos
var raio4= tam/2


function setup() {
  createCanvas(400, 400);
  frameRate(30); 
  for(i=0; i<qt; i++){
    vx[i] = random(5,400); 
    vy[i] = random(-2000,400);
  }
}

function draw() {
  background(255);
  fill(0, 0, 0);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 100, 30);
  text('Nível: '+nivel, 220, 30);
  
  //nivel 
  if (pontos>barreiraDePontos) {
    nivel= nivel+1;
    qt = qt + 1
    barreiraDePontos = barreiraDePontos + 1000; 
  }
  
  //elipse representando o jogador
  let a = color(255, 204, 0);
  let redValue = red(a); 
  fill(redValue, 0, 0);
  ellipse(x, y, 2*raio1, 2*raio1);
  //disparo
  if(keyIsDown(ENTER) && estadodisparo == false){
    xd = x ;
    yd = y ;
    estadodisparo = true;
  }
  if(estadodisparo == true){
    ellipse(xd,yd, 2*raio3, 2*raio3);
    yd = yd - 10;
    if(yd<0){
      estadodisparo = false;
    }
  }
  //acertar o bonus
  while(dist(xd, yd, xo, yo) < raio3 + raio2){
  if(dist(xd, yd, xo, yo) < raio3 + raio2){
    xd=0;
    yd=0;
    xo=-random(3000);
    yo=70;
  }
    vidas = vidas + 1;
  }

  //movimentos do jogador
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
  //colisao com o bonus
  while(dist(x, y, xo, yo) < raio1 + raio2){
  if(dist(x, y, xo, yo) < raio1 + raio2){
    x=100;
    y=295;
    xo=30;
    yo=70;
  }
    vidas = vidas + 1;
  }
  
  //bonus
  b = color(150, 75, 0);
  fill(b); 
  noStroke(); 
  ellipse( xo, yo, 2*raio2, 2*raio2);
  xo = xo+5 ;
  if(xo>400)
  {
    xo = -random(3000) ;
  }

  //inimigos
  for(i=0; i<qt; i++){
    vy[i] = vy[i] + 5
    if(vy[i]>400){
      vy[i]= -random(1500)
    }
    
    ellipse(vx[i],vy[i],tam,tam);
    //acertar inimigos
    while(dist(xd, yd, vx[i], vy[i]) < raio3 + raio4){
  if(dist(xd, yd, vx[i], vy[i]) < raio3 + raio4){
    xd=0;
    yd=0;
    vx[i]=0
    vy[i]=-2000
    
  }
    pontos= pontos + 50;
  }
     while(dist(x, y, vx[i], vy[i]) < raio1 + raio4){
  if(dist(x, y, vx[i], vy[i]) < raio1 + raio4){
    x=100;
    y=295;
    vx[i]=0;
    vy[i]=-random(1000);
  }
    vidas = vidas - 1;
  }
  }
  if(vidas==0){
    fill(0, 0, 0);
  textSize(30);
  text('GAME OVER', 200, 200);
  }
}
