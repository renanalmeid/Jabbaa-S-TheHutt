// ######### Intro
/*
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

*/

// ######### array literal.
/*
const hobbies = ['a','b','c'];
console.log(hobbies);
*/

// ######### Accessing Elements
/*
//zero-indexed
const hello = 'Hello World';
console.log(hello[6]);
// Output: W

*/
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[3]);


// ######### Update Elements
/*
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

*/

// #########Arrays with let and const
/*
//However, elements in an array declared with const remain mutable. 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];


condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[-1] =  'Spoon';
console.log(utensils);

*/

// ######### The .length property
/*
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);
*/

// ######### The .push() Method
/*
One method, .push() allows us to add items to the end of an array. 
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

*/
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('zoio','d4');
console.log(chores);

// #########The .pop() Method
/*
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop(-1);
console.log(chores);


*/

// ######### More arraz methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// #########Arrays and Functions
/*
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

*/
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => newArr.pop();

removeElement(concept);
console.log(concept);

// ######### Nested Arrays
/*
const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
*/
