function Close(){
    this.elemts=[];
    this.add=function(cell){
        if(this.isContain(cell)==false){
            this.elemts.push(cell);
        }
       
    }

    this.isContain=function(cell){
        var con=false;
        for(var i=0;i<this.elemts.length;i++){
            if(cell.x==this.elemts[i].x && cell.y==this.elemts[i].y){
                con= true;
                break;
            }
        }

        return con;
    }
}