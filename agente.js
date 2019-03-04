function Agente(x,y) {
	this.x=x;
	this.y=y;
	this.tam=63;

	this.Agente=function(x,y){
		this.x=x;
		this.y=y;
	}

	this.show=function(){
		fill(0,0,255);
		rect(this.x*this.tam,this.y*this.tam,this.tam,this.tam);
	}

	this.update=function(newX,newY){
		this.sleep(500);
		fill(255,255,255);
		this.x=newX;
		this.y=newY;
		
	}
	this.sleep=function(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
		 if ((new Date().getTime() - start) > milliseconds) {
		  break;
		 }
		}
	   }
}