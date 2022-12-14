// Create a for loop that logs each number from 1 - 20.

        for(let i = 1; i < 21; i++)
        {
            console.log (i)
        }

// output 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20


// Create a for loop that logs every other number from 1 - 20.

            for(let i = 1; i < 20; i++){
                if(i % 2 !==0){
                console.log(i)
                 }
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

    for(let i = 1; i < 20; i++){
        console.log(i * 3)
        }
    
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

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

for(let i = 1; i < 21; i++){
    if(i % 2 !==0){
        console.log("ODD")
    }
    else {console.log(i)}
/}

// output
// ODD
// 2
// ODD
// 4
// ODD
// 6
// ODD
// 8
// ODD
// 10
// ODD
// 12
// ODD
// 14
// ODD
// 16
// ODD
// 18
// ODD
// 20

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:

// const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

var max =0 
for(let i=0; i< nums.length; i ++)
{
    if (nums[i]> max){
        max= nums[i] 
    }
}
console.log(max)

// output
// 67

// Create the code that will log the smallest number from the array.

var min =0 
for(let i=0; i< nums.length; i ++)
{
    if (nums[i]< min){
        min= nums[i] 
    }
}
console.log(min)

// output 

// -9


// Create the code that will log 

// the remainder of each number when divided by 2. 



for (let i = 0 ; i < nums.length ; i++)
{
    console.log(nums[i] % 2)
}
output:
1
1
-1
0
1

//Expected output: 1, 1, -1, 0, 1

// Consider this variable:
// const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.

let count = 0

for (var i = 0 ; i < myString.length ; i = i + 1)
{
    if (myString[i] === "e")
    {
        count = count + 1
    }
}

console.log(count)
// output:
// 2

// Create the code that will log every other character in the string.

const myString = "learn student"

let count = 0

for (let i = 0 ; i < myString.length ; i = i + 1)
{
    if (i%2 == 0)
    {
        console.log(myString[i])
    }
    
}

// output:
// l
// a
// n
// s
// u
// e
// t



// ???? Stretch Goals

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.

for (let i = 5 ; i < 16; i++ )
{
    if(i % 2 == 0)
    {
        console.log(`${i} is even`)
        
    }
    else {
        console.log(`${i} is odd`)
    }
}

// output 

// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// 11 is odd
// 12 is even
// 13 is odd
// 14 is even
// 15 is odd


// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.

// replacing it with modulo 3 and 5 and the even/odd. i index 1- <100





// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc