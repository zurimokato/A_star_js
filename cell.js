function Cell(x,y){
	this.x=x;
	this.y=y;
	this.tam=63;
	this.h=0;
	this.g=0;
	this.f=0;
	this.reachable=true;
	this.parent=null;
	this.Cell=function(x,y){
		this.x=x;
		this.y=y;
		this.tam=63;
	}
	

	this.dibujar=function(){
		noFill();
		stroke(0);
		rect(this.x*this.tam,this.y*this.tam,this.tam,this.tam);
	}

	this.ChangeReachable=function(){
		this.reachable=false;
	}

	this.isReachable=function(){
		return this.reachable;
	}
}