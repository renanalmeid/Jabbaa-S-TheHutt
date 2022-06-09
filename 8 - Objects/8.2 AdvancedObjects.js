
/// ###### The this Keyword
/*
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

The this keyword references the calling object which provides access to the calling object’s properties.
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore

*/
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo())

/// ###### Arrow Functions and this
/*
const robot = {
  energyLevel: 100,
  checkEnergy () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

*/
const robot = {
    energyLevel: 100,
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

/// ###### Privacy
/*
Certain languages have privacy built-in for objects, but JavaScript does not have this feature.
Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. 
One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.

const bankAccount = {
  _amount: 1000
}

*/
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  
  robot._energyLevel = 'high'
  
  robot.recharge()



/// ###### Getters
/*
Getters are methods that get and return the internal properties of an object.
But they can do more than just retrieve the value of a property!

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'

In general, getter methods do not need to be called with a set of parentheses.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.

*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel (){
      if (typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`
      } else {
        return `System malfunction: cannot retrieve energy level`
      }
    }
  };
  
  
  console.log(robot.energyLevel)

/// ###### Setters
/*
reassign values of existing properties within an object

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log( 'Pass in a number that is greater than or equal to 0')
      }
    }
  };
  
  robot.numOfSensors = 100
  console.log(robot.numOfSensors)


/// ###### Factory Functions
/*
, but there are times where we want to create many instances of an object quickly. Here’s where factory functions
A factory function is a function that returns an object and can be reused to make multiple object instances
Factory functions can also have parameters allowing us to customize the object that gets returned.

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

*/
const robotFactory = (model, mobile) =>{
    return{
      model: model,
      mobile: mobile,
      beep (){
        console.log('Beep Boop')
      }
    }
  };
  const tinCan = robotFactory('P-500', true)
  tinCan.beep()


/// ###### Property Value Shorthand
/*
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};

*/
function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

/// ###### Destructured Assignment
/*
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
If we wanted to extract the residence property as a variable, we could use the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

*/
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot;
  functionality.beep()

/// ###### Built-in Object Methods
/*
But, we can also take advantage of built-in methods for Objects!
we have access to object instance methods like: .hasOwnProperty(), .valueOf()

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. 



*/
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);