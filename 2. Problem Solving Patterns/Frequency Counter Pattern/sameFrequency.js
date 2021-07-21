// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
  // Convert num to string
  let str1 = num1.toString();
  let str2 = num2.toString();
  // base case
  if (str1.length !== str2.length) return false;
  // Create an obj
  let freqObj = {};
  // collect frequency for num1 and store it in obj
  for (let key of str1) {
    freqObj[key] = freqObj[key] + 1 || 1;
  }
  // check if key of obj is present in num2 then decrease its value by 1
  for (const key of str2) {
    if (!freqObj[key]) return false;
    freqObj[key]--;
  }
  // return true or false
  return true;
}

// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(455,66)); // false
console.log(sameFrequency(3589578, 5879385)); // true
