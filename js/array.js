Array.prototype.makeUpperCase = function(){
    
    for(i=0;i<this.length;i++){
        this[i] = this[i].toUpperCase();
    }
    return this;
}