// Merge Intervals: 
// Given an array of intervals, 
// merge overlapping intervals and return the resulting merged intervals. 
// For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], 
// the function should return [[1,6],[8,10],[15,18]].

// // Solution 
// * Sort the intervals based on the start of each interval.
            // array.sort((a, b) => a[0] - b[0]);

// * Initialize an empty result array to store the merged intervals.
            // const result = [array[0]];

// * Iterate through the sorted intervals.
            // for (let i = 1; i < intervals.length; i++) {

// * For each interval, compare it with the last merged interval in the result array. 
            // const currentInterval = intervals[i];
            // const lastMergedInterval = result[result.length - 1];
// If there is an overlap, 
            // if (currentInterval[0] <= lastMergedInterval[1]) {
// merge the intervals by updating the end of the last merged interval.
            // lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
// * If there is no overlap, 
            // else {
// add the current interval to the result array as a new merged interval.
            //  result.push(currentInterval);
// * After the iteration is complete, the result array will contain the merged intervals.

const array = [[1,3],[2,6],[8,10],[15,18]];

function mergeIntervals(arr) {
    
}
console.log(mergeIntervals(array));