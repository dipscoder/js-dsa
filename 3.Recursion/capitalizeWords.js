// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(a) {
  let result = [];
  if (a.length === 0) return result;

  result.push(a[0].toUpperCase());

  result = result.concat(capitalizeWords(a.slice(1)));

  return result;

  //   OR
  //   return [...result, ...capitalizeWords(a.slice(1))];
}

const words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
