function Laberinto(cells,walls) {
	this.cells=cells;
	this.walls=walls;
	this.tam=63;
	this.grid_height = 6;
	this.grid_width = 6;
	this.start=new Cell(0,0);
	this.goal=new Cell(5,5);
	this.open=new PQueue();
	this.closed=new Close();


	this.Laberinto=function(cells,walls){
		this.cells=cells;
		this.walls=walls;
		this.tam=63;
		this.grid_height = 6;
    	this.grid_width = 6;
    	
		
	}
	this.dibujar=function(){
	
		for (var i =0; i<this.cells.length; i++) {
			cells[i].dibujar();
		}
		for (var i =0; i<walls.length; i++) {
			walls[i].dibujar();
		}

		fill(0,255,255);
		stroke(0);
		rect(this.goal.x*this.tam,this.goal.y*this.tam,this.tam,this.tam);
		
	}
	this.getAdjacentCells=function(cell){
		var adjCells=[];

		if(cell.x < this.grid_width-1){
			adjCells.push(this.get_cell(cell.x+1, cell.y));
		}
		if(cell.y > 0){
			adjCells.push(this.get_cell(cell.x, cell.y-1));
		}
		if(cell.x > 0){
			adjCells.push(this.get_cell(cell.x-1, cell.y));
		}
		if(cell.y < this.grid_height-1){
			adjCells.push(this.get_cell(cell.x, cell.y+1));
		}

        return adjCells;

	}

	this.get_cell=function(x,y){
		return this.cells[x*this.grid_height+y];
	}

	this.get_heuristic=function(cell){

		return 10 * (abs(cell.x - this.goal.x) + abs(cell.y - this.goal.y));
	}

	
	this.a_star=function(){
		var path=[];
		this.open.pPush(this.start);
		while(this.open.isEmpty()!=true){
			var temp=this.open.pPop();
			if(temp==-1){
				
				break;
			}else{
				console.log(temp);
				this.closed.add(temp);

				if (temp.x==this.goal.x && temp.y==this.goal.x){
					path.push(temp);	
					break;
				}else{
					var adjs=this.getAdjacentCells(temp);
							
					for(var i=0;i<adjs.length;i++){
						if(adjs[i].reachable==true && this.closed.isContain(adjs[i])==false){
							if(this.open.isContain(adjs[i])==false){
								this.updateCell(adjs[i],temp);
								this.open.pPush(adjs[i]);
							}else{
								if(adjs[i].g>temp.g+10){
									
									this.updateCell(adjs[i],temp);
								}
							}
						}
					}
				}
				
			}

			
			path.push(temp);
		}	

		return path;
	}

	this.updateCell=function(adj,cell){
		adj.g=cell.g + 10;
		adj.h = this.get_heuristic(adj);
        adj.parent = cell;
        adj.f = adj.h + adj.g;

	}

	this.compare=function(cell1, cell2){
		if (cell1.f < cell2.f){
            return -1
		}
        else{
        	if (cell1.f > cell2.f){
            	return 1
        	}

        } 
        return 0
	}

	
	
}

