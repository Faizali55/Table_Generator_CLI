#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("\n<<<<< Wellcome To The FaizCode Table-Generator-CLi >>>>>\n"));
let loop = true;
while (loop) {
    let myInput = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: "Enter Your Number:",
        },
    ]);
    let myNumber = myInput.num;
    if (myNumber) {
        console.log(chalk.yellow(`\nHere Is The Table Of ${myNumber} `));
        for (let i = 1; i <= 10; i++) {
            console.log(chalk.green(`\n${myNumber} x ${i} = ${myNumber * i}`));
        }
    }
    else {
        console.log(chalk.redBright("\nPlease Enter Your Number In Numerical Form\n"));
    }
    let moreTable = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: "Do You Want To Print Another table ???",
            default: false,
        },
    ]);
    if (!moreTable.more) {
        loop = false;
        console.log(chalk.magenta("\nThank You For Using This Table Generator\n"));
    }
}
