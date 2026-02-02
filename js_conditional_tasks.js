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

if(burgerQuantity * burgerPrice > 500){
    console.log("You'll get 2 free coke with the purchase sir.");
} else if((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000){
    console.log("You'll get 2 free coke and a free french coke sir.")
} else if((burgerQuantity * burgerPrice) > 500 && ((combo1Quantity * combo1Price) > 1000 || (combo2Quantity * combo2Price) > 1000)){
    console.log("Throwing a party or something. Here you go with a 5 coke and a french fry on the house.");
} else if(burgerQuantity < 3){
    console.log("Wanna get a coke? It'll cost only 25 taka.");
}

