// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
// Input: Marco
//Output: Polo
// Return "Polo"
const name = (marco) => {
    return "Polo"
}
console.log(name());
//Output: Polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// Input: name
//Output: "Welcome, <person's name here>!"
//Return: Welcome variable name

const greeting = (names) => {
    return `Welcome, ${names}`
}
console.log(greeting("Cesar"))
//Output: Welcome, Cesar

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//Input: number
//Output: odd or even
//If number is even
    //return "This number is even"
//If number is odd
    //return "This number is odd"

const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "This number is even";
    } else {
        return "This number is odd";
    }
}
console.log(oddOrEven(2));
//Output: This number is even
console.log(oddOrEven(3));
//Output: This number is odd

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//function named triple
//input: num
//Output: num * 3
// Use a variable to pass the argument and multiply it by 3
//Return "The result of the triple is ${num}"

const triple =(num) => {
    let numTriple = num * 3
    return `The result of the triple is ${numTriple}`
}
console.log(triple(1));
//Output: 3

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

//Input: two numbers
//Output: the two number multiplied together 
//Return: first number times second number

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(1, 2));
//Output: 2

//switch
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
