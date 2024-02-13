// Immediately Invoked Function Expression (IIFE)
// Global scope k polution se preshani hoti he kai dfa to global scope k polution se bachny k liye hum IIFE use krty hn
//wrap the whole function into ()

(function chai(){
    console.log(`DB CONNECTED`);
})
//  chai()
();

//+++++++++++++++++++++++++++

(function aurCode(){
    //named IIFE
    console.log(`DB CONNECTED TWO`);
}) ();

// +++++++++++++++++++++++++++

( (name) =>{
    // UnNamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
}) ('HURAIRA')

// 2 IIFE aik file me ; seoration krty hn
