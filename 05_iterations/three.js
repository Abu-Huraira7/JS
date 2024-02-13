// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

//+++++++++++++++++++++++++++++++++++++++///

const greetings = "Hello world"

for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

//+++++++++++++++++++++++++++++++++++++++///

// Maps
// maps is an object
// values in map are unique and the order is same

const map = new Map()
map.set("PAK", "PAKISTAN")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
map.set("PAK", "PAKISTAN")

// console.log(map);

for(const [key, value] of map){
// console.log(key, ':-', value);
}

//+++++++++++++++++++++++++++++++++++++++///
//for object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const key of myObject) {
//     console.log(key);
// }

