// let var const
// {} is a Scope in almost languages
// block scope k andr jo value hoti h wo global scope k pss ni jani chahiye 
// or global scope ki value block scope k andr mjood hoti h
// coding environment me Global scope different h Console walay environment se

// let a = 10
// var b = 20
// const c = 30
// put these in if then the scope is


let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30 // so that in mostly cases people avoid var
    // console.log("INNER:", a);
}
// console.log(c);

// console.log(a);
// console.log(b);


//+++++++++++++++++++++++++++++++++++++++++
 
function one(){
    const username = "Huraira"

    function two(){   // like icecream child parent se le skty hn parent child se ni
        const website = "youtube"  
        // console.log(username);
    }
    // console.log(website);

    two()

}

one()


//--------------------------------

if(true){
    const username= "Huraira"
    if(username==="Huraira"){
        const website =" Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++ Interesting +++++++++++++++++++++++++

addOne(5)
function addOne(num){
    return num + 1
}

const addTwo = function(num){ // expression
    return num + 2
}

addTwo(5) // when you take it before variable which declare function then i'll generate error