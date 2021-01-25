class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length:350,
            stiffness:0.04
        }
        this.sling=Matter.Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        push()
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(4)
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        pop()
    }
}