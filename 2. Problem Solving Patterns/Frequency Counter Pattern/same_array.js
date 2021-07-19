// Problem - WAF called same, which accepts two arrays.
// The fun should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.
// Examples:-
// [1,2,3] & [4,9,1] =>  true
// [1,2,3] & [4,9] =>  false
// [1,2,1] & [4,4,1] =>  false (frequency must be same)

// Naive approach O(n^2)
function same_naive(arr1, arr2) {
  // base condition
  if (arr1.length !== arr2.length) return false;
  // for loop
  for (const element of arr1) {
    // if square of element present in arr2
    let correctIndex = arr2.indexOf(element ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // if matched then remove that element from array
    console.log(arr2);
    arr2.splice(correctIndex, 1); // remove element
  }
  return true;
}

// Refactored O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyObj1 = {};
  let frequencyObj2 = {};

  for (const key of arr1) {
    frequencyObj1[key] = (frequencyObj1[key] || 0) + 1;
  }

  for (const key of arr2) {
    frequencyObj2[key] = (frequencyObj2[key] || 0) + 1;
  }
  console.log(frequencyObj1);
  console.log(frequencyObj2);
  for (const key in frequencyObj1) {
    // Check if square of key exist in Obj2
    if (!(key ** 2 in frequencyObj2)) return false;

    // Check if key of obj1 and key^2 of obj2 has same value
    if (!(frequencyObj1[key] === frequencyObj2[key ** 2])) return false;
  }

  return true;
}

// Result
// { '1': 1, '2': 2, '4': 1 }
// { '1': 1, '4': 2, '16': 1 }
// true

console.log(same([1, 2, 2, 4], [4, 16, 1, 4]));
