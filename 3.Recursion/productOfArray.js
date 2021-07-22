// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(a){
    // base case
    if(a.length === 0) return 1

    return a[0] * productOfArray(a.slice(1))
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3,5,10])); // 300
console.log(productOfArray([1, 2, 3, 10])); // 60