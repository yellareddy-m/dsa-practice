/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (isNaN(token)) {
            const first = parseInt(stack.pop(), 10);
            const second = parseInt(stack.pop(), 10);
            if (token === "+") {
                stack.push(second + first);
            } else if (token === "-") {
                stack.push(second - first);
            } else if (token === "*") {
                stack.push(second * first);
            } else if (token === "/") {
                let result = (second / first);
                stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
            }
        } else {
            stack.push(token);
        }
    }
    return stack.pop();
};