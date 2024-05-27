import inquirer from "inquirer";
console.log("\n<<<<< Wellcome To The FaizCode Table-Generator-CLi >>>>>\n");
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
        console.log(`\nHere Is The Table Of ${myNumber} `);
        for (let i = 1; i <= 10; i++) {
            console.log(`\n${myNumber} x ${i} = ${myNumber * i}`);
        }
    }
    else {
        console.log("\nPlease Enter Your Number In Numerical Form\n");
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
        console.log("\nThank You For Using This Table Generator\n");
    }
}
