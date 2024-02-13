
function sayMyName(){
console.log("H");
console.log("U");
console.log("R");
console.log("A");
console.log("I");
console.log("R");
console.log("A");
}
// sayMyName()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers(number1, number2){  //parameters declares as a function input/or function definition
//     console.log(number1 + number2);
// }
// addTwoNumbers(6,7)  //arguments declares as a function output

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2){

    // let result= number1+number2
    // return result
    
    return number1 + number2 

    // console.log("Huraira"); //after return no function will execute
}

const result = addTwoNumbers(3,5)// or jb ap return krtay hn tab ap variable me value declare krtay hn direct console nai krty

// console.log("Result: ", result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(username)
// function loginUserMessage(username="Sam")
{
    // if(username === undefined)

    if(!username){ // reverse of username
        console.log("Please enter a username");
        return
    }
    return `${username} Just Logged in`
}

console.log(loginUserMessage(""));


