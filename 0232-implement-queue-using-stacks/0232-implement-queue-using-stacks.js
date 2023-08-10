var MyStack = function() {
    this.arr = [];
    this.top = null;
    this.push = function(value){
        this.arr.push(value);
        this.top = value;
    }
    this.pop = function() {
        if (this.size() > 0) {
            const val = this.arr.pop();
            if (this.arr.length === 0) {
                this.top = null;    
            } else {
                this.top = this.arr[this.size() - 1];
            }
            return val;
        }
        return null;
    }
    this.size = function() {
        return this.arr.length;
    }
    this.getTop = function() {
        return this.top;
    }
}


var MyQueue = function() {
    this.mainStack = new MyStack();
    this.tempStack = new MyStack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.mainStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.tempStack.size() === 0) {
        while(this.mainStack.size()) {
            this.tempStack.push(this.mainStack.pop());
        }
        return this.tempStack.pop();
    }
    return this.tempStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.tempStack.size() === 0) {
        while(this.mainStack.size()) {
            this.tempStack.push(this.mainStack.pop());
        }
        return this.tempStack.getTop();
    }
    return this.tempStack.getTop();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !(this.tempStack.size() || this.mainStack.size());
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */