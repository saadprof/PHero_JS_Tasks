/*
    In this chapter, I'll  discuss about all conditional code syntex i know.
    
    i. Code inside the block only executes when the condition is true:
            if(condition){
                // Code Execution;
            }
    ii. Pair with if block, code of else block only executes when the if block doesn't executes.
            if(condition){
                // This code doesn't executes;
            } else{
                // This block of code executes;
            }
    iii. else if block of code adds extra scope to execute different result based on conditions.
            if(condition){

            } else if(condition){
            
            } else{
                
            }
    iv. Switch statement is similar but a big chunk of code. Based on condition, cases executes.
*/

let patataPrice = 230;
let pathorPrice = 90;
let scumWater = 120;

// if conditional:
if (patataPrice > pathorPrice) {
    console.log("Tie stone to your stomach cause you can't afford a patata.");
}
// Below line will never execute because the condition isn't true.
if (patataPrice < pathorPrice) {
    console.log("This line won't executes for sure.");
}
console.log("------------------------------------");

// if...else statement:
if (patataPrice < pathorPrice) {
    console.log("Tie stone to your stomach cause you can't afford a patata.");
} else {
    console.log("Yeeeeey! Eat patata, Die like Sasha.");
}
console.log("------------------------------------");

// if...else if... else statement:
if (patataPrice < pathorPrice) {
    console.log("Tie stone to your stomach cause you can't afford a patata.");
} else if (scumWater > pathorPrice) {
    console.log("Drink this scum watah Son.");
} else {
    console.log("Yeeeeey! Eat patata, Die like Sasha.");
}
console.log("------------------------------------");


// Example of switch statement:
switch (1 > 2){
    case true:
        console.log("You're a Honest is the best policy.");
        break;
    case false:
        console.log("Why da faq are you lyin?");
        break;
}
console.log("------------------------------------");