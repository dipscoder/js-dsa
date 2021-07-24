// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj){
    let a = []

    let aObj = Object.values(obj)

    for (let i = 0; i < aObj.length; i++) {
        if(typeof aObj[i] === "string") a.push(aObj[i])
        if(typeof aObj[i] === "object") a = a.concat(collectStrings(aObj[i]))
    }

    return a
}

function collectStrings2(obj){
    let a = []

    for(const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)) {
            if(typeof obj[key] === "string") a.push(obj[key])
            if(typeof obj[key] === "object") a = a.concat(collectStrings2(obj[key]))
        }
    }
    return a
}



const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
            random: 'yoo'
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // [ 'foo', 'bar', 'baz', 'yoo' ]
