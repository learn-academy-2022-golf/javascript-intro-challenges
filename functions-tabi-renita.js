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
// const: divisbleBy
// input: nums1, nums2
// output: "nums1 is evenly divisible by nums2" or else "nums1 is not evenly divisible by nums2"
// function: if nums1 % nums2 === 0 then return first message, else if nums1 % nums2 !== 0 then return second message
const divisibleBy = (nums1, nums2) => {
    if(nums1 % nums2 === 0){
        return `${nums1} is evenly divisible by ${nums2}`
    }
    else if (nums1 % nums2 !== 0){
        return `${nums1} is not evenly divisible by ${nums2}`
    }
}
console.log(divisibleBy(-4.2, 2.1))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const: assignGrade
// input: numberScore
// output: letter grade
// function: if numberScore >= 90 then return letter grade A
//           if 79 < numberScore < 90 then return letter grade B (test)

const assignGrade = (numberScore) => {
    if(numberScore >= 90){
        return "Your grade is an A"
    }
    else if(numberScore < 90 && numberScore > 79){
        return "Your grade is a B"
    }
    else if(numberScore < 80 && numberScore > 69){
        return "Your grade is a C"
    }
    else if(numberScore < 70 && numberScore > 59){
        return "Your grade is a D"
    }
    else if(numberScore <= 59){
        return "Your grade is an F"
    }
}
console.log(assignGrade(99))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const: isLonger
// input: "input1" "input2"
// output: "inputthatislonger"
// function: if input1.length > input2.length then return input1
    // if input1.length < input2.length then return input2
    // else return "input1 is the same lnegth as input2"

const isLonger = (input1, input2) => {
    if(input1.length > input2.length){
        return `${input1} is longer`
    }
    else if(input1.length < input2.length){
        return `${input2} is longer`
    }
    else{
        return "These are the same length."
    }
}
console.log(isLonger("Tabi", "Renita"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (numInput1, numInput2) => {
    if(numInput1 > numInput2){
        return `${numInput1} is higher`
    }
    else if(numInput1 < numInput2){
        return `${numInput2} is higher`
    }
    else{
        return "These are the same."
    }
}
console.log(greaterNum(7, 2))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const: yelling
// input: words
// output: WORDS
// function: .toUpperCase
const yelling = (words) => {
    return 
}