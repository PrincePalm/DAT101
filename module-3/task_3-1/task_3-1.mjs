"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeuptime = 9;
let bustime = 7;

if(wakeuptime <= bustime) {
    printOut("You caught the bus!");
} else if(wakeuptime == 8) {
    printOut("Take the train boy!");
} else if(wakeuptime >= 8) {
    printOut("Way too late! Take the car!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = -1;

if(number > 0) {
    printOut("Positive");
} else if(number < 0) {
    printOut("Negative");
} else if(number == 0) {
    printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let uploadedfile = Math.floor(Math.random() * 8) + 1;

let minMP = 4

printOut("This image file is " + uploadedfile + " MB");

if(uploadedfile >= minMP) {
    printOut("Thank you");
} else if(uploadedfile < minMP) {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("This image file is " + uploadedfile + " MB");

if(uploadedfile >= 6) {
    printOut("The image is too large");
} else if(uploadedfile >= minMP) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",  
"Jun", "Juli", "August", "September", "October", "November", "December"]; 
const noOfMonth = monthList.length; 
const monthName = monthList[Math.floor(Math.random() * noOfMonth)]; 

printOut(monthName);

if(monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You don't need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(monthName);

const monthList31 = ["January", "Mars", "May", "July", "August", "October", "December"];

if(monthName == "February") {
    printOut("This month has 28 days");
 } else if(monthList31.includes(monthName)) {
    printOut("This month has 31 days");
 } else {
    printOut("This month has 30 days");
 }

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(monthName);

if(monthName.includes("Ma")) {
    printOut("The art gallery is closed");
} else if(monthName == "April") {
    printOut("The art gallery is open next door");
} else {
    printOut("The art gallery is open");
}
printOut(newLine);
