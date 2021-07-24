// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  let newObj = Object.assign({}, obj);

  for (const key in newObj) {
    if (Object.hasOwnProperty.call(newObj, key)) {
      if (typeof newObj[key] === "number") newObj[key] = newObj[key].toString();

      if (typeof newObj[key] === "object")
        newObj[key] = stringifyNumbers(newObj[key]);
    }
  }
  return newObj;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      random2: 22,
    },
  },
};

console.log(stringifyNumbers(obj));
// {
//     num: '1',
//     test: [],
//     data: { val: '4', info: { isRight: true, random: '66', random2: '22' } }
// }
