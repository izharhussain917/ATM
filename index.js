import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    let OperationAnswer = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    // console.log(OperationAnswer);
    if (OperationAnswer.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        if (myBalance <= 0) {
            console.log("Insuficient Balance !");
        }
        ;
        console.log("your remaining balance is: " + myBalance);
    }
    else if (OperationAnswer.Operation === "Check Balance") {
        console.log("your balance is: " + myBalance);
    }
    else if (OperationAnswer.Operation === "Fast Cash") {
        let SelectAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please Select the Amount:",
                type: "list",
                choices: ["1000", "2000", "5000", "10,000"]
            }
        ]);
    }
}
else {
    console.log("Incorrect Pin code");
}
