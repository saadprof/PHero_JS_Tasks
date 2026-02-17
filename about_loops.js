/*
    There are three types of loop in JavaScript.
        1. while loop: While loop executes while the condition is true. Syntax:
        let initiator    
        while(condition){
                code;
                increament/decrement;
        }
        
        2. for loop: For loop is a shorthand and compact version of while loop. It combines three components of loop (initiator, condition, increamentor/decreamentor).
            Syntax: for(let initiator; condition; increament/decreament){
                    code;
                }
        
        3. do while loop: Do while loop is similar to while loop but the loop always run once before checking the condition. Syntax:
            do{
                code;
                increament/decreament;
            } while (condition)
*/ 


// while loop.
let i = 1;  // iterator
while(i <= 10){
    // console.log("Value of i is: ", i);
    i++  // increament
}

// Reverse counting loop
i = 10
while(i > 0){
    // console.log("The reverse value of i is: ", i);
    i--; // Decreament
}



// for loop
for(let i = 1; i <= 10; i++){
    // console.log(`Value of i is: ${i}`);
}

// Reverse for loop
for(let i = 10; i >= 1; i--){
    console.log(`Value of i is: ${i}`);
}