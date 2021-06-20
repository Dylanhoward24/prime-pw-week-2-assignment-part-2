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
// First, we declare the variable 'name' and assign it a value of 'Dane'
// Next, we create a conditional to first check the value of the variable to see
// if it equals (exact match) 'Mary'
// If it does, then we console log the output "Hi, Mary!"
// Otherwise, we console log the output "How do you do?"

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
// First we declare the variable 'secret'
// Next, we declare the variable 'code' and assign it a value of 123
// Then, we create a conditional to function as such: If the variable 'code'
// exactly matches 123, the system assigns the value 'super' to the variable
// 'secret' and assigns double the current value of 'code' to the variable
// 'code', otherwise if the variable 'code' is greater than 250, the system
// assigns the value 'duper' to the variable 'secret'
// Finally, we console log the output of secret, which in this case would be
// "super"

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
// First, we declare the following three variables: 'isStudent', 'age', and
// 'zip'. We also assign the values true to 'isStudent', 34 to 'age', and
// 55407 to 'zip'.
// Next, we create a conditional with multiple embedded else if statements. The
// conditional functions as such: If 'isStudent' exactly matches true AND 'zip'
// is greater than 80000, then we console log the output "You're a student on
// the West Coast!" If that condition isn't met, but 'isStudent' exactly matches
// false OR the value of 'age' is less than 30, then we console log the output
// "What are your hobbies?" If that condition isn't met either, but 'isStudent'
// exactly matches true, we console log the output "Welcome to Prime!" and
// finally, if none of the above conditions are met, we console log the output
// "How about the weather?"
//
// In this instance, we will receive a console output "Welcome to Prime!"

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
// FIX - colorOne should be set to 'blue'
let colorOne = 'red';
// FIX - colorTwo should be set to 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// FIX - should replace below line with: colorOne and colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - time should be a variable, not a constant. Should read: let time = 4;
const time = 4;

// FIX - the symbol between the two variables should be && for a compound
// conditional, not || as shown below. || indicates "or", not "and"
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - minAge should be a variable, not a constant. Should read: let
// minAge = 21;
const minAge = 21;

// FIX - the comparison symbol of the two variables should be >= for greater
// than or equal to. It is curently represented by a less than or equal to.
// Technically the output is still right because the age is equal to the minAge
// but if altered, it would have the wrong output
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
