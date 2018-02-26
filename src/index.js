  class Sorter {
    constructor() {
     // your implementation
     this.sorterArray = new Array();
     
     this.compareFunction = function(left,right) { 
       return left - right;
     }
     
     this.indicesCompareFunction = function(left,right) { 
       return left - right;
     }
   
    }
  
    add(element) {
     // your implementation
     this.sorterArray.push(element);
    }
  
    at(index) {
     // your implementation
     return this.sorterArray[index];
    }
  
    get length() {
     // your implementation
     return this.sorterArray.length;  
    }
  
   toArray() {
     // your implementation
     return this.sorterArray;
    }
  
    sort(indices) {
     // your implementation
     var lArr = [];
 
     indices.sort(this.indicesCompareFunction);
 
     for (var i = 0; i < indices.length; i++) {
       lArr.push( this.sorterArray[indices[i]] );
     }
     
     lArr.sort(this.compareFunction);
     
     for (var i = 0; i < indices.length; i++) {
       this.sorterArray.splice(indices[i], 1, lArr[i]);
     }
 
     return this.sorterArray;
    }
  
    setComparator(compareFunction) {
     // your implementation
     this.compareFunction = compareFunction;    
    }
  }


module.exports = Sorter;