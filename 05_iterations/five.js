// for each loop 
 const coding = ["js", "ruby", "java", "python", "cpp"]

//  coding.forEach( function() {} )   // callback funtion = function without name / q k ye fun arry k andr chl rha h

coding.forEach( function (val) { // val as a parameter
// console.log(val);
} )

//+++++++++++++++++++++++++++++++++++++

coding.forEach( (item) => {   // arrow function / callback function
    // console.log(item);
} )  

//+++++++++++++++++++++++++++++++++++++

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

//++++++++++++++++++++++++++++++++++++

coding.forEach( (item, index, arr) => { // it has access of multiple parameters
    // console.log(item, index, arr);
} )

//++++++++++++++++++++++++++++++++++++

const myCoding = [ // multiple objects in one array
{
    languageName: "javaScript",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
}
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )