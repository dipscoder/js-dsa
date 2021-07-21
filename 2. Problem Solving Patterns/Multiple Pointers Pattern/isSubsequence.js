// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence1(str1, str2) {
  // base case
  if (str1.length > str2.length) return false;
  let ptr = 0;

  for (let i = 0; i < str2.length; i++) {
    if (ptr === str1.length) return true;
    if (str2[i] === str1[ptr]) {
      ptr++;
    }
  }
  return ptr === str1.length;
}

// While loop - better

function isSubsequence(s, t) {
  // base case
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    // if(i === s.length) return true
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true
