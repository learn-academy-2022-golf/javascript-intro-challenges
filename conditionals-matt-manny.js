// Write a statement that takes a variable of item, and logs "in budget" if a price is $100 or less.

var chair = 100;
if (chair <= 100) {
    console.log("in budget")
} else {
    console.log("not in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true;
if (hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "yellow"
if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {
    console.log("Invalid Entry")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 6
var num2 = 6
if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else if (num1 === num2) {
    console.log("the numbers are the same")
} else {
    console.log("Invalid Entry")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num3 = 128973465
if (num3 % 2 === 0) {
    console.log("even")
} else if (num3 % 2 !== 0) {
    console.log("odd")
} else if (num3 === 0) {
    console.log("zero")
} else {
    console.log("Invalid Entry")
}