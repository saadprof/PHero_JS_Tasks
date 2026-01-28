/*
    There are 2 categories of 'Data':

    1. Primitive - These value are immutable that can't be changed after creation and can only hold one type of data at a time.
        i. Numeric : Includes every integer, float numbers.
            i.e -> 12425, 142.676762, -724, -823.54
        ii. String : Everything inside single quote '', double quote "" or backtick ``
            i.e -> 'Hi',  "Hello",  `Hola!`
        iii. Boolean : Logical 'true' or 'false' value
            i.e -> true,  false
        iv. Undefined : A variable without defined value inside it.
            i.e -> var fung;  returns undefined
        v. Null : A value on its own. Assigning with this value always return 'null'
            i.e -> var void = null;
        vi. BigInt : Supports for Arbitrary number like +(2^53-1) to -(2^53-1). Only used for pin point precision. Ends with 'n'
            i.e -> const coordinates = 687685172687216875417254n;
        vii. Symbol : Symbols are used to create unique identifiers for objects.
            i.e -> let id = Symbol("Id"); Different variables with same description will never compared be same;

    2. Non-Primitive - These value can be muted and hold collection of data types.
        i. Array : Organized set of values with index number of 0.
        ii. Object : Unorganized set of values.
        iio. function : Block of codes. Fast-Class Object
*/

// Numeric Example:
let num1 = 5617;
let num2 = -6736;
let num3 = 352.573;
let num4 = -743.157;
console.log(num1, num2, num3, num4);
console.log('------------------------------------');

// String Example:
let str1 = 'Hi, How Are You.';
let str2 = "Hope, You're not falling behind.";
let str3 = `I believe in you`;
console.log(str1, str2, str3);
console.log('------------------------------------');

// Boolean Example:
let isHappy = true;
let isSad = false;
console.log(isHappy, isSad);
console.log('------------------------------------');

// Undefined Example:
let notDefinedYet;
console.log(notDefinedYet);
console.log('------------------------------------');

// Null Example:
let countTheStars = null;
console.log(countTheStars);
console.log('------------------------------------');

// BigInt Example:
let hairOnDonky = 6767219267245454274n;
console.log(hairOnDonky);
console.log('------------------------------------');

// Sybmol creates unique identifier for object. Below both with same description is different.
let Id1 = Symbol('ID');
let Id2 = Symbol('ID');
console.log(Id1, Id2);
console.log('------------------------------------');