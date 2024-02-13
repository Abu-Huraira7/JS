//JavaScript Exection Context
/* 
{} -> Global Execution(this)
JS is a single threaded

Phase (1)
Global execution Context
Function execution Context
Eval Execution Context

Phase(2)
{JS code} => two phases
1-Memory Creation phase
2-Execution Phase

                            //(1) GLobal Execution(this)
*/                          //(2)Memory Creation Phase     
                            //  (2) Memory Phase 
let val1 = 10               //  val1 => undefined
let val2 = 5                //  val2 => undefined            
function addNum(num1, num2){//  addNum => definition
    let total = num1 + num2     
    return total            
}                                                       
let result1 = addNum(num1, num2)//result1 => undefined     
let result2 = addNum(10, 2)     //result2 => undefined          

                                //(3) Execution Phase
                                // val1 => 10
                                // val2 => 5
                                // addNum => {exection context =
                                //            New variable environment + 
                                //            Execution  thread }(delete)
                                //result = 15 /
///------------------------------------------/---------------------------
//                                          / 
//                                   Two Phase
//                  Memory Phase                     Execution phase    
//                  val1 => undefined                num1 = 10        
//                  val2 => undefined                num2 = 5
//                  total =>undefined                total = 15