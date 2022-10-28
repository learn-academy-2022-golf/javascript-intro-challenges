// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// create a function
// input: "marco"
// output: "polo"

const marco = () => {
    return "polo"
}

// console.log(marco())



// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// create a function named greeting
// input: name
// output: "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}!`
}
//console.log(greeting("Matt"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// make a function oddOrEven
// input: a number
// output: odd or even
// use a conditional statement to make evaluation
    // if number is odd -> "number is odd"
    // else number is even -> "number is even"

const oddOrEven = (number) => {
    if(number % 2 == 0) {
        return "number is even"
    } else {
        return "number is odd"
    }
}
// console.log(oddOrEven(9))
// console.log(oddOrEven(8))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// write function named triple
// input: any number
// output: result of number times 3

const triple = (number) => {
    return (number * 3)
    // return number * 3    also works
}
// console.log(triple(6))



// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// write function named multiply
// input: any two numbers
//output: result of the numbers multiplied together

const multiply = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply(4, 3))



// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// write function named divisibleBy
// input: any two numbers
// output: whether first number evenly divisible by second
// write a conditional statement

const divisibleBy = (num1, num2) => {
    if ((num1 % num2) === 0 ) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is not evenly divisible by ${num2}`
    }
}
// console.log(divisibleBy(3, 9))
// console.log(divisibleBy(9, 3))

// const notDivisibleBy = (num1, num2) => {
//     if ((num1 % num2) !== 0 ) {
//         return `${num1} is not divisible by ${num2}`
//     } else {
//         return `${num1} is is evenly divisible by ${num2}`
//     }
// }
// console.log(notDivisibleBy(3, 9))
// console.log(notDivisibleBy(9, 3))



// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// write function named assignGrade
// input: number score  - ex. 84%
// output: return letter grade based on percent

const assignGrade = (numberScore) => {
    
    if (numberScore => 90) {
        return `Your score is an A`
    } else if (numberScore < 90 || (numberScore >= 80)) {
        return `Your score is a B`
    } else if (numberScore < 80 || numberScore >= 70) {
        return `Your score is a C`
    } else if (numberScore < 70 || numberScore >= 60) {
        return `Your score is a D`
    } else if (numberScore < 60) {
        return `Your score is an F`
    }
}
// console.log(assignGrade(84))   // should be A
// console.log(assignGrade(84))   // should be B
// console.log(assignGrade(80))   // should be B
// console.log(assignGrade(73))   // should be C
// console.log(assignGrade(64))   // should be D
// console.log(assignGrade(50))   // should be F


// const assignGrade = (numberScore, total) => {

//     let percent = (numberScore / total) * 100
//     let letterGrade = ''

//     if (percent => 90) {
//         return `Your score is an A`
//     } else if (percent >= 80) {
//         return `Your score is a B`
//     } else if (percent >= 70) {
//         return `Your score is a C`
//     } else if (percent >= 60) {
//         return `Your score is a D`
//     } else {
//         return `Your score is an F`
//     }

// }
 
// let result = assignGrade

// console.log(result(84, 100))   // should be A
// console.log(assignGrade(84))   // should be B
// console.log(assignGrade(80))   // should be B
// console.log(assignGrade(73))   // should be C
// console.log(assignGrade(64))   // should be D
// console.log(assignGrade(50))   // should be F









// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// write function named isLonger
// input: two strings
// output: the string with most characters

const isLonger = (string1, string2) => {
    let string1length = string1.length
    let string2length = string2.length
    if(string1length > string2length){
        return string1
    }
}



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