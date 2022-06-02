// ###### Function Declaraction
/*
One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name,
 a function declaration binds a function to a name, or an identifier.

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

*/
function getReminder(){
    console.log('Water the plants')
  }
  
  function greetInSpanish(){
    console.log('Buenas Tardes.')
  }


// ###### Calling a Function 
/*

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

*/


// ###### Parameters and Arguments
/*
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

*/


// ######Default Parameters
/*
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

*/
function makeShoppingList(item1 ='milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  

// ###### Return
/*
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

*/
function monitorCount(rows, columns){
    return rows*columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);


// ###### Helper Functions
/*
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59


*/
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns){
    return monitorCount(rows,columns)*200;
  }
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost)

// ###### Function Expressions
/*
//To define a function inside an expression, we can use the function keyword
//In a function expression, the function name is usually omitted. 
//A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

//Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

const  plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}
plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
*/


// ###### Arrow functions
/*
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.


*/

// ######
/*

*/

