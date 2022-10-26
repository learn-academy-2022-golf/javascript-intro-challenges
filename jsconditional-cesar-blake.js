// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 80

if (item < 100) {
    console.log("in budget")
} else {
    console.log("not in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hunger = "hungry"

if (hunger === "hungry") {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "green"

if (trafficLight = "green") {
    console.log("go")
} else if (trafficLight = "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let num1 = 42
let num2 = 12

if (num1 > num2) {
    console.log(num1)
} else if (num1 === num2) {
    console.log("the numbers are the same.")
} else {
    console.log(num2)
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero. 

let num3 = 0

if (num3 === 0) {
    console.log(`${num3} is zero!`)
} else if (num3 % 2 === 0) {
    console.log(`${num3} is even! `)
} else {
    console.log(`${num3} is odd!`)
}

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.