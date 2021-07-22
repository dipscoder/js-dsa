
// factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1.

// Itarative solution
function itrFac(num) {
    let result = 1
    for(let i=num;i>=1;i--){
        result *= i
    }
    return result
}

// Recursive approach
function reFac(num) {
    // Base case
    if(num <= 1) return 1

    return num * reFac(num-1)
}


console.log(itrFac(5))
console.log(reFac(5))