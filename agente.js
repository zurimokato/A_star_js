class Agente {

	constructor(x, y){
		this.x = x;
		this.y = y;
		this.tam = 63;
	}

	show(){
		fill(0, 0, 255);
		rect(this.x * this.tam, this.y * this.tam, this.tam, this.tam);
	}

	update(newX, newY){
		this.sleep(500);
		fill(255, 255, 255);
		this.x = newX;
		this.y = newY;

	}
	sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
				break;
			}
		}
	}
}