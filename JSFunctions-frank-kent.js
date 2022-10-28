// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// const Marco = (Polo) => {

//     return `Marco ${Polo}!`

//   }

// console.log(Marco("Polo"))

// output:
// Marco Polo!

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// BEGIN PSEUDOCODE
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }

// console.log(greeting("frank"))

// output:
// Welcome, frank!


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// This code will be a conditional 
// const oddOrEven = (number) => {

//     // If number is odd, return odd, if number is even, return even
//     if (number % 2 == 0) {
//         return ("even")
//     }

//     // else if odd, return odd

//     // else zero

//     else {
//         return ("odd")
//     }
// }
// console.log(oddOrEven(0))

// *******
// program to check if the number is even or odd
// take input from the user
// const number = ("0");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// output:
// The number is even.

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.


// const multiplier = (value) => {
//     return (value * 3)
// }

// console.log(multiplier(12))

// output:
// 36

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const multiplier = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiplier(12, 15))

// output:
// 180

// Write a function named divisibleBy that takes two numbers as arguments and 

// returns whether the first number is evenly divisible by the second 

// so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = () => {

//     if (10 % 5 == 0){
//         return("10 is evenly divisible by 5")
//     }
// }

// console.log(divisibleBy())

// output: 
// 10 is evenly divisible by 5

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const greeting = (name) => {

    return `Hello there ${name}`

    // if input 90 - 100, assign A
    // if below 90 assign

}

console.log(greeting("frank"))


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"