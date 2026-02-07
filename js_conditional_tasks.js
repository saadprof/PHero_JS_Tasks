
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
