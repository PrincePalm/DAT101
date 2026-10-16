"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let countUp = "";
let countDown = "";

for (let i = 1, j = 10; i <= 10; i++, j--) {
    countUp += i + " ";
    countDown += j + " ";
}

printOut(countUp);
printOut(countDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let target_Number = 15;
let guessed_Number = 0;

while (guessed_Number !== target_Number) {
    guessed_Number = Math.floor(Math.random() * 60) + 1;
}

printOut(guessed_Number);


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetNumber = 15;
let guessedNumber = 0;
let attempts = 0;

let startTime = Date.now();

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}

let endTime = Date.now();

printOut("Number guessed: " + guessedNumber);
printOut("Number of guesses: " + attempts);
printOut("Time taken: " + (endTime - startTime) + " milliseconds");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 2; i < 200; i++) {
    let divisor = 2;
    let isPrime = true;

    while (divisor < i) {
        if (i % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        printOut(i);
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) {
    let row = "";

    for (let k = 1; k <= 9; k++) {
        row += "K" + k + "R" + r + " ";
    }

    printOut(row);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let i = 1; i <= 5; i++) {
    let score = Math.floor(Math.random() * 236) + 1;
    let percentage = (score / 236) * 100;
    let grade;

    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Student " + i + ": " + score + " points, " + percentage.toFixed(1) + "%, Grade " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function matchString(aString, aNumber) {
    let count = 0;

    for (let i = 0; i < aString.length; i++) {
        if (aString[i] == aNumber) {
            count++;
        }
    }

    return count;
}

let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

let throwsStraight = 0;
let throwsThreePairs = 0;
let throwsTower = 0;
let throwsYahtzee = 0;

let totalThrows = 0;

do {
    let diceString = "";

    for (let i = 0; i < 6; i++) {
        diceString += Math.floor(Math.random() * 6) + 1;
    }

    let c1 = matchString(diceString, "1");
    let c2 = matchString(diceString, "2");
    let c3 = matchString(diceString, "3");
    let c4 = matchString(diceString, "4");
    let c5 = matchString(diceString, "5");
    let c6 = matchString(diceString, "6");

    let countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    totalThrows++;

    if (!foundStraight && countString == "111111") {
        foundStraight = true;
        throwsStraight = totalThrows;
        printOut("Full Straight: " + throwsStraight + " throws");
    }

    if (!foundYahtzee &&
        (c1 == 6 || c2 == 6 || c3 == 6 ||
         c4 == 6 || c5 == 6 || c6 == 6)) {
        foundYahtzee = true;
        throwsYahtzee = totalThrows;
        printOut("Yahtzee: " + throwsYahtzee + " throws");
    }

    if (!foundThreePairs &&
        (c1 == 2 && c2 == 2 && c3 == 2) ||
        (c1 == 2 && c2 == 2 && c4 == 2)) {
        // See corrected condition below.
    }

    if (!foundThreePairs &&
        [c1, c2, c3, c4, c5, c6].filter(x => x == 2).length == 3) {
        foundThreePairs = true;
        throwsThreePairs = totalThrows;
        printOut("Three Pairs: " + throwsThreePairs + " throws");
    }

    if (!foundTower &&
        (c4 == 4 && c2 == 2)) {
        foundTower = true;
        throwsTower = totalThrows;
        printOut("Tower: " + throwsTower + " throws");
    }

} while (!foundYahtzee || !foundStraight ||
         !foundThreePairs || !foundTower);

printOut(newLine);
