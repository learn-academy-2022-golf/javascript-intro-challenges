//  Challenges
//  Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

    // Inputs: 
    // Outputs: 
    // Conditionals:

//  Write a function named marco that returns "polo".
    // Inputs: marco
    // Outputs: polo
    // Conditionals: marco should always return polo, anything else returns    "invalid entry"

const game = (name1) => {
    if(name1 === "marco"){
        return "polo"
    } else {
        return "Invalid Entry"
    }
}
console.log(game("marco"))
console.log(game("james"))

//  Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

    // Inputs: Name2
    // Outputs: "Welcome, <person's name here>!"
    // Conditionals: function should always take inputs name and return a welcome greeting with name.

const greeting = (name2) => {
    return `Welcome, ${name2}!`
}
console.log(greeting("Jack"))
console.log(greeting("Jill"))

//  Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

    // Inputs: Numbers
    // Outputs: Odd or Even
    // Conditionals: Evaluating whether number input is odd or even.  Output will be a string saying "odd" or "even".

const oddOrEven = (num1) => {
    if(num1 % 2 === 0) {
        return "even"
    } else if(num1 % 2 !== 0){
        return "odd"
    // } else {
    //     return "invalid entry"
    }
}
console.log(oddOrEven(3))
console.log(oddOrEven(204))
// console.log(oddOrEven("")) 
// Lines 46 & 47 did not return "invalid entry", instead it returned odd with any amount of letters within a string and returned even when null.


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

    // Inputs: number
    // Outputs: number * 3
    // Conditionals: 

const triple = (num2) => {
    return num2 * 3
}
console.log(triple(9))
console.log(triple(13))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

    // Inputs: num3, num4 
    // Outputs: num3 * num4
    // Conditionals:

const multiply = (num3, num4) => {
    return num3 * num4
}

console.log(multiply(23, 45))
console.log(multiply(2, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

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