// array is a object
// collection of multiple items under a single variables 
// Javascript arrays are resizeable, mix of dataTypes (array in array)
// array elements cannot be accessed using arbitrary strings as indexes
// JavaScript array-copy-operations create shallow copies
// JavaScript object-create shallow copies rather than deep copies

// Shallow copy of an object is a copy whose properties share the same references
// Deep copy of an object is a copy whose properties do not share the same reference 



// const myArr=[0,1,2,3,4,5,true, "multiple"] //elements in array maybe different types

const myArr=[0,1,2,3,4,5]

const myHeros=["Abu Baker RA", "Umar RA", "Usman RA", "Ali RA"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);



// Array methods ++++++++++++++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //remove the last element in the array

// myArr.unshift(9) //push value at Start
// myArr.shift() //pop value at start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr=myArr.join() // add all the elements of an array into a single string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice


console.log("A ", myArr);

const myn1 =myArr.slice(1,3) // returns a copy of a section of an array

console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);



