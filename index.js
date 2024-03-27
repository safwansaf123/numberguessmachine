// target in this coding that we have to done//
//1-   generate a random number//
//2-   user input for guessing number//
//3-   compare user input with computer generated numbers and show result//
import inquirer from "inquirer";
const randomNumber = 38;
const answer = await inquirer.prompt([
    {
        name: "guessTheNumber",
        type: "number",
        message: "Please Guess a Number",
    }
]);
if (answer.guessTheNumber === randomNumber) {
    console.log("congratulation you have guess the correct number");
}
else
    (console.log("guess the wrong number"));
// fixed number //
