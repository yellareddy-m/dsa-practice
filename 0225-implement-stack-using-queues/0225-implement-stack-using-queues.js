var MyQueue = function() {
    this.arr = [];
    this.push = function(value) {
        this.arr.push(value);
    }
    this.pop = function() {
        return this.arr.shift();
    }
    this.empty = function() {
        return this.arr.length === 0;
    }
    this.peek = function() {
        return this.arr[0];
    }
    this.size = function() {
        return this.arr.length;
    }
}

var MyStack = function() {
    this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    let size = this.queue.size();
    // here queue.pop actually pops from the first
    // so we need this first , 
    while(size > 1) {
        this.queue.push(this.queue.pop());
        size--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.empty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */