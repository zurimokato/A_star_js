function Wall(x,y){
	this.x=x;
	this.y=y;
	this.tam=63;

	this.Wall=function(x,y){
		this.x=x*63;
		this.y=y*63;
	}

	this.dibujar=function(){
		fill(255,0,0);
		stroke(0);
		rect(this.x*this.tam,this.y*this.tam,this.tam,this.tam);
	}
}