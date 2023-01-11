class Cell {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.tam = 63;
		this.h = 0;
		this.g = 0;
		this.f = 0;
		this.reachable = true;
		this.parent = null;
	}

	dibujar() {
		noFill();
		stroke(0);
		rect(this.x * this.tam, this.y * this.tam, this.tam, this.tam);
	}

	ChangeReachable() {
		this.reachable = false;
	}

	isReachable() {
		return this.reachable;
	}
}