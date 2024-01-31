const name ="Huraira"
const repCount = 50

//console.log(name + repCount) //==> outdated syntax

// console.log(`My name is ${name} and my repo is ${repCount}`)

const gameName = new String("Huraira-ah-com") //back-ticks syntax

// console.log(gameName[0]) //value Pair
// console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))

console.log(gameName.indexOf("r"))

const newString = gameName.substring(0, 4) //we don't gave it -ve value
console.log(newString)

const anotherString = gameName.slice(-8,4) // we can gave it -ve value
console.log(anotherString);

const newStringOne="       Huraira    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://ahdigital.com/huraira%20digital"
console.log(url.replace("%20","-"))


console.log(url.includes("huraira"))

console.log(gameName.split("-"));

