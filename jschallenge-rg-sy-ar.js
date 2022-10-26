// Write the code that will log the outcome of 34 added to 71.
console.log(34 + 71);
// Write the code that will log the outcome of 67 subtracted from 123.
console.log(123 - 67);
// Write the code that will log the outcome of 56 multiplied by 23.
console.log(56 * 23);
// Write the code that will log the outcome of 45 divided by 5.
console.log(45 / 5);
// Write the code that will log the outcome of 5 to the power of 7.
console.log(5 ** 7);
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 % 6);
// Write the code that will log the length of a string containing your name.
console.log("renita".length);
// Write the code that will log whether your string includes the letter "e"?
console.log("renita".includes("e"));
// Write the code that will log the character at the first index of the string.
console.log("renita".charAt(0));
// Write the code that will log the string in all uppercase letters.
console.log("renita".toUpperCase());

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 >= 67 / 2);
// Does 5 evaluate to the same as "5"?
console.log(5 == "5");
// Does 5 strictly equal "5"?
console.log(5 === "5");
// Does !3 strictly equal 3?
console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10);
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l");
// Modify the code from the previous question to return true.
// Consider the variables:
console.log("LEARN"[0] == "L");

var theQuestion = "life, the universe, and everything"
var theAnswer = 42

// Write the code that will log theAnswer divided by 2.
console.log(theAnswer / 2);
// Write the code that will log the length of theQuestion.
console.log(theQuestion.length);
// Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"))
// Write the code that will log the concatenation of the two variables.
console.log(`${theAnswer}` + `${theQuestion}`)
// Write the code that will log "the universe".
console.log(theQuestion.slice(6, 18))
// Write the code that will log the character "l" from theQuestion.
console.log(theQuestion.charAt(0))
// Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log(theQuestion.length > theAnswer)

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 50;
if (item <= 100) {
  console.log("in budget");
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = true;
if (hungry === true) {
  console.log("eat food");
} else {
  console.log("keep coding");
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "red";
if (trafficLight === "red") {
  console.log("STOP");
} else if (trafficLight === "green") {
  console.log("GO");
} else if (trafficLight === "yellow") {
  console.log("SLOW DOWN");
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let number1 = 7;
let number2 = 7;
if (number1 === number2) {
  console.log("The numbers are the same");
} else if (number1 > number2) {
  console.log(`${number1}`);
} else if (number1 < number2) {
  console.log(`${number2}`);
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let number = 0;
if (number === 0) {
  console.log("zero");
} else if (number % 2 == 0) {
  console.log("even");
} else if (number % 2 == !0) {
  console.log("odd");
}
