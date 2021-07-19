
// Problem - Find a pair whose sum is 0

// Naive Approach TC- O(n2) SC - O(1)
function sum_zero_naive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactored Approach TC- O(n) SC - O(1)
function sum_zero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // console.log([arr[left] , arr[right]])
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(sum_zero([-3, -2, -1, 0,2, 4, 5, 6]));
