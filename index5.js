#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessTheNumber",
        type: "number",
        message: "please guess a number in between 1 to 6:  "
    }
]);
if (answer.guessTheNumber === randomNumber) {
    console.log("YOU GUESSED THE RIGHT NUMBER");
}
else
    (console.log("YOU guess the wrong number"));
