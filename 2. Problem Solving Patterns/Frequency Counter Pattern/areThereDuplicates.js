// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
    // console.log(args)   //[ 'a', 'b', 'c', 'a' ]
    // console.log(...args)    //a b c a
    // console.log(arguments)  // [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'a' }

    // base case
    if(args.length === 0 || args.length === 1) return false

    // create obj
    let freqObj = {}
    // loop
    for (const key of args) {

        if(freqObj[key]) return true
        freqObj[key] = 1
    }
    
    return false
}


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicates()); // false