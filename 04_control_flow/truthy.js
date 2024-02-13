const userEmail = "h@uraira.ai" // ye maan lena k string k andr jo b he wo true h


if(userEmail){
    console.log("Got user email");
}
else{
    // console.log("Don't have user email");
}

// falsy values
// false, 0, -1, BigInt 0n, "", null, undefined, NaN
// Truthy values
// "0", "false"," ", [], {}, function(){}


//++++++++++++++++++++++++++
const userEmail1 = []
// if(userEmail1.length ===0){ // to detect ARRAY Is empty or not
//     console.log("Array is empty");
// }

//+++++++++++++++++++++++++++

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){ // to detect OBJECT is empty or not
//     console.log("Object is empty");
// }

//+++++++++++++++++++++++++++++

// false == 0 => true
// false == "" => true
// 0 == '' => true

//+++++++++++++++++++++++++++++

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 6 ?? 7
console.log(val1);

//++++++++++++++++++++

// Terinary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("more than 80");

// const iceTeaPrice1 =100
// iceTeaPrice1 <=90 ? console.log("lss thn 90"): console.log("more thn 100");