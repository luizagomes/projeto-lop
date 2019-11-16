/*
Equipe:
Luiza Gabriela Gomes de Mesquita - Subturma B
Etapas 1, 2, 3, 4, 5, 6, 7, 8 e 9.
*/
 //jogador
var x = 100;
var y = 450;
var raio1 = 35;
//bonus
var xo = 250;
var yo = 70;
var raio2 = 35;
//disparo
var xd = -1000;
var yd = -1000;
var raio3 = 10;
var estadodisparo = false;
//informaçoes do jogo
var vidas = 5;
var pontos = 0;
var barreiraDePontos = 1000;
var nivel = 1;
var tela = 1;
var tempo= 0;
//inimigos
var vx = []; 
var vy = [];
var qt = 5; 
var i;
var tam = 40;
var raio4= tam/2
//imagens
let imgf; //tela de fundo
let imgj; //nave
let imgt; // disparo
let imgi; //asteroide
let imgb; //planeta
let imge; //explosao


function preload() {
  imgf = loadImage('Space.png');
  imgj = loadImage('ship_87.png');
  imgt =  loadImage('shot8.png')
  imgi = loadImage('asteroid_60.png');
  imge= loadImage('boom02.png');
  imgb = loadImage('p12.png');
}

function setup() {
  createCanvas(500, 500);
  frameRate(30); 
  for(i=0; i<qt; i++){
    vx[i] = random(20,480); 
    vy[i] = random(-1500,1500);
  }
}

function draw() {
   //inicio do jogo
  if(tela == 1) {
    background(0);
  fill(255, 255, 255);
  textSize(32);
  text('Aperte para jogar', 110, 250);  
    if(keyIsDown(ENTER)) {
    tela = 2;
    }
}
  
//Eexecuçao do jogo
if(tela==2){
  tempo++
  background(0);
  image(imgf, 0, 0);
   fill(255, 255, 255);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 100, 30);
  text('Nível: '+nivel, 220, 30);
   
   if(vidas==0){
    tela = 3;
   }
  
  if(nivel == 5){
    tela = 4;
  }
  
  //nivel 
  if (pontos>barreiraDePontos) {
    nivel= nivel+1;
    qt = qt + 10;
    barreiraDePontos = barreiraDePontos + 1000; 
  }
  
  //jogador 
  fill(28, 28, 28);
  noStroke();
  ellipse(x, y, 2*raio1, 2*raio1);
  imageMode(CENTER);
  image(imgj, x, y);
  //disparo
  if(tempo>5){
  if(keyIsDown(ENTER) && estadodisparo == false){
    xd = x ;
    yd = y ;
    estadodisparo = true;
  }
  }
  
  if(estadodisparo == true){
    ellipse(xd,yd, 2*raio3, 2*raio3)
    imageMode(CENTER);
    image(imgt , xd, yd);
    yd = yd - 10;
    if(yd<=0){
      estadodisparo = false;
    }
  }
  
  //acertar o bonus
  while(dist(xd, yd, xo, yo) < raio3 + raio2){
  if(dist(xd, yd, xo, yo) < raio3 + raio2){
    xd= -1000;
    yd= -1000;
    yo=-random(4000);
    xo=30;
  }
    if(vidas<5){
    vidas = vidas + 1;
    }
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

  //bonus
  if(tempo > 150) {
  fill(51);  
  noStroke(); 
  ellipse( xo, yo, 2*raio2, 2*raio2);
  imageMode(CENTER);
  image(imgb, xo, yo);
   yo = yo+5 ;
    
   //movimentaçao do bonus
  if(yo>700)
  {
    yo = -random(2000) ;
  }
  }
  
  //colisao com o bonus
  while(dist(x, y, xo, yo) < raio1 + raio2){
  if(dist(x, y, xo, yo) < raio1 + raio2){
    x=100;
    y=450;
    xo=30;
    yo=70;
  }
    if(vidas<5){
    vidas = vidas + 1;
    }
  }

  //inimigos
  if(tempo > 50){
  for(i=0; i<qt; i++){
    vy[i] = vy[i] + 5
    if(vy[i]>500){
      vy[i]= -random(1000)
      
    }
    fill(150, 75, 0);
    ellipse(vx[i],vy[i],tam,tam);
    imageMode(CENTER);
    image(imgi, vx[i], vy[i]);
    
    //acertar inimigos
    while(dist(xd, yd, vx[i], vy[i]) < raio3 + raio4){
  if(dist(xd, yd, vx[i], vy[i]) < raio3 + raio4){
    fill(150, 75, 0);
    ellipse(vx[i],vy[i],tam,tam);
    imageMode(CENTER);
    image(imge, vx[i], vy[i]);
    xd= -1000;
    yd= -1000;
    vx[i] = random(20,480); 
    vy[i] = random(-1500,1500);
    
  }
    qt = qt+2;
    pontos= pontos + 100;
  }
    //colisao com inimigo
     while(dist(x, y, vx[i], vy[i]) < raio1 + raio4){
  if(dist(x, y, vx[i], vy[i]) < raio1 + raio4){
     fill(150, 75, 0);
    ellipse(vx[i],vy[i],tam,tam);
    imageMode(CENTER);
    image(imge, vx[i], vy[i]);
    x=100;
    y=450;
    vx[i] = random(20,480); 
    vy[i] = random(-1500,1500);
  }
       qt = qt + 2;
    vidas = vidas - 1;
  }
  }
  }
}

//perder
if(tela==3){
  background(0);
  fill(255, 255, 255);
  textSize(32);
  text('GAME OVER', 110, 250); 
  if(keyIsDown(32)){
  tela = 1;
    vidas = 5;
    pontos = 0;
    nivel = 0;
  }
}

//ganhar
if(tela ==4){
  background(0);
fill(255, 255, 255);
  textSize(32);
  text('VÔCE VENCEU!', 110, 250); 
  if(keyIsDown(32)){
  tela = 1;
    vidas = 5;
    pontos = 0;
    nivel = 0;
  }
}
}

/*animaçao
var anima;
var imgsAndando = [];
var contFrame = 0;
var y = 0;
var height;
function preload() {
  for(j = 0; j<2 ; i++) {
    imgsAndando[i]= loadImage('p'+i+'.png');
  }
}    

function setup() {
  frameRate(30);
  createCanvas(600, 400);
}

function draw() {
  background(200);
  y = y+2;
  if(x>height){
    y=0
  }
  anima = imgsAndando[contFrame];
  noStroke();
  ellipse(x, 50, 40, 40);
  imageMode(CENTER);
  image(anima, x, 50);
  contFrame++;
  if(contFrame>2){
    contFrame = 0
  }
}
*/
