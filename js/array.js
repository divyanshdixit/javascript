Array.prototype.xyz = function(){
    var arr =[];
    for(i=0;i<this.length;i++){
       arr[i] = this[i].toUpperCase();
    }
    return arr; // [JS, REACT]
}

var str = ['js', 'react', 'node']

var res = str.xyz()
console.log(str)