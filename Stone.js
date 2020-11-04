class Stone {
    constructor(x,y){
    this.image = loadImage("sprites/stone.png")
    var options = {
    isStatic:true,
    
    }
    this.x=x
    this.y=y
    this.body=Bodies.rectangle(this.x,this.y,width,height,options)

    
    World.add(world,this.body)





}






display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    var pos =this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.angle)
    fill ("red")
    rectMode(CENTER)
    //rect(0,0,20,100)
    image(this.image,0,0,60,60) 
    pop()

    








}
}