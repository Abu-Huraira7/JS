// Dates  is an object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

//  let mycreateDate=new Date("04-20-2023")
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2023")

//  console.log(myCreatedDate.toLocaleString());

 let myTimeStamp= Date.now()

//  console.log(myTimeStamp); // miliSecond

//  console.log(myCreatedDate.getTime());

//  console.log(Math.floor(Date.now()/1000)); convert into miliSeconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+3);
console.log(newDate.getDay()); //day start from Monday tuesday wednesday thursday etc

// console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`)

console.log(newDate.toLocaleDateString("default",{
    weekday:"long",
}))






