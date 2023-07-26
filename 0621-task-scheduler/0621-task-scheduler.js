/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let taskFrequencies = new Map();
    let maxFreq = 0, tasksWithMaxFreq = 0;
    const totalTasks = tasks.length;
    tasks.forEach(task => {
        taskFrequencies.set(task, (taskFrequencies.get(task) || 0) + 1);
        const currentFreq = taskFrequencies.get(task);
        if (maxFreq < currentFreq) {
            maxFreq = currentFreq;
            tasksWithMaxFreq = 1;
        } else if (maxFreq === currentFreq) {
            tasksWithMaxFreq++;
        }
    });
    
    const totalSlots = (maxFreq - 1) * (n + 1) + tasksWithMaxFreq;
    let remainingTasks = totalTasks - maxFreq * tasksWithMaxFreq;
    let emptySlots = totalSlots - (maxFreq * tasksWithMaxFreq);
    emptySlots = Math.max(emptySlots - remainingTasks, 0);
    return totalTasks + emptySlots;
};