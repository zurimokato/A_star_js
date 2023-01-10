var cont=0;	
var goal=new Cell(3,7);
var walls=[];
var cells=[];
var laberinto;
var start=new Cell(3,0);
var agente;


function setup(){
	createCanvas(1800,720);
	agente=new Agente(3,0);
	cells=createMatris();
	walls=createWalls();
	agente.show();
	cells=changeCells(walls,cells);
	laberinto=new Laberinto(cells,walls,start,goal);
	path=laberinto.a_star();


}



function draw(){
	laberinto.dibujar();
	

}


function createMatris(){
	cells=[];
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			cells.push(new Cell(i,j));
		}
	}

	return cells;
}


function createWalls(){
	var walls=[];
		walls.push(new Wall(0,5));
		walls.push(new Wall(1,5));
		walls.push(new Wall(3,5));
		walls.push(new Wall(4,4));
		walls.push(new Wall(2,3));
		walls.push(new Wall(3,2));
		walls.push(new Wall(3,1));
		walls.push(new Wall(4,1));
		walls.push(new Wall(5,1));
		walls.push(new Wall(1,1));
		walls.push(new Wall(1,0));
		walls.push(new Wall(7,2));
		walls.push(new Wall(6,3));
		walls.push(new Wall(6,4));
		walls.push(new Wall(7,3));
		return walls;
}

function changeCells(walls, cells){
		for (var i =0; i<cells.length ;i++) {
			for (var j =0;j<walls.length; j++) {
				if(walls[j].x ==cells[i].x && walls[j].y == cells[i].y){
					cells[i].reachable=false;
				}
			}
		}
		
		return cells;
	}