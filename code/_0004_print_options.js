/*
Filename: _0004_print_options.js
Title: Different types of print options in javascript
Author: Raghava | GitHub: @raghavtwenty
Date Created: July 13, 2024 | Last Updated: July 13, 2024
Language: Javascript
*/

// Using console.log for basic printing
console.log("Hello, World!");

// Printing variables
let name = "Alice";
let age = 25;
console.log("Name:", name);
console.log("Age:", age);

// Using template literals (ES6) for formatted strings
console.log(`Name: ${name}, Age: ${age}`);

// Concatenation
console.log("Name: " + name + ", Age: " + age);

// Simple function for string formatting
String.prototype.format = function() {
    let args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
            ? args[number]
            : match;
    });
};

let formattedString = "Name: {0}, Age: {1}".format(name, age);
console.log(formattedString);

// Using toFixed for number formatting
let num = 123.456;
console.log("Number with 2 decimal places: " + num.toFixed(2)); 

// Using toPrecision for number formatting
console.log("Number with 4 significant digits: " + num.toPrecision(4)); 

// Advanced formatting using Intl.NumberFormat
let currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
console.log("Formatted currency: " + currencyFormatter.format(123456.789)); 
