// ######## 
/*
if, else if, and else statements
comparison operators
logical operators
truthy vs falsy values
ternary operators
switch statement
*/


// ######## if statement
/*
Inside the parentheses (), a condition is provided that evaluates to true or false.
If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
If the condition evaluates to false, the block won’t execute.
*/
if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!

  let sale = true;
  sale = false;
  if (sale){
    console.log('Time to buy!')
  }// Prints nothing (inste parenthesis must me true) 


// ######## If...Else Statements
/*
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
 
// Prints: But the code in this block will!

*/


// ######## Comparison Operators
/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==


10 < 12 // Evaluates to true
'apples' === 'oranges' // false

*/


// ######## Logical Operators
/*
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)

The ! not operator reverses, or negates, the value of a boolean:

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

*/
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}


// ######## Truthy and Falsy
/*
Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value 
— you’ll only check to see if the variable has been assigned a value.

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
*/


// ######## Truthy and Falsy Assignment
/*
let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, 
and it will be assigned the value of 'Stranger' if username is falsy. This concept 

*/


// ######## Ternary Operator
/*
In the spirit of using short-hand syntax, 
we can use a ternary operator to simplify an if...else statement.

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

isNightTime ? console.log('Turn on the lights!') 
: console.log('Turn off the lights!');

*/
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') 
: console.log("I don't love that!");

// ######## Else If Statements
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


// ######## The switch keyword
/*
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 

*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  
  case 'second place':
    console.log('You get the silver medal!');
    break;

  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// ######## 
/*


*/
