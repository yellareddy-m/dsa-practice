/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Map();
    for (let edge of edges) {
        let [a, b] = edge;
        if (!graph.has(a)) {
            graph.set(a, []);
        }
        if (!graph.has(b)) {
            graph.set(b, [])    
        }
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    
    let stack  = [];
    let visited = [];
    stack.push(source);
    visited[source] = true;
    
    while(stack.length > 0) {
        const node = stack.pop();
        if (node === destination) {
            return true;
        }
        for(let neighbour of graph.get(node)) {
            if(!visited[neighbour]) {
               stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
    
    return false;
};

