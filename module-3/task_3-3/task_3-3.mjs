"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function getDateTime() {
    const date = new Date();

    printOut(date.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));
    
};

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getDateTimePart2() {
    const date = new Date();

    printOut(date.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));

    return date;
}

const today = getDateTimePart2();

function getDaysUntil2XKO(today) {
    const releaseDate = new Date(2025, 4, 14);
    const difference = releaseDate - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

const daysLeft = getDaysUntil2XKO(today);

if (daysLeft > 0) {
    printOut("Only " + daysLeft + " days until 2XKO!");
} else if (daysLeft < 0) {
    printOut("2XKO was released " + Math.abs(daysLeft) + " days ago!");
} else {
    printOut("2XKO releases today!");
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}

calculateCircle(5);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateRectangle(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

calculateRectangle({ width: 5, height: 3 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemperature(temperature, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "Celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    } else if (type === "Fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (type === "Kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    } else {
        printOut("Invalid temperature type!");
        return;
    }

    printOut("Celsius: " + Math.round(celsius));
    printOut("Fahrenheit: " + Math.round(fahrenheit));
    printOut("Kelvin: " + Math.round(kelvin));
}

convertTemperature(100, "Celsius");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(gross, vatGroup) {
    let vat;

    vatGroup = vatGroup.toLowerCase();

    if (vatGroup === "normal") {
        vat = 25;
    } else if (vatGroup === "food") {
        vat = 15;
    } else if (
        vatGroup === "hotel" ||
        vatGroup === "transport" ||
        vatGroup === "cinema"
    ) {
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

    return (100 * gross) / (vat + 100);
}

printOut(calculateNetPrice(125, "normal"));
printOut(calculateNetPrice(115, "food"));
printOut(calculateNetPrice(110, "hotel"));
printOut(calculateNetPrice(200, "goblins"));


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateSpeed(distance, time, speed) {
    if (speed === undefined) {
        return distance / time;
    } else if (time === undefined) {
        return distance / speed;
    } else if (distance === undefined) {
        return speed * time;
    } else {
        return NaN;
    }
}

printOut(calculateSpeed(100, 2, undefined)); // 50 (speed)
printOut(calculateSpeed(100, undefined, 50)); // 2 (time)
printOut(calculateSpeed(undefined, 2, 50)); // 100 (distance)
printOut(calculateSpeed(100, undefined, undefined)); // NaN

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function adjustText(text, maxSize, character, addBefore) {
    while (text.length < maxSize) {
        if (addBefore) {
            text = character + text;
        } else {
            text = text + character;
        }
    }

    return text;
}

printOut(adjustText("Superman", 10, "*", true));
printOut(adjustText("Hello", 10, "*", false));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function sumNumbers(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

function testMath() {
    let nextNumber = 1;

    for (let line = 1; line <= 200; line++) {
        const leftCount = line + 1;
        const rightCount = line;

        const leftStart = nextNumber;
        const leftEnd = leftStart + leftCount - 1;

        const rightStart = leftEnd + 1;
        const rightEnd = rightStart + rightCount - 1;

        const leftSum = sumNumbers(leftStart, leftEnd);
        const rightSum = sumNumbers(rightStart, rightEnd);

        if (leftSum !== rightSum) {
            printOut("Failed on line " + line);
            printOut("Left sum: " + leftSum);
            printOut("Right sum: " + rightSum);
            return;
        }

        nextNumber = rightEnd + 1;
    }

    printOut("Maths fun!");
}

testMath();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(number) {
    if (number === 1 || number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

const result = factorial(5);
printOut("Factorial: " + result);

printOut(newLine);
