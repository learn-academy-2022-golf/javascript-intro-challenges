// Challenges

// Create a for loop that logs each number from 1 - 20.
for(let i = 0; i <= 20; i++){
    console.log(i)
}
// --> 0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
//    10
//    11
//    12
//    13
//    14
//    15
//    16
//    17
//    18
//    19
//    20

// Create a for loop that logs every other number from 1 - 20.
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 1; i <= numsArray.length; i++) {
    if (numsArray [i] % 2 == 0)
    console.log(i)
}
// output 
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for(let i = 0; i <= numsArray.length; i++) {
    console.log(numsArray[i] * 3) 

// output
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// 33
// 36
// 39
// 42
// 45
// 48
// 51
// 54
// 57
// 60

}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

const numsArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 0; i <= numsArray2.length; i++) {
    if (numsArray2[i] % 2 !== 0)
    console.log(1)

    // Return to this question
}

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

var nums = [3, 57, -9, 20, 67];

var largest = nums[i]; 
for(i = 0; i <= nums.length; i++) {
    if(largest < nums[i]) {
        largest = nums[i];
    }
}
console.log(largest)
// Create the code that will log the largest number from the array.

// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.
// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
