
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        // if node is already there then this will point node 
        // to the current character in the root 
        node = node[char];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let char of word) {
        if (node[char]) {
            node = node[char];
        } else {
            return false;
        }
    }
    return node && node.isWord === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (node[char]) {
            node = node[char];
        } else {
            return false;
        }
    }
    // if we end char then the prefix is present
    return node !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */