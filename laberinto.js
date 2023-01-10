function Laberinto(cells, walls, start, goal) {
	this.cells = cells;
	this.walls = walls;
	this.tam = 63;
	this.grid_height = 8;
	this.grid_width = 8;
	this.start = start;
	this.goal = goal;
	this.open = [];
	this.heapQueue = new PQueue();
	this.closed = new Close();


	this.Laberinto = function (cells, walls) {
		this.cells = cells;
		this.walls = walls;
		this.tam = 63;
		this.grid_height = 8;
		this.grid_width = 8;


	}
	this.dibujar = function () {

		for (const cell of this.cells) {
			cell.dibujar();
		}
		for (const wall of walls) {
			wall.dibujar();
		}

		fill(0, 255, 255);
		stroke(0);
		rect(this.goal.x * this.tam, this.goal.y * this.tam, this.tam, this.tam);

	}
	this.getAdjacentCells = function (cell) {
		let adjCells = [];
		let cellC;

		if (cell.x < this.grid_width - 1) {
			cellC = this.get_cell(cell.x + 1, cell.y);
			if (cellC != undefined) {
				adjCells.push(cellC);
			}

		}

		if (cell.y > 0) {
			cellC = this.get_cell(cell.x, cell.y - 1);
			if (cellC != undefined) {
				adjCells.push(cellC);
			}

		}
		if (cell.x > 0) {
			cellC = this.get_cell(cell.x - 1, cell.y);
			if (cellC != undefined) {
				adjCells.push(cellC);
			}

		}
		if (cell.y < this.grid_height - 1) {
			cellC = this.get_cell(cell.x, cell.y + 1);
			if (cellC != undefined) {
				adjCells.push(cellC);
			}

		}



		return adjCells;

	}

	this.get_cell = function (x, y) {

		return this.cells[x * this.grid_height + y];

	}

	this.get_heuristic = function (cell) {

		return 2 * (abs(cell.x - this.goal.x) + abs(cell.y - this.goal.y));
	}

	this.getPath=function(){
		let path = [];
		let cell = this.goal;
        while (cell.parent != this.start){
            cell = cell.parent
            path.push(cell);
		}
		return path;
	}


	this.a_star = function () {
		let path = [];
		let cont = 0;
		this.heapQueue.headpPush(this.open, this.start)
		while (this.open.length) {
			let temp = this.heapQueue.heappop(this.open);

			this.closed.add(temp);

			if (temp.x == this.goal.x && temp.y == this.goal.x) {
				this.goal.parent=temp.parent;
				path=this.getPath()
				break;
			} else {
				let adjs = this.getAdjacentCells(temp);
				for (const adj of adjs) {
					if (adj.reachable && !this.closed.isContain(adj)) {
						if (this.open.find(cell=>cell.x==adj.x && adj.y==cell.y)) {
							if (adj.g > temp.g + 10) {

								this.updateCell(adj, temp);
								
							}
							
						} else {
							this.updateCell(adj, temp);
							cont++;
							this.heapQueue.headpPush(this.open,adj);
						}
					}
				}
			}
			
		}

		return path.reverse();
	}

	this.updateCell = function (adj, cell) {
		
		adj.h = this.get_heuristic(adj);
		adj.parent = cell;
		adj.f = adj.h;

	}

	this.compare = function (cell1, cell2) {
		if (cell1.f < cell2.f) {
			return -1
		}
		else {
			if (cell1.f > cell2.f) {
				return 1
			}

		}
		return 0;
	}



}

