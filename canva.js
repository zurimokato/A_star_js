var ancho=720, alto=400;
var laberinto;
var grid_width=6;
var grid_height=6;
var agente;
var path;
var con =0;

function setup() {
	createCanvas(ancho,alto);
	stroke(2);
	var walls=createWalls();
	var cells=createCells();
	agente=new Agente(0,0);
	agente.show();
	cells=changeCells(walls,cells);
	laberinto=new Laberinto(cells,walls);
	path=laberinto.a_star();
	
}

function draw(){
	
	laberinto.dibujar();
	if(con <path.length){
		agente.update(path[con].x,path[con].y);
		agente.show();
		con++;
	}
	
}

function createCells(){
		var cells=[];
		for(var x=0;x<grid_width;x++){
			for(var y=0;y<grid_height;y++){
				cells.push(new Cell(x,y));
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