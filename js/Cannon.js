class Cannon{
   constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }

  //display é a função/metodo para configurar visualização
  display(){
    //preenchimento
    fill("#676e6a");
    //empurrar configurações
    push();
    //transferir localização
    translate(this.x, this.y);
    
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    //puxar config
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();


  }
}
