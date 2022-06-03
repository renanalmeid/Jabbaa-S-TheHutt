/*
An important idea in programming is scope. Scope defines where variables can be accessed or referenced.

While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

*/

// ######## Blocks and Scope
/*
 A block is the code found inside a set of curly braces {}.


 const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

*/

// ######## Global Scope
/*
In global scope, variables are declared outside of blocks. 

*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// ######## Block Scope
/*
When a variable is defined inside a block, it is only accessible to the code within the curly braces {}.

*/
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  console.log(lightWaves); // error


// ########Scope Pollution
/*
It may seem like a great idea to always make your variables accessible,
but having too many global variables can cause problems in a program.

Let’s look at an example of scope pollution in practice so we know how to avoid it:

let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100


*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars); // bad practice example 


// ######## Practice Good Scoping
/*
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError

*/
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();
  


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