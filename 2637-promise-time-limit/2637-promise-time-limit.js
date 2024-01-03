/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // ONE WAY
        
        return new Promise((resolve, reject) => {
        // after the promise resolves or rejects we cannot re-reject or re-resolve 
        // so even if ou dont clear the timeout it will the same way
        // you can test this by commenting out the finally block 
        // this wont make any difference.
            // but always clear the timeout to prevent memory LEAKS
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t)
            fn(...args)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
                .finally(() => clearTimeout(timeoutId))
        })
        
        // USING AWAIT
        // return new Promise(async (resolve, reject) => {
        //     const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
        //     try {
        //         resolve(await fn(...args));
        //     } catch (err) {
        //         reject(err)
        //     }
        // });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */