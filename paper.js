class paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:0.4
        }
		this.r=r;
		
		this.image=loadImage("fish2.png");
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
			
		var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		fill(255)
		imageMode(CENTER);
		image(this.image, 0,0,2*this.r, 2*this.r)
		
		pop()
	}

}