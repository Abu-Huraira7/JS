// This => current context ko refer krta h
// browser k andr global object window object h

const user = {
    username:"Huraira",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to webssite`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);



//+++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     let username = "Huraira" // undefined
//     console.log(this.username);
// }
// chai()


//+++++++++++++++++++++++++++++++++++++++++++++++

// const chai = function(){
//     let username = "Huraira" // also undefined
//     console.log(this.username);
// }
// chai()

//+++++++++++++++++++++++++++++++++++++++++++++++

// const chai = () => {  // arrow function
//     let username = "Huraira"
//     console.log(this.username);
// }
// chai()

// +++++++++++++++++++++++++++++++++++++++++++++

const addTwo = (num1, numb2) => {
    return num1 + numb2
}
// console.log(addTwo(6,7));

//+++++++++++++++++++++++++++++++++++++++++++++
// Explicit return jb ap return keyword use krty hn
// Implicit return (arrow function)
// curly braces me wrap kro gy to return keyword likhna pray ga
// or agr paranthesis me bnd kia to return keyword nai likhn paray ga

// const addNum =(num1, numb2) => num1 + numb2

// const addNum = (num1, numb2) => (num1 + numb2) // is ka benefit hota he jb ap ne object return krna ho 

const addNum = (num1, numb2) => ({username: "huraira"})
console.log(addNum(4,7));



