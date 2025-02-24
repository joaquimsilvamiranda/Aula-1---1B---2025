function setup() {
    createCanvas(400, 400);
  }
  //Função draw significa desenhar
  function draw() {
    background(148, 0, 211);
    ///Desenhando a linha superior
    circle(50, 50,100); //Primeiro círculo
    circle(150,50,100); //Segundo círculo
    circle(250,50,100); //Terceiro círculo
    circle(350,50,100); //Quarto círculo
    ///Denhando a linha inferior
    circle(50,350,100); //Primeiro círculo
    circle(150,350,100);//Segundo círculo
    circle(250,350,100);//Terceiro círculo
    circle(350,350,100);//Quarto círculo
    if(mouseIsPressed) {
      console.log(mouseX,mouseY);
    }
  }  