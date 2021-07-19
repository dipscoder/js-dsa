// Problem :- Write a function which takes a string and returns count of each character in the string.

// 1.Understand the problem
// Can I restate the problem in my own words?
// - check how many time a unique character is appeared int the string

// What are the inputs that go into the problems?
// - alpha, alphanum, num, spacial character, empty
// What are the outputs that should come from the solution to the problem?
// - an object that consist of character count
// Can the outputs be determined fro, the inputs? In other words, do I have enougn information to solve the problem? (You may not be able to answer this question untill you set about solving the problem. Thats okay; its still worth considering the question at this early stage.)
// -
// How should I lable the important pieces of data that are a part of the problem?
// - getCont, result, str

// 2. Explore Concrete Examples
// Start with Simple Examples
// - 'helo' => {h:1,e:1,l:1,o:1}
// Progress to more Conplex Examples
// - 'Hello hi2!' => {h:2,e:1,l:2,o:1,i:1,2:1}
// Explore examples with Empty inputs
// - '' => {}
// Explore examples with Invalid inputs
// - Let's consider in this case there is no invalid input

// 3. Break it down
// Explicitly write out the steps you need to take

function getCount3(str) {
  // create an empty obj
  // Loop through string
  // If char is alphanumeric AND already in the obj then increament count
  // If char is alphanumeric AND not present in the obj then add it to obj & set value to 1
  // If char is not alphanumeric the ignore
  // return obj with char count
}

// 4. Solve The Problem 'if you can't' Solve A Simpler Problem
// - Lets assume I don't know to check alphanum then ignore it for sometime
function getCount4(str) {
  // create an empty obj
  let result = {};
  // Loop through string
  for (let i = 0; i < str.length; i++) {
    // Lower the string
    char = str[i].toLowerCase();
    // If char is alphanumeric AND already in the obj then increament count
    if (result[char] > 0) {
      result[char]++;
    }
    // If char is alphanumeric AND not present in the obj then add it to obj & set value to 1
    else {
      result[char] = 1;
    }
  }
  // If char is not alphanumeric the ignore
  // return obj with char count
  return result;
  // For "Hello hi!"
  // { h: 2, e: 1, l: 2, o: 1, ' ': 1, i: 1, '!': 1 }
}

// 5. Recap and Refactor
// Original Solution
function getCount0(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

// After Refactoring
// - Using forOf loop instead of for
// - Using ternary oparator instead of if-else
// - Regex can not be much efficient so using char code

function getCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(getCount("Hello hi @## tHere **%^&  8255!"));
// result - { '2': 1, '5': 2, '8': 1, h: 3, e: 3, l: 2, o: 1, i: 1, t: 1, r: 1 }
