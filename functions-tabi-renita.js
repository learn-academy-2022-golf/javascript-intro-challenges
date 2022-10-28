//  Write a function named marco that returns "polo".
//  const marco will be a function that returns "polo"
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const: greeting 
// inmput: yourName
// output: `Welcome ${name}!`

const greeting = (yourName) => {
    return `Welcome ${yourName}!`
}
console.log(greeting("Renita"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const: oddOrEven
// inpput: number
// output: either odd or even 
// function: if number % 2 === 0 return even, else return odd

const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    }
    else {
        return "odd"
    }
}
 console.log(oddOrEven(0))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const: triple
// input: num1
// output: num1 * 3

const triple = (num1) => {
    return num1 * 3
}
console.log(triple(2))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const: multiply
// input: number1, number2
// output: number1 * number2

const multiply = (number1, number2) => {
    return number1 * number2
}
console.log(multiply(3,4))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.