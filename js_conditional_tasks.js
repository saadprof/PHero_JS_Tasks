
/*-----------  Burger Purchase Discount Calculator --------------*/
/*
    Discount calculator for a returant. 
    Offers are on: 1. burger purchase ammounting over 500 tk will get 2 free coke.
                    2. Combo purchase over 1000tk will ge 2 free coke with a free french fry.
                    3. If get both, will get 5 coke and a french fry.
    Note: coke is 25tk & french fry is 70tk
*/ 

let burgerPrice = 230;
let combo1Price = 1199;
let combo2Price = 1399;
let cokePrice = 25;

let burgerQuantity = 3;
let combo1Quantity = 0;
let combo2Quantity = 1;

// if(burgerQuantity * burgerPrice > 500){
//     console.log("You'll get 2 free coke with the purchase sir.");
// } else if((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000){
//     console.log("You'll get 2 free coke and a free french coke sir.")
// } else if((burgerQuantity * burgerPrice) > 500 && ((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000)){
//     console.log("Throwing a party or something. Here you go with a 5 coke and a french fry on the house.");
// } else if(burgerQuantity < 3){
//     console.log("Wanna get a coke? It'll cost only 25 taka.");
// }

if((burgerQuantity * burgerPrice) > 500 && ((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000)){
    console.log("Throwing a party or something. Here you go with a 5 coke and a french fry on the house.");
} else if((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000){
    console.log("You'll get 2 free coke and a free french coke sir.")
} else if(burgerQuantity * burgerPrice > 500){
    console.log("You'll get 2 free coke with the purchase sir.");
} else if(burgerQuantity < 3){
    console.log("Wanna get a coke? It'll cost only 25 taka.");
}




/* ---------------- BMI Calculator -------------------*/
/*
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/ 

let weight = 55;
let height = 1.73;
let BMI = weight / (height ** 2);
if(BMI < 18.5){
    console.log("Eat some calories cuh, You a bone. BMI is: ", BMI);
} else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("Perfect! Now maintain this state. BMI is: ", BMI);
} else if(BMI >= 25 && BMI <= 29.9){
    console.log("Ate too much! Give 20 push-ups now. BMI is: ", BMI);
} else{
    console.log("The Earth won't shake cause you can't walk. BMI is: ", BMI);
}



/*  ------------------- Student's Grade Calculator -------------------  */
/*
    Create a grade calculator for student's based on these result score
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
*/ 
let result = 20;
if(result >= 90 && result <= 100){
    console.log(result, "is absolute banger. Bright student.");
} else if(result >= 80 && result <= 89){
    console.log(result, "still a banger. Keep it up.");
} else if(result >= 70 && result <= 79){
    console.log(result, "youre a cunt cause youre a middle child.");
} else if(result >= 60 && result <= 69){
    console.log(result, "Throw yourself out of the window.");
} else{
    console.log(result, "!!!  ...  It's okay. A result can't decide our destiny. Oneday we have to die anyway.");
}



/*  ------------------ Friendship based on grade -------------------------*/
/*
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
*/ 

let myResult = 80;
let friendsResult = 40;

if(myResult >= 80){
    if(friendsResult >= 80){
        console.log("Dude, let's have MaccyD.");
    } else if(friendsResult < 80 && friendsResult >= 60){
        console.log("Sometime it's okay to be in second row. But keep pushing.");
    } else if(friendsResult < 60 && friendsResult >= 40){
        console.log("Don't use social media now. Focus on your routine.");
    } else{
        console.log("I'll be leaving soon. Peace");
    }
} else{
    console.log("Well, I'm off myself now.");
}



/* ---------------------- Ternary Operator Output ------------------*/
/*
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. 
if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. also, write it using ternary operator.
*/ 
let num1 = 55;
let num2 = 68;
let sresult;

// Doing this task using if-else

    // if(num1 > num2){
    //     sresult = num1 * 2
    // } else{
    //     sresult = num1 + num2
    // }

num1 > num2 ? sresult = num1 * 2 : sresult = num1 + num2;
console.log("The result is: ", sresult);




/* ------------------------- Bus Fare Calculator ---------------------- */
/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 35;
let ticketFare = 800;
let isStudent = true;

if(age < 10){
    console.log(`You're a baby. Yon dont have to pay. Fare is: ${ticketFare*0}`);
} else if(age >= 60){
    console.log(`Senior Citizen should be looked upon. Fare is: ${ticketFare - ticketFare*.15} with 15% discount.`);
} else if((age > 10 || age < 60) && isStudent){
    console.log(`A obedient student is asset for Capitalists. Your fare is: ${ticketFare - ticketFare*.50} with 50% discount.`);
} else{
    console.log("Sir. The fare is 800 taka.");
}