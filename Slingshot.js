class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            strokeWeight(4);
            
            if(pointA.x < 215){
                image(this.sling3, pointA.x-25, pointA.y-10, 15, 30);
                line(pointA.x-20, pointA.y+5, pointB.x+20, pointB.y);
            line(pointA.x-20, pointA.y+5, pointB.x-10, pointB.y)
            }
            else{
                image(this.sling3, pointA.x+20, pointA.y-10, 15, 30);
                line(pointA.x+20, pointA.y+5, pointB.x+20, pointB.y);
            line(pointA.x+20, pointA.y+5, pointB.x-10, pointB.y)
            }
        }
    }
    
}