function PQueue(cell){
	
	this.cell=cell;
	this.elements=[];

	this.index=0;


	this.Pqueue=function(){
	
	}


	this.pPush=function(cell){
		this.elements.push(cell);
	}

	this.pPop=function(){
		var tempElements=this.selection();

		if(tempElements.length-1==0){
			return tempElements.pop();
		}else{

			if(this.isEmpty()){
				return -1;
			}else{
				return tempElements.pop();
			}
		}
		
		
		
	}

	this.isEmpty=function(){
		if (this.elements.length == 0){
			return true;
		}else{
			return false;
		}
	}

	this.isContain=function(cell){
		for(var i=0;i<this.elements.length;i++){
			if(cell.x==this.elements[i].x && cell.y==this.elements[i].y){
				return true;
			}
		}
		return false;
	}

	this.selection=function(){
		var temp=new Cell();
		for(var i=0;i<this.elements.length;i++){
			var mip=i;
			for(var j=j+1;j<this.elements.length;j++){
				if(elements[j].f < elements[mip].f){
					mip=j;
				}
			}
			temp=this.elements[i];
			this.elements[i]=this.elements[mip];
			this.elements[mip]=temp;
		}
		return this.elements;
	}
}