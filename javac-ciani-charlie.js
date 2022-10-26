//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var inBudget= 100
if (inBudget <= 99) {
    console.log("You are in budget") 
} else {
    console.log("You are not in budget")
}
//output= You are not in budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var food= "hungry"
if (food = "hungry") {
    console.log("Eat food") 
} else {
    console.log("Keep Coding")
}
//output= Eat food

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var light= "red"
if (light=="green") {
    console.log("go") 
} 
else if (light=="yellow")
{
    console.log("slow down") 
} 
else if (light=="red")
{
    console.log("stop") 
} 
else {
    console.log("invalid")
}



// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var numb1= 20 
var numb2= 20
if (numb1 < numb2){
    console.log(`${numb2}`)
}
else if (numb1 > numb2){
    console.log(`${numb1}`)
}
else (console.log("the numbers are the same"))


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number= 8
if (number % 2 == 0){
    console.log("even")
}
else if (number % 2 == 1){
    console.log("odd")
}
else (console.log("something is wrong"))

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade= 100
if (grade === 100 ){
    console.log("perfect score")
}
else if (grade === 0){
    console.log("no grade available")
}
else if (grade <100 && grade <0){
    console.log("Almost there")}
else (console.log("something is wrong"))

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

console.log(typeof "Backup")


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.







