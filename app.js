import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 9000);
console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "")
                return true;
        },
        return: "Please Enter a non-empty value",
    },
    {
        name: "courses",
        type: "list",
        message: "select the Course to enrolled",
        choices: [
            "Web development",
            "Graphic Designing",
            "Ms Office",
            "Wordpress",
            "Amazon",
            "Shopify",
        ],
    },
]);
const tuitionFee = {
    "Web development": 2000,
    "Graphic Designing": 3000,
    "Ms Office": 1500,
    "Wordpress": 3500,
    "Amazon": 5000,
    "Shopify": 10000,
};
console.log(`\nTuition Fees: ${tuitionFee[answer.courses]}\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentMethod = await inquirer.prompt([{
        name: "Payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Please Tranfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty Value";
        }
    }
]);
console.log(`\n Please Select Your Payment Method ${paymentMethod.Payment}\n`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentMethod.Amount); //parse float string ko parse krka number me change karta hai
if (tuitionFees === paymentAmount) {
    console.log(`Congratulations! You have Successfully Enrolled in  ${answer.courses} \n`);
    let ans = await inquirer.prompt([{
            name: "Select",
            type: "list",
            message: "What would You Like to do next?",
            choices: ["View Status", "Exit"]
        }]);
    if (ans.select === "View status") {
        console.log("\n***************Status******************\n");
        console.log(`Student Name : ${answer.student}`);
        console.log(`Student ID : ${randomNumber}`);
        console.log(`Student Courses : ${answer.courses}`);
        console.log(`Tuition Fees Paid: ${paymentAmount}`);
        console.log(`Balance : ${myBalance += paymentAmount}`);
    }
    else {
        console.log(" \nExiting Student Management System");
    }
}
else {
    console.log(`Invalid Amount Due to Course`);
}
