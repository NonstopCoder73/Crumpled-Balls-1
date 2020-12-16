class Dustbin {
    constructor(x, y, widh, height){
        this.x = x;
        this.y = y;
        this.dusWidth = 200;
        this.dusHeight = 100;
        this.thickness=20;
        this.angle=0;

        this.bottomBody=Matter.Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        
        this.leftWallBody=Matter.Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);

        this.rightWallBody=Matter.Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        
      World.add(world, this.bottomBody );
      World.add(world, this.leftWallBody );
      World.add(world, this.rightWallBody );



        
    }
    
    display() {
        //do it for all three
        var pos = this.bottomBody.position;
            push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.thickness, this.dustHeight);
            pop()
            
            var posi=this.leftWallBody.position;
            push()
            translate(posiLeft.x, posiLeft.y);
            rectMode(CENTER)
            //strokeWeight(4);
            angleMode(RADIANS)
            fill(255)
            stroke(255)
            rotate(this.angle)
            rect(0,0,this.thickness, this.dustHeight);
            pop()
         
           var posit=this.rightWallBody.position;
        push()
        translate(positLeft.x, positLeft.y);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.thickness, this.dustHeight);
        pop()
    }
}
