/*
As a seasoned athlete, one of your favorite activities is running marathons.
You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: 
The program currently uses the wrong scope for its variables
In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.
*/
// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {  // select a randon event
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => { //number of days to train 

  // declare days to avoid ReferenceError 
  let days;

  //delete all let within the statements
  if (event === 'Marathon') {
    //let days = 50;
    days = 50;
  } else if (event === 'Triathlon') {
    //let days = 100;
    days = 100;
  } else if (event === 'Pentathlon') {
    //let days = 200;
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
// add it as parameter for eaach function
/*
const logEvent = ()event => { //athlete name/event/num of days
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};
*/
const name = 'Nala';
const logEvent = (name,event) => { //athlete name/event/num of day
  console.log(`${name}'s event is: ${event}`);
};
//
/*

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};
*/

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name,event);
logTime(name,days);
