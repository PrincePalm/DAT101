"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const result = 2 + 3 * 2 - 4 * 6;
console.log(result);

const result2 = 2 + 3 * (2 - 4) * 6;
console.log(result);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

millimeters = (25 * 1000) + (34*10)
millPrInch = 25.4

sumPart2 = millimeters / millPrInch
console.log(sumPart2);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
console.log(part3Answer);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4Minutes = 6322.52;

// Step 1: Find whole days
let remainder = part4Minutes / (24 * 60);
const part4Days = Math.floor(remainder);

// Step 2: Isolate the Remainder and Find the Hours
remainder = (remainder - part4Days) * 24;
const part4Hours = Math.floor(remainder);

// Step 3: Isolate the Remainder and Find the Minutes
remainder = (remainder - part4Hours) * 60;
const part4WholeMinutes = Math.floor(remainder);

// Step 4: Isolate the Remainder and Find the Seconds
remainder = (remainder - part4WholeMinutes) * 60;
const part4Seconds = Math.floor(remainder);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const dollars = 54;

const nok = Math.round(dollars * nokRate);
const usd = Math.round(76 * usdRate);

console.log(nok);
console.log(usd);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand.";

// Number of characters
console.log(text.length);

// Character at position 19
console.log(text.charAt(19));

// 8 characters starting at position 35
console.log(text.substring(35, 43));

// Index where "earth" starts
console.log(text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(5 > 3);

console.log(7 >= 7);

console.log("a" > "b");

console.log("1" < "a");

console.log("2500" < "abcd");

console.log("arne" !== "thomas");

console.log(2 === 5);

console.log("abcd" > "bcd");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(Number("254"));
console.log(Number("57.23"));
console.log(Number("25 kroner"));

console.log(parseInt("254"));
console.log(parseInt("57.23"));
console.log(parseInt("25 kroner"));

console.log(parseFloat("254"));
console.log(parseFloat("57.23"));
console.log(parseFloat("25 kroner"));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;

console.log(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 131;

const weeks = Math.floor(days / 7);
const remainingDays = days % 7;

console.log(weeks);
console.log(remainingDays);

printOut(newLine);