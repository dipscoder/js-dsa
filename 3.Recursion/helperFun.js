// Return an array of odd numbers from the give array

// With Helper Function
function main(arr) {

    let result = []

    function helper(a){
        if(a.length === 0) return
        if(a[0] % 2 !== 0) result.push(a[0])

        helper(a.slice(1))
    }

    helper(arr)
    return result
}

console.log(main([1,2,3,4,5,6]))
console.log(main([]))


// With Pure recursion
function pure(a) {
    let result = []
    if(a.length === 0) return result

    if(a[0] % 2 !== 0) result.push(a[0])

    result = result.concat(pure(a.slice(1)))    // remember concate [] + [5] = [5]

    return result

}

console.log(pure([1,2,3,4,5,6]))
console.log(pure([]))