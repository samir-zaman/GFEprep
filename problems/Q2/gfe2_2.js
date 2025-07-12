//Reduce attempt 2 - largely successful, fails sparse array/empty array/no init value test cases

Array.prototype.myReduce = function (callbackFn, initialValue) {
    let acc = initialValue === undefined ? this[0] : initialValue;
    let i = initialValue === undefined ? 1 : 0;
  
    for (i; i < this.length; i++) {
      acc = callbackFn(acc, this[i], i, this);
    }
  
    return acc;
  };