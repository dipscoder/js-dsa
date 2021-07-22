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