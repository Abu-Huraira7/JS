// there are two ways to declare an object one as a Literal(Single Nahi bnay ga) and as a Constructor(Singleton banay ga)
// Singleton => Single Object
// Object.create 
//Objects provides multipe keys or data to access the data

const mySym=Symbol("Key1")


//Literals
const jsUser={
    name:"Huraira",
    "Full Name":"Abu Huraira",
    age:18,
    [mySym]:"mykey1",//to define Symbol we use [] brackets
    Location:"Lahore",
    email:"huraira@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]
}

console.log(jsUser.email);
// console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym]);

jsUser.email="hurairaprince889@gmail.com"//with the help of = we can override the value of object
// Object.freeze(jsUser)// lock the Object(no one can override in this)
jsUser.email="username@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpulation ` `
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());