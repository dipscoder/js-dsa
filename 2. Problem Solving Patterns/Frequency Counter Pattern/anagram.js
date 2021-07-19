// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }
  console.log(frequencyCounter);

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    if (!frequencyCounter[letter]) return false;

    frequencyCounter[letter]--;
  }

  return true;
}

console.log(anagram("anagram", "nagaram"));
