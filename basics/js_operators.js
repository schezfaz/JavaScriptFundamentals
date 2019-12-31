/* equality, unary, logical (boolean), relational, conditional(shortcut for if statement), assignment operators + precedance */

/*eqaulity operators: compare 2 values to see if they are equal
    == type conversion is done, converts both operands to same type (if string vs number --> both converted to string )
    === strict equality, both type and value should be equal
    != converts type to be the same, not equal to
    !== no type conversion is done
*/

console.log(1==1); //true
console.log(1==true); //true, converts 1 to boolean
console.log(1===true); //false typeof(1):number and typeof(true): boolean
console.log(123=='123'); //true, both are strings during conversion
console.log(123==='123'); //false
console.log(1!=='true'); //true

/*unary operators: operate on a single variable
    ++var; after this statement, value of var = var + 1 (same for --var)
    var++; before it gets used in an expression, value of var will be var = var + 1 (same for var--)
    +var; converts string to numeric type
    -var; changes signage of the var
*/

let x = 10; y = '10';
console.log(x++); //10
console.log(++x); //12
console.log(--x); //11
console.log(x--,x); //11 10
console.log(typeof(y),+y, typeof(x)); // string 10 number
console.log(-x); //-10

/*logical or boolean operators 
    &&, || , !
    while using both together, && has higher precedence
*/
console.log(1 && 4); //4, if both are valid, second arguement is the output
console.log(1||4); //1, if first arguement is falsy [undefined, does not exist], then output is second arguement

let user_name = null;
let defaultName = {user_name: 'Default Name'};
console.log(user_name || defaultName); //will log user_name if it is valid, else default value

/* Relational operators
    <, >, <=, >=
    while working with strings, keep the case in mind
*/
console.log("Zoo">"apple"); //false, all uppercase chars are considered lower than lowercase chars due to ascii value