/*
    Ternary operator is the comprehensive & short version of conditional statments.
    Here's the syntax:
                        (statement) ? executes if statement is true : executes if statement is false
*/ 

// Basic ternary example:
const maxGovJobAge = 32;
let myAge = 33;
// myAge > maxGovJobAge ? console.log("Oh Pops! Watch yur knee grows") : console.log("Take this lolijob lil fella.");


// Complex ternary example: let's try same as login page.

let isLogedIn = true;
let passCode = "MAKIMA";
let showSecretMessage = false;

isLogedIn ? 
passCode === "MAKIMA" ? 
showSecretMessage ? 
console.log("Secret is: 'ALUKABHUJIA'") :
console.log("You cant affored the secret bruv.") :
console.log("Passcode is bhua.") : 
console.log("Please log in first.")