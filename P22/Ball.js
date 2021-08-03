class Ball{
 constructor(x,y,r){
     
    var ball_options={
      isStatic:true,
      density:0.8,
      friction:0,
      restitution:1
    }
    this.body = Matter.Bodies.circle(x,y,r,ball_options)
    World.add(world,this.body);
    this.r= r;
    
 }

 show(){
     push()
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    pop()

 }





}