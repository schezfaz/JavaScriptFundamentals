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

/* closures
    function execution: runs its code, completes, its variables/functions go out of scope
    sometimes you need a functions internal variables/nested functions to hang around
*/

let iife = (function(){
    let car_id = 1234;
    let get_id = function(){
        return car_id; //car_id is not declared in get_id function, so it will reach out to the parent function
    };

    return{ //this is how we create a closure
        get_id: get_id //return an object with property get_id and its value is get_id the func get_id, property name can be anything
    };
})();

console.log(iife.get_id()); //when we call get_id(), nested function get_id() gets executed, car_id gets looked up [found in the parent function]

/*variable iife gets set to the return value of the iife, which includes a reference to the function get_id. 
    as long as we hold onto the reference of the function get_id, the iife will persist, in turn its parent functions will persist 
    along with their variables. 

    Thus, any variables declared in an iife will persist, along with any functions. We just need to make sure that we return a reference to the func
*/

/* this keyword
    - refers to an object, does not refer to the function as an object itself, refers to a special object: context of the function
    - this keyword is frequently used in functions that are properties of objects

    let fn = function(){
        console.log(this === window); --window is the global object
    };

    fn(); //true
*/

let o = { //o is an object
    car_name : "schez",
    getName : function(){
        console.log(this); // o
        return this.car_name; //this refers to the object(o) that holds the function getName()
    }
};

console.log( o.getName());

/* There are 2 ways to call a function: (1). Call function (2). Apply function
    main purpose of the call/apply function is to change the value of this i.e. to change the object which is the context of the function

*/

let newCar = {car_name: "schezeeeen"}; //call is a special function which specifies the new context: newCar, therefor this.car_name now will refer to newCar
console.log(o.getName.call(newCar)); //schezeeeen

//apply: accepts an array of arguements
let c = {
    car_identification: '123',
    getID : function(prefix){
        return prefix + this.car_identification;
    }
};

let next_Car = {car_identification: '234'};
console.log(c.getID.apply(next_Car, ['ID: '])); //passing array containing one string

//bind: make a copy of the function && change the this value, assigns a new context: a value that will be accessed by this

let newFn = o.getName.bind(newCar); //passing new value/context for this == newCar, creates a new function which is stored in variable newFn
console.log(newFn());  