// const tinderUser= new Object() // singleton object

// non singleton object
const tinderUser = {} 

tinderUser.id= "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Huraira",
            lastName:"Imtiaz"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // use {} so that it behave like target and other like a source
// return target == target

const obj3 = {...obj1, ...obj2, ...obj4}  //Spread

// console.log(obj3);


const user = [
    {
        id: 1,
        email: "Huraiar@gmail.com"
    },
    {
        id: 2,
        email: "Prince@gmail.com"
    }
]
console.log(user[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // error se bachnay k liye hum pooch letay Hn







