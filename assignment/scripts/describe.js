// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We've created a variable called name and set it equal to Dane. We then proceed to hit it with some conditional formatting.
// If name equals Mary then the console log should output 'Hi, Mary!' as a string.
// If it doesn't match Mary completely as the === indicates then the console log output
//will read as follows: How do you do?, which will also be a string
//In this case since Dane is not equal to Mary then the console will output option 2: How do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We've created the variable secret
// We've created the variable code and set it to equal 123
// When then implement conditional formatting stating that if code equals 123 then secret equals 'super'
//This piece of conditional formatting says that if the variable "code" is less than 250, 
//which it now is since we've set the value of code to 246, resulting in a console log output of 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We've created a variable "isStudent" and set it to a bolean equaling true
// We've created the variable age and set it equal to the number 34
//We've created the variable zip and set it equal to 55407
// if both isStudent equals true which it currently does and zip is greater than 80000(which it is not) 
//then the console log will be 'You're a student on the West Coast!`. Otherwise if isStudent is equal to false OR age is greater
//than 30 then the console log should display as follows: What are your hobbies?
//if isStudent equals true which is currently is, then the console log output should be: Welcome to Prime!

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple'; // FIX - this would need to be added in order for this code to function correctly 
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) { // FIX - we need to switch or ( || ) with and (&&) for this code to function as described above.
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) { 
  console.log('no entry'); // FIX - change from 'no entry' to 'enter'
} else {
  console.log('enter'); // FIX - change from 'enter' to 'no entry'
}
*/

