// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function uniqueVal1(arr) {
    if (arr.length <= 0) return 0
    let p1 = 0;
    let p2 = 0;
    let count = 1;
    // condition loop
    while (p2 < arr.length) {
        if (arr[p1] !== arr[p2]) {
            count++;
            p1 = p2;
        } else {
            p2++;
        }
    }
    return count;
}

// If we are allowed to alter the array
// Better space complexity
// Time Complexity - O(n)
// Space Complexity - O(n)
function uniqueVal(arr) {
    if (arr.length <= 0) return 0
    let p1 = 0;
    let p2 = 0;
    // condition loop
    while (p2 < arr.length) {
        if (arr[p1] !== arr[p2]) {
            p1++;
            arr[p1] = arr[p2];
            p2++;
            console.log(arr)
        } else {
            p2++;
        }
    }
    return (p1+1);
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function countUniqueValuesWithOnePointer(arr) {
    if (!arr.length) return 0;
    let counter = 1;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) counter++;
    }
  
    return counter;
}

console.log(uniqueVal([1,1,1,1,2,2]));

//                 i
// [-1,2,22,23,5,6,99,6,99]
//                      j