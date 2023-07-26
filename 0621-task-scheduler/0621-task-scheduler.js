/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
//     let taskFrequencies = new Map();
//     let maxFreq = 0, tasksWithMaxFreq = 0;
//     const totalTasks = tasks.length;
//     tasks.forEach(task => {
//         taskFrequencies.set(task, (taskFrequencies.get(task) || 0) + 1);
//         const currentFreq = taskFrequencies.get(task);
//         if (maxFreq < currentFreq) {
//             maxFreq = currentFreq;
//             tasksWithMaxFreq = 1;
//         } else if (maxFreq === currentFreq) {
//             tasksWithMaxFreq++;
//         }
//     });
    
//     const totalSlots = (maxFreq - 1) * (n + 1) + tasksWithMaxFreq;
//     let remainingTasks = totalTasks - maxFreq * tasksWithMaxFreq;
//     let emptySlots = totalSlots - (maxFreq * tasksWithMaxFreq);
//     emptySlots = Math.max(emptySlots - remainingTasks, 0);
//     return totalTasks + emptySlots;
    
    let taskFrequencies = new Map();
    let maxFreq = 0, maxFreqTask;
    
    tasks.forEach(task => {
        taskFrequencies.set(task, (taskFrequencies.get(task) || 0) + 1);
        if (maxFreq <taskFrequencies.get(task)) {
            maxFreq = taskFrequencies.get(task);
            maxFreqTask = task;
        }
    });
    // empty time slots between maxFreq tasks  
    // a,b,a,c,a n = 3   //   a---a---a , idleTime = 6;
    let idleTime = (maxFreq -1) * n;
    taskFrequencies.delete(maxFreqTask);
    // max freq task is done , place other tasks in the idleTime
    // if you dont want to delete maxTask 
    // idleTime = (maxFreq - 1) * n + maxFreq - 1;
    for (const [task, freq] of taskFrequencies) {
        idleTime = idleTime - Math.min(maxFreq - 1, freq);
    }
    idleTime = Math.max(idleTime, 0);
    return tasks.length + idleTime;
};