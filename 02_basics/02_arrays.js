const marvel=["thor", "Ironman", "spiderman"]
const DC= ["superman", "flash", "batman"]

// marvel.push(DC)

// console.log(marvel);
// console.log(marvel[3][2]);

// const allHero=marvel.concat(DC) // merge arrays and return new array
// console.log(allHero);

const allNewHere=[...marvel, ...DC] //Spread opetator (like drop sheeshay ka glass)
// console.log(allNewHere);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(Infinity)// get access of all array within array to the depth of infinity

// console.log(real_another_array);

console.log(Array.isArray("Huraira"));

console.log(Array.from("Huraira"));// convert into array

console.log(Array.from({name:"Huraira"})); //interesting (hamen bolna prta h k sari keys se apne ne array bnai he ya sari values se array bnai he)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return a new array from set of array



