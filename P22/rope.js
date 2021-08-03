class rope{
	constructor(bodyA,bodyB, pointA, pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;
		var options = {
			bodyA:bodyA.body,
			bodyB:bodyB.body,
			pointB:{x:this.pointA, y:this.pointB}
		}
		//create rope constraint here
		console.log(bodyA);
		console.log(bodyB);
		this.rope = Constraint.create(options)
		World.add(world,this.rope);
	}


    //create display() here 

	show(){
    var pointA = this.rope.bodyA.position;
	//var pointB = this.rope.bodyB.position;
	var pointB = this.pointB;
	push();
    strokeWeight(4);
	stroke("white");
	line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB)
		pop();
	}
}
