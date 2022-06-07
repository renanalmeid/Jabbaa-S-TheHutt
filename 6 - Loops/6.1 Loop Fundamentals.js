// ######## Foor Loop
/*
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
*/
for (let i = 5; i <11; i++){
    console.log(i);
  }

// ######## Looping in Reverse
/*
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
*/


// ######## Looping through Arrays
/*

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
*/
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

// ######## Nested Loops
/*
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
*/
const bobsFollowers = ['Gary', 'Jane','Jude','Jack'];
const tinasFollowers = ['Jane', 'Janine','Jack'];
const mutualFollowers = [];

for (let i =0; i < bobsFollowers.length; i++){
  for(let j=0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    } 
  }
}

 console.log(mutualFollowers);

// ######## The While Loop
/*
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
*/
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;

while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



// ######## Do while 
/*
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);



const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
 
*/
// Write your code below
let cupsOfSugarNeeded = 1;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

// ######## break
/*
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");





*/


// ########
/*

*/


// ########
/*

*/


// ########
/*

*/


// ########
/*

*/


// ########
/*

*/