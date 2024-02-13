// There are two types of Data types =>  Primitive and Non Primitive (that how data stored in memory and accessed)

// Primitive (Call by value dataType)

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id= Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId)


// const bigNumber=3212343134413341334n


// Non Primitve (Reference Type dataType)

// Array, objects, Functions

const heros= ["shaktiman", "naagraj", "doga"]

//Object
let myObject={                            
name:"Huraira",
age: 22,
}

const myFunction=function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of memory => Stack (use in Primitive dataTypes)  jo b hum ne variables declare kiye hn uski copy milty h
// Heap(used in No Primitive dataTypes) jo jab b memory heap ke andr define hoti h Heap k andr to wahan original         reference milta h on changing it would be change in original value

//Stack Example
let user1="Hadi"
let user2=user1
user2="Abu Huraira"
console.log(user2)
console.log(user1)

//Heap Example
let userOne={
email: "user@google.com",
password:"admin@"
}

let userTwo=userOne

userTwo.email="hurairaprince889@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)

