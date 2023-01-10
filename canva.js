let ancho=720, alto=520;
let laberinto;
let grid_width=8;
let grid_height=8;
let agente;
let path;
let con =0;
let goal=new Cell(7,7);
let start=new Cell(0,0);

function setup() {
	createCanvas(ancho,alto);
	stroke(2);
	let walls=createWalls();
	let cells=createCells();
	agente=new Agente(0,0);
	agente.show();
	cells=changeCells(walls,cells);
	laberinto=new Laberinto(cells,walls,start,goal);
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
	let cells=[];
		for(let x=0;x<grid_width;x++){
			for(let y=0;y<grid_height;y++){
				cells.push(new Cell(x,y));
			}
		}
	
		return cells;
}

function createWalls(){
	let walls=[];
		walls.push(new Wall(0,5));
		walls.push(new Wall(1,0));
		walls.push(new Wall(1,1));
		walls.push(new Wall(1,5));
		walls.push(new Wall(2,3));
		walls.push(new Wall(3,1));
		walls.push(new Wall(3,2));
		walls.push(new Wall(3,5));
		walls.push(new Wall(4,1));
		walls.push(new Wall(4,4));
		walls.push(new Wall(4,5));
		walls.push(new Wall(4,5));
		walls.push(new Wall(5,1));
		walls.push(new Wall(5,3));
		walls.push(new Wall(5,7));
		walls.push(new Wall(6,0));
		walls.push(new Wall(6,3));
		walls.push(new Wall(6,5));
		walls.push(new Wall(7,5));
		return walls;
	}

function changeCells(walls, cells){
		for (const element of cells) {
			for (const wall of walls) {
				if(wall.x ==element.x && wall.y == element.y){
					element.reachable=false;
				}
			}
		}
		
		return cells;
	}