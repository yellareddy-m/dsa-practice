/**
 * @param {string} s
 * @return {boolean}
 */

var MyStack = function() {
    this.arr = [];
    this.top = null;
    this.push = function(value) {
        this.arr.push(value);
        this.top = value;
    }
    this.pop = function() {
        if (this.size() > 0) {
            const value = this.arr.pop();
            this.top = this.arr[this.size() - 1] || null;
            return value;
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
var isValid = function(s) {
    var stack = new MyStack();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if((char === '}' && top !== '{') || (char === ']' && top !== '[') || (char === ')' && top !== '(' )) {
                return false;
            }
        }
    }
    // if stack still has chars that means some braces are not matched
    if (stack.size() > 0) {
        return false;
    }
    return true;
};








