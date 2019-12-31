//CoffeeScript and TypeScript get compiled down to JavaScript, European Computer Manufacturers Association (ECMA)

/* Constants need to be initialised . Constants cannot be changed, only initialised.
    const x = 100;
    const y; //error [unexpected token ';']
    x = 101; //error [variable is read only]
*/

/*  console.log(temp); //error [programs execute from top to bottom, trying to use a variable that isn't declared yet]
    let temp = 100; 
*/

//var keyword does not have scoping, let keyword has scoping
console.log(temp); //undefined [not an error]
var temp = 100;

//difference between var + let in code-block scope: let has block scoping i.e. let only exists within the block scope it is defined in.
if(true){
    var foo = 9;
}
console.log(foo); 

/*Rest parameters
    REST parameters: allows a function to store multiple arguements in a single array  eg. (...names)
    i.e. with REST parameters you can send any number of arguements to a function and use a REST parameter(...) to collect them up
    - while using normal parameters and rest parameters together, always use rest parameters last ('rest' of the parameters/remaining params)
*/

function names(...allNames){
    allNames.forEach( name => console.log(name))
}
names("Schez", "Schezeen", "Schezzz");

/*destructuring arrays
    DESTRUCTURING ARRAYS: allows assigning of values within an array to variables
    use [] to destructure an array
*/
let numbers = [1,2,3];
let [num1,num2,num3] = numbers;
console.log(num1,num2,num3);

let ids = [1,3,5,7];

let id1, remaining_ids; //better to declare and initialise separately as you may be waiting for data to arrive
[id1, ...remaining_ids] = ids; //assigns id1 to the first parameter,collects the remaining in a rest array called remaining_ids
console.log(id1,remaining_ids); // output = 1, [3,5,7]

let all_except_first;
[,...all_except_first] = ids; //will skip out the first element
console.log(all_except_first);

/*Destructuring Objects
    use {} to destructure an object
*/

let car = {id:5000, style:'convertible'};
let {id,style} = car; //id VALUE of car will get assigned to id, likewise for style: needs to be same as object properties
console.log(id,style);

/* error as {} are also used for code blocks
    let {id,style};
    {id,style} = car; //error
    console.log(id,style);
*/

let carx = {idx:4000,stylex:'manual'};
let idx, stylex;
({idx,stylex} = carx); //will not give an error when destructuring in ()
console.log(idx,stylex);

/*SPREAD syntax; spread and rest can be used at the same time   
    take an array and spread out its elements so they can be assigned to parameters
    passing an array but breaking it out to individual parameters while passing it to the function
*/

function startCars(car1,car2,car3){
    console.log(car1,car2,car3);
}
let carIds = [100,200,300];
startCars(...carIds);

//Strings and Arrays are both iterables
let carCodes = 'abc';
startCars(...carCodes); //iterates through elements of a string

/*JS has dynamic typing where type of a variable can change, typeof() built in js func to find type of variable/constant/literal
*/

typeof(1); //number 
typeof(true); //boolean
typeof('sup'); //string
typeof(function(){}); //functions
typeof({}); //object
typeof(null); //object
typeof(undefined); //undefined
typeof(NaN); //number

/*type conversion */
foo = 55; //number to string
console.log(foo.toString());
console.log(Number.parseInt('55')); //string to integer
console.log(Number.parseInt('55ABC')); //output will still be 55, parseInt/float stops passing as soon as it gets a non-int value
console.log(Number.parseInt('abc55')); //output: NaN; needs to start parsing with a number, does not have to end with a number 
console.log(Number.parseFloat('34.99')); //string to float

/* controlling loops
    continue and break can be used with while loops as well    
*/
let i = 0; //initialised outside the loop
for(; i<10; i++){ //we can leave the initialisation out 
    if(i==5){
        console.log('breaking');
        break; //breaks out of for loop
    }
}
console.log(i);

for(i=0;i<4;i++){
    if(i==2){
        continue; //continue the for loop, no other code will execute within the for block, i==2 will not get logged outside as control will directly go increment to i==3
        console.log("this won't get logged");
    }
    console.log(i); //output: 0 1 3
}
