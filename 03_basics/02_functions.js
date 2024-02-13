
// function calculateCartPrice(...num1)// ... rest Operator //for multiple parameters
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(7,200,300,500));

const user = {
    username: "Abu Huraira",
    id: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.id}`);
}
// handleObject(user)

handleObject({
    username:"Sam",    // you can pass direct object
    id:"99"
})


//+++++++++++++++++++++++++++++++++++++++

const myArr = [100,200,300.400]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200,300,400,500])); //you can pass direct array
