//Reduce attempt 1 - unsuccessful

Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (this.length === 0) {throw new TypeError ('cannot reduce empty array')};
  
    let acc = initialValue;
    
    for (let i = 0; i < this.length; i++) {
      acc = callbackFn(acc, this[i], i, this);
    }
  
    return acc;
  };