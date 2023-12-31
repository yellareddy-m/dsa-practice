/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheObj = {};
    return function(...args) {
        const argsString = JSON.stringify(args);
        if (!cacheObj.hasOwnProperty(argsString)) {
            cacheObj[argsString] = fn(...args);
        }
        return cacheObj[argsString];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */