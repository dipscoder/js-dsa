// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(a) {
    let result = []
    if(a.length === 0) return result

    result.push(a[0][0].toUpperCase() + a[0].slice(1))  // result.push( C + ar = "Car" )
    result = result.concat(capitalizeFirst(a.slice(1)))
    return result
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
