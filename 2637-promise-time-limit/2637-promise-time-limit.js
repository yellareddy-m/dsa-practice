/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // ONE WAY
        
        // return new Promise((resolve, reject) => {
        // after the promise resolves or rejects we cannot re-reject or re-resolve 
        // so even if ou dont clear the timeout it will the same way
        //     const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t)
        //     fn(...args)
        //         .then((response) => resolve(response))
        //         .catch((error) => reject(error))
        //         .finally(() => clearTimeout(timeoutId))
        // })
        
        // USING AWAIT
        return new Promise(async (resolve, reject) => {
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
            try {
                resolve(await fn(...args));
            } catch (err) {
                reject(err)
            }
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */