/* block-scope introduced in ES6 2015
    IIFEs: Immediately invoked function expressions
    Closure: function and context kept around in memory
    this keyword: refers to function's context
    call(), apply (), bind(): can be called on other functions, all revolve around the 'this' keyword
    Arrow functions, default parameters
*/

/* Function scope: variable that can be accessed within a function/nested function
    lifetime of variables within functions
*/
 
/*
    function startCars(carId){
        let message = "Started engine"; //only alive within this function scope
    }
    startCars(123);
    console.log(message); //error: reference error

    however, for nested functions: if function cannot find variable within it scope, it searches for it in its parent function
*/

//var keyword is independant of block scopes, block scopes are only effective on let

/* IIFEs: group code, work in isolation
    Immediately invoked function expression
    function expression: assigning a function to a variable
    Immediately invoked: writing the func as soon as it is declared

    function(){   --this function won't execute as it does not have a name, it is not being called either
        console.log("iife");
    }
*/

//this will execute: Immediately invoked
(function(){
    console.log("iife");
})(); //(); is the parameter list

//function expression: assigning function + its result to a variable

let app = (function(){ //app:application, if you wanted to take your applicatiton and bundle it to a single module iife is helpful  
    let carId = 123;
    console.log(carId, " in function");
    return {}; //return value of iife will get assigned to variable "app"
})();

console.log(app);

//generally functions get returned from iifes, that is where the value of an iife comes from, from creating a closure
//i.e. real value of iife is when it is used as a closure