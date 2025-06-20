console.log("LOOP PRACTICE QS");



// Question 1: Countdown Timer
// Write a for loop that logs a countdown from 10 down to 1. 
// After the loop, log "Lift off!".
console.log("QNO1) countdown from 10 down to 1 :")
for (let i = 10; i > 0; i--) {
    console.log(i)

}
console.log("lift off!")



// Question 2: Sum of First N Numbers
// Write a for loop that calculates the sum of all 
// integers from 1 to a given number N. Store the sum in
//  a variable and log it. (Let N be 5 for testing).
console.log(" qno2) sum until no :")
let no = 6;
let sum = 0;

for (let i = 1; i <= no; i++) {
    sum += i

}
console.log("sum : ", sum)

// Question 3: Guess the Secret Number
// Write a while loop that simulates a simple "guess the number"
//  game.
console.log("qno 3) Guess the Secret Number : ")
let Secret_no = 77;
let guess = 0;
while (guess !== Secret_no) {
    console.log("guessing :", guess)
    guess++
}
console.log(`Congratulations! You found the secret number: ${Secret_no}`)



// Question 4: Bank Balance until Target
// You start with $100 in a bank account. Each year, your money 
// doubles. Write a while loop that calculates how many years it
//  takes for your bank balance to reach or exceed $1000. Log the
//  balance and year for each iteration.

console.log("qno 4) Bank Balance until Target: ")
let current_money = 100
let current_year = 0
while (current_money <= 1000) {

    current_money = current_money * 2
    current_year = current_year + 1
    console.log(`year${current_year} : balance ${current_money}`)

}
console.log(`it took ${current_year} to reach 1000`)


// Question 5: Force Valid Input
// Write a do...while loop that prompts the user (if in a browser)
//  to enter a number greater than 100. The loop should keep 
// prompting until a valid number (greater than 100) is entered.
//  Log the valid number once it's received.
console.log("qno5) force valid input :")
let inp_num;

do {

    inp_num = prompt("enter any number greater than 100")
    inp_num = parseInt(inp_num)
    if ((inp_num < 100) || isNaN(inp_num)) {
        alert("plz enter number greater than 100")
    }

} while ((inp_num < 100) || isNaN(inp_num));
console.log("you enter valid number", inp_num)

// Scope Issue: The inp_num variable is declared using let inside the do block. This means it's only accessible within that block,
//  and the while condition outside the block cannot "see" it.


//         Question 6: List Object Properties and Values
// You have an object representing a book. Use a for...in loop to 
// iterate over its properties and log each property name (key) along
//  with its corresponding value.

console.log("qno6) book overview :")
const book = {
    title: "The JavaScript Way",
    author: "Christian Heilmann",
    pages: 450,
    publishedYear: 2020
};

for (const keys in book) {
    // we intialize variable of element name with value of obj value
    const element = book[keys];
    // in this loop keys is your book keys if you want to access your 
    // obj keys just write keys
    console.log(keys + " :", element)

}
// using for in loop for array
// reason : using for in loop for iterating over array is not good 
// choice as it also print indices with array and sometimes it can cause
// // bug so for iterating arr use for of loop or for each
// for...in is bad for arrays because it iterates over property names (keys) as strings,
//  not the array's actual elements, and can include unexpected inherited properties, leading to bugs.
// For iterating arrays, always use for...of (for values) or forEach() (for values and indices) instead.

// EXAMPLE 
let arr = ["A", "B", "C"]
for (const key in arr) {

    const element = arr[key];
    console.log(key + " :", element)

}


//    Question 7: Find Longest Word in an Array
// You have an array of words. Use a for...of loop to find and log
//  the longest word in the array. If there are multiple words of the same longest length, 
// any one of them is fine.

// ALERT : UNDERSTAND THIS QS DEEPLY
let names = ["zara", "ali", "ahmed hussan", "hunza"]
let longestword = ""

for (const name of names) {
    if (name.length > longestword.length) {
        // longestword length is zero so it compares with all word 
        // and after every iteration if name.length>longestword.length
        // condition true then it will pass current name to longestname

        // and if name.length>longestword.length is false then below statement 
        // will be skip and then longest word will not be updated and loop 
        // check other names
        longestword = name
    }

}
console.log("The longest word is:", longestword);












