// logical operator (And, Or)
// if

// const isLoggedIn = true

// const temperature = 41
// if (temperature===41){
// console.log("Less Than 50");
// }else
// {
// console.log("Temperature grater than 50");}

//3! = 2
// <, >, <=, >=, ==, !=, ===, !==

//+++++++++++++++++++++++++++++++++++++++++++++

// const score = 200
// if(score>100){
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }

//++++++++++++++++++++++++++++++++++++++++++++++

// const balance = 100
// if (balance > 500)console.log("test");

//++++++++++++++++++++++++++++++++++++++++++++++

// const balance = 500
// if(balance < 500){
//     console.log("Less Than");
// }
// else if(balance < 750){
//     console.log("long thant 500");
// }
// else if(balance < 900){
//     console.log("less than 1200");
// }


//++++++++++++++++++++++++++++++++++++++++++++++

const isLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(isLoggedIn && debitCard && 2==2){ // AND
  console.log("Allow to buy course");  
}
else{
    console.log("Please fulfill all required fields");
}

if(loggedInFromGoogle || loggedInFromEmail){ // OR
    console.log("User Logged in");
}