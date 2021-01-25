class Bob{
    constructor(x,y,width){
var options={
    restitution:0.3,
    friction:1,
    density:1
}
this.body=Bodies.circle(x,y,width,options)
this.width=width
this.height=width
World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position
        var angle=this.body.angle
       push()
       translate(pos.x,pos.y)
       rotate(angle)
       ellipseMode(CENTER)
       ellipse(0,0,this.width,this.height)
       pop()
    }
}