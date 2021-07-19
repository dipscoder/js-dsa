// Sliding Window - maxSubarraySum
//Problem - Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Naive Approach
function maxSubarraySum(arr,num) {
    if (arr.length === 0 || arr.length < num) return null

    let maxSum = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let tempSum = 0
        for(let j = 0; j < num; j++){
            tempSum += (arr[i+j])      
        }
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}



function maxSubarraySum(arr, num) {
    if (arr.length === 0 || arr.length < num) return null

    let maxSum = -Infinity
    let tempSum = 0
    for(let i = 0; i<num;i++){
        tempSum += arr[i]
    }
    let maxSum = tempSum;
    for(let j = num; j < arr.length; j++){
        tempSum = tempSum - arr[j-num] + arr[j]
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}









// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
// console.log(maxSubarraySum([], 3)); // null