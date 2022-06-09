// #####
/*
There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol.


*/

/// ###### Creating Object Literals
/*
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

*/
// USe {} to assign an object literal
// let spaceship = {}; // spaceship is an empty object

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

/// ###### Accessing Properties
/*
//There are two ways we can access an object’s property. 
//Let’s explore the first way— dot notation, ..

'hello'.length; // Returns 5

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
spaceship.favoriteIcecream; // Returns undefined

*/
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  const crewCount = spaceship.numCrew;
  const planetArray = spaceship.flightPath;

/// ###### Bracket Notation
/*
The second way to access a key’s value is by using bracket notation, [ ].
We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. 

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

*/
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  let propName =  'Active Mission';
  let isActive = spaceship['Active Mission'];
  
  console.log(spaceship[propName]);


/// ###### Property Assignment
/*
Objects are mutable meaning we can update them after we create them!
If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
If there was no property with that name, a new property will be added to the object.

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'


const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property

*/
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 6;
  
  delete spaceship['Secret Mission'];



/// ###### Methods
/*
When the data stored on an object is a function we call that a method. 
 A property is what an object has, while a method is what an object does.

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

*/
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat (){
    console.log(retreatMessage);
  },
  takeOff (){
    console.log('Spim... Borp... Glix... Blastoff!');
  }

};

alienShip.retreat();
alienShip.takeOff();


/// ###### Nested Objects
/*
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

*/
let spaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  let firstPassenger = spaceship.passengers[0];
  
  console.log(firstPassenger)

/// ###### Pass By Reference
/*
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'

*/
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  
  console.log(spaceship)
  


/// ###### Looping Through Objects
/*
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

*/
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewRole in spaceship.crew){
  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`)
}
for (let crewDegree in spaceship.crew){
  console.log(`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`)
}


/*


Output:
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science

*/
