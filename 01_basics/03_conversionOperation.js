// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Huraira"

console.log(typeof score)
console.log(typeof(score)) //method

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 / false => 0

let isLoggedIn = "Huraira"

let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)


// 1 => true; 0 => false
// "" => false
// "Huraira" => true


let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)


// ***************************** Operations ****************************

let value = 3
let negValue = -value
// console.log(negValue)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2) //=> 2 ki power 2
//console.log(2/2)
//console.log(5%2) //=> remainder

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
console.log(+ "")

let num1, num2, num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++  // prefix and postfix
console.log(gameCounter)
