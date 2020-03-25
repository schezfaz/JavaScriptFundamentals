/* constructor functions: used to instantiate new objects
    conventions: name starts with a capital letter
    everytime 'new' keyword is used, function gets a brand new empty context
    use 'this' keyword to access context of the function/object
*/

function Car(id){
    this.carID = id;
    this.start = function(){
        console.log('start: ', this.carID);
    };
}

let car = new Car(123); //creates a new object car
console.log(car.carID);
car.start();

/*prototypes 
    if we created 100 car = new Car(); objects, the function start would be replicated a 100 times i.e. there would be a 100 copies of it
    prototype exists directly on Car
*/

function Car1(id){
    this.carID = id;
}

Car1.prototype.start = function(){ //methods added directly to prototype, one function for n number of objects, saves memory
    console.log('start: ', this.carID); //this to work with the function's context
};

let vehicle = new Car1(786);
vehicle.start();

/* expanding objects using prototypes: giving nen functionality to all instances of an object, eg. polyfill */
String.prototype.hello = function(){ //string constructor function, expanding built in objects
    return this.toString() + ' Hello';
};

console.log('Schezeen'.hello());

/*JSON: JavaScript Object Notation
    transmit js objects over the wire, across APIs
*/

let scooter = {
    id: 123,
    style: 'convertible'
};

console.log(JSON.stringify(scooter));

let carlist = [ //array to JSON
    { carID: 123},
    { carID: 234},
    { carID: 345}
];
console.log(JSON.stringify(carlist));

/*Parsing JSON
    if JSON comes in through a webserver/ getHTTP call
*/

let jsonIn =
`
    [
        {"carID": 123},
        {"carID": 234},
        {"carID": 345}
        
    ]
`;

let newCarIDs = JSON.parse(jsonIn);
console.log(newCarIDs);

/* Array iteration */

let carNames = [
    { carID: 123, style: 'new'},
    { carID: 234, style: 'old'},
    { carID: 345, style: 'refurbished'} 
];

carNames.forEach(car => console.log(car)); 
carNames.forEach((car,index)  => console.log(car, index)); 

let convertibles = carNames.filter( //creates a new array based on filter, filter will loop through the entire array and call the function 
    car => car.style === 'new' //each element will be assigned to car one at a time, perform check
); //after execution, convertibles will be a list of all cars with 'new' style
console.log(convertibles);

let result = carNames.every( //will return true or false based on condition, works on entire element
    car => car.carID > 0 //validating carid does exist on every element
);
console.log(result);

let car_match = carNames.find( //first instance where condition is success
    car => car.carID > 100
);
console.log(car_match);

