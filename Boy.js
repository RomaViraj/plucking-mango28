class Boy {
    constructor(x,y){
    this.image = loadImage("sprites/boy.png")
    var options = {
    isStatic:true,
    
    }
    this.x=x
    this.y=y
    this.body=Bodies.rectangle(this.x,this.y,width,height,options)

    
    World.add(world,this.body)





}
display(){
    var pos =this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.angle)
    fill ("red")
    rectMode(CENTER)
    //rect(0,0,20,100)
    image(this.image,0,0,200,300) 
    pop()

    








}
}