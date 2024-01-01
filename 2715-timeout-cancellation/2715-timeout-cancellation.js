/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// var cancellable = function(fn, args, t) {
//     const timeoutId = setTimeout(() => fn(...args), t);
//     return function() {
//         clearTimeout(timeoutId);
//     }
// };

var cancellable = function(fn, args, t) {
    let isCancelled = false;
    setTimeout(() => {
        if (!isCancelled) {
            fn(...args)
         }
    }, t);
    return function() {
        isCancelled = true;
    }
};

// One limitation is that setTimeout is not precise and can be affected by other factors like system load. If precise timing is required, alternative methods like Web Workers or the Web Animation API are used in some cases but they serve different purposes and cannot always be used as direct substitutes for setTimeout.
// A more precise timing control could be achieved using the performance.now() method, which provides timestamps with a sub-millisecond resolution for measurements, but it still wouldn't be able to guarantee that a function will run exactly after a specified delay due to the single-threaded nature of JavaScript.



// const result = [];

// const fn = (x) => x * 5;
// const args = [2], t = 20, cancelTimeMs = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});
// }
     
// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);
         
// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//     console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15)
 