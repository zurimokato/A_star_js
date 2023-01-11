class Wall {


	constructor(x,y) {
		this.x=x;
		this.y=y;
		this.tam = 63;
	}


	dibujar() {
		fill(255, 0, 0);
		stroke(0);
		rect(this.x * this.tam, this.y * this.tam, this.tam, this.tam);
	}
}