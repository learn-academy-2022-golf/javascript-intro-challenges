//  Make sure you try different options and change the variables to ensure properly working code.


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// let num1=24
// let num2=101
// if(num1<num2) {
//     console.log(`${num1} Is in budget`)
// }
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry1 = "yeah"
let hungry2 = "no" 
if(hungry2 == "no") {
    console.log("eat food")
} else {
    console.log("keep coding")
}
// var dinosaur = "T-Rex"
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "red"
// let trafficLight2 = "yellow"
// let trafficLight3 = "red"

if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
    console.log("slow down")
} else if(trafficLight === "red") {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// let num1 = 70
// let num2 = 70
// if(num2 > num1) {
//     console.log(`${num2} is the larger number`)
// } else if(num1 === num2) {
//     console.log("The numbers are the same.")
// }

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num = 0
if(num === 0) {
    console.log("The number is zero!")
} else if(num % 2 == 0) {
    console.log("The number is even!")
} else {
    console.log("The number is odd")
}
// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let grade = "99%"
if(grade === "100%") {
    console.log("Perfect score")
} else if(grade === "0%") {
    console.log("no grade available")
} else {
    console.log("participation award")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

