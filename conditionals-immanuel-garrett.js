// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 56 

if(item < 100){
    console.log("in budget");
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = true

if(hungry){
    console.log("eat food")
}else {
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = 'YELLOW';

if(trafficLight.toLowerCase() === 'green') {
    console.log("go");
}else if (trafficLight === 'yellow') {
    console.log('slow down');
}else if (trafficLight === 'red'){
    console.log('stop');
}else {
    console.log('Invalid input...');
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let a = 10;
let b = 25;

if(a == b){
    console.log('the numbers are the same');
}
if(a > b){
    console.log(a);
}
if(a < b) {
    console.log(b);
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let n = 3;

if(n == 0) {
    console.log('number is zero.');
}else if(n % 2 == 0){
    console.log('Number is even');
}else if(n % 2 != 0) {
    console.log('Number is odd..');
}

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let grade = 0;

if(grade === 100){
    console.log('Perfect score.');
}else if (grade >= 90){
    console.log('A');
}else if (grade >= 80){
    console.log('B');
}else if (grade >= 70){
    console.log('C');
}else if (grade >= 60){
    console.log('D');
}else if (grade >= 1){
    console.log('F');
}else {
    console.log("No grade available.");
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let thing = 'dad';

if(typeof thing == "boolean"){
    console.log('Boolean');
}
if(typeof thing == 'number'){
    console.log('Number');
}
if(typeof thing == 'string'){
    console.log('String');
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = 'afdhg';

if(password.length >= 12 && password.includes('!')){
    console.log("That is a mighty strong password!");
}else if(password.length >= 8 || password.includes('!')){
    console.log('Password is strong enough.');
}else {
    console.log('That is not a valid password...');
}