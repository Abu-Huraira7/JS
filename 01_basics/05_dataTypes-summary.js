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