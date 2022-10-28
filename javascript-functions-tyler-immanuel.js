// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}

console.log(marco());

// --> polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name} !`
}
console.log(greeting('tyler'));
console.log(greeting('immanuel'));

// --> Welcome, tyler !
//     Welcome, immanuel !

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 !== 0 ){
        return ` Your ${number} is odd. `
    } else {
        return ` Your ${number} is even. `
    }
}

console.log(oddOrEven(5));
console.log(oddOrEven(10));
console.log(oddOrEven(2));

// -->  Your 5 is odd. 
//      Your 10 is even. 
//      Your 2 is even. 

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return `${number * 3}  `
}

console.log(triple(3));
console.log(triple(100));
console.log(triple(5));

// --> 9  
//     300  
//     15  


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return `${num1 * num2}.`
}

console.log(multiply(5, 5));
console.log(multiply(10, 10));
console.log(multiply(20, 20));

// --> 25.
//     100.
//     400.


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num3, num4) => {
    if (num3 % 2 == 0) {
        return `${num3} is evenly divisible by 5 .`
    }
}

console.log(divisibleBy(10, 5));
console.log(divisibleBy(5, 5));

// --> 10 is evenly divisible by 5 .
// --> undefined



// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = () => {
    
}
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