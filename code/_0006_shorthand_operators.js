/*
Filename: _0006_shorthand_operators.js
Title: Shorthand mathematical operators in javascript
Author: Raghava | GitHub: @raghavtwenty
Date Created: July 13, 2024 | Last Updated: July 13, 2024
Language: Javascript
*/

// Addition assignment
let addAssign = 10;
addAssign += 5; 
console.log("10 += 5 =", addAssign);

// Subtraction assignment
let subtractAssign = 10;
subtractAssign -= 3; 
console.log("10 -= 3 =", subtractAssign);

// Multiplication assignment
let multiplyAssign = 10;
multiplyAssign *= 2; 
console.log("10 *= 2 =", multiplyAssign);

// Division assignment
let divideAssign = 10;
divideAssign /= 2; 
console.log("10 /= 2 =", divideAssign);

// Modulus assignment
let modulusAssign = 10;
modulusAssign %= 3; 
console.log("10 %= 3 =", modulusAssign);

// Exponentiation assignment (ES7)
let exponentiationAssign = 2;
exponentiationAssign **= 3; 
console.log("2 **= 3 =", exponentiationAssign);
