// Write a function named marco that returns "polo".
//output: polo
//input: marco
const marco = () => {
    return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//output: "welcome, persons name!"
//input: greeting

// arguments: person name

const greeting = (pName) => {
    return `Welcome ${pName}!`
}
console.log(greeting("kenny"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//output: odd/even
//input: number

//create conditional for even/ odd.

const oddOrEven = (num) => {
 if(num % 2===0){
    return "even"
 } else{
    return "odd"
 }
}
console.log(oddOrEven(4))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//output: num *3
//input: num
const triple = (num) => {
    return num * 3
}
console.log(triple(2))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//output: * result
//input: num1 * num2
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(5, 3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//output: "num1 is evenly divisible by num2"
//input: num1/num2
// 
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is NOT evenly divisible by ${num2}`
    }
}
console.log(divisibleBy(10, 2))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score. 
//output: letter grade
//input: number score
//method:
const assignGrade = (score) => {
    if (score > 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(assignGrade(2))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//
//
//
const isLonger = (string1, string2) => {
    if(string1.length > string2.length) {
        return `${string1}`
    } else if(string1.length < string2.length) {
        return`${string2}`
    } else {
        return "why are you doing this?"
    }
}
console.log(isLonger("ABCDEF", "ABCDEF"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
