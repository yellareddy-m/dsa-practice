
var MinStack = function() {
    // this.minStack = [];
    // this.mainStack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // this.mainStack.push(val);
    // if (val <= this.minStack[this.minStack.length - 1] || this.minStack.length === 0) {
    //     this.minStack.push(val);
    // }
    const min = this.stack.length > 0 ? Math.min(val, this.stack[this.stack.length - 1].min) : val;
    this.stack.push({val, min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // const value = this.mainStack.pop();
    // if (value === this.minStack[this.minStack.length - 1]) {
    //     this.minStack.pop();
    // }
    // return value;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.mainStack[this.mainStack.length - 1];
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // return this.minStack[this.minStack.length - 1];
    return this.stack[this.stack.length - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */