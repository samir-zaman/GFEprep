//Reduce attempt 3 - passed most tests except sparse arrays

Array.prototype.myReduce = function (callbackFn, initialValue) {
    let acc = initialValue === undefined ? this[0] : initialValue;
    let i = initialValue === undefined ? 1 : 0;

    if (initialValue === undefined && this.length === 0) {
        throw new TypeError
      }
  
    for (i; i < this.length; i++) {
      acc = callbackFn(acc, this[i], i, this);
    }
    return acc;
};