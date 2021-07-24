// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

// My method
function nestedEvenSum(obj) {
  let result = 0;
  let a = Object.values(obj); //returns arrays of values
  // console.log(a)
  if (a.length === 0) return 0;

  for (let i = 0; i < a.length; i++) {
    // console.log(result)
    if (typeof a[i] === "number" && a[i] % 2 === 0) result = result + a[i];
    if (typeof a[i] === "object") result = result + nestedEvenSum(a[i]);
  }
  return result;
}

// Second method
function nestedEvenSum1(obj) {
  let sum = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
      if (typeof obj[key] === "object") sum += nestedEvenSum1(obj[key]);
    }
  }

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 12
