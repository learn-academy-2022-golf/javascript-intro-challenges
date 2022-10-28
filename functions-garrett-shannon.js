// Write a function named marco that returns "polo".

let marco = () => {
    return "polo"
}

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

let greeting = (name) => {
    return `welcome, ${name}`
} 
console.log(greeting("Shannon"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

let oddOrEven = (num) => {
    if(num % 2 == 0) return "even"
    else return "odd"
}
console.log(oddOrEven(43))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

let triple = (num) => {
    return num * 3
}
console.log(triple(4))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

let multiply = (x,y) => {
    return x * y
}
console.log(multiply(2,4))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

let divisibleBy = (x,y) => {
    if(x % y == 0) return `${x} is evenly divisible by ${y}`
    else return "not divisible"
}
console.log(divisibleBy(10,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

let assignGrade = (num) => {
    if(num > 100) 
    return "Bonus Points"
    else if(num >= 90) return "A"
    else if(num <= 80) return "B"
    else return "C"
}
console.log(assignGrade(120))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

let isLonger = (s,t) => {
    if(s.length == t.length)
    return "equal"
    else if(s.length > t.length)
    return s
    else return t

}
console.log(isLonger("Shannon", "Garrett"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

let greaterNum = (num1,num2) => {
    if(num1 === num2) {
        return "Equal"
    }
    if(num1 > num2){
        return `${num1} is Greater than ${num2}`
    } else {
        return `${num2} is Greater than ${num1}`
    }
}
console.log(greaterNum(6,6));

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

let yelling = (string) => {
    return string.toUpperCase()
}

console.log(yelling("big"));
// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
let helloWorld = (language) => {

}
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