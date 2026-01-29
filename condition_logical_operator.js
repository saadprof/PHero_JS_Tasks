/*
    Beside conditional operators, there are some logical operators also.
    These logical operators are:
        i. AND operator && -> AND operator evaluates both operands, if only both side represents boolean true value, then it returns true, else it return false.
        ii. OR operator || -> OR operator searches for only one true value, if there is only one operand with true value, it returns true.
*/ 

let weight = 60;
let isHeavy = true;
let canLift = true;

// AND operator && Example:
if(weight > 50 && isHeavy == true){
    console.log("Oo man, It's heavy. I cant puff.");
}

if(weight > 50 && isHeavy == false){ // If any side of operand is false it wont execute.
    console.log("Oo man, It's heavy. I cant puff.");
} else{
    console.log("This wont work the same cause someone is lyin.");
}
console.log("------------------------------------");


// OR operator || Example:
if (weight < 60 || canLift == true){
    console.log("Ma boo is less than 60, i can lift him in snap.");
}

if (weight < 50 || canLift == false){ // Here the else block will only executes, cause both operand is false.
    console.log("Ma boo is less than 60, i can lift him in snap.");
} else{
    console.log("This nikka is lyin");
}