// Include the classes for Employee and subclasses
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

// Include the packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Include the helper functions
const generateHTML = require("./src/generateHTML");

// an array of questions that will be asked of the user to populate the object
/*
question 1: What type of Employee? use a list and choose Manager, Engineer, Intern
question 2: Name?
question 3: ID?
question 4: email? include some kind of validation
question 5: depending on answer to Q1, enter office, github, or school; use the when property on each question so that the if returns true for the associated role. inquirer stores the responses in an object called answers
question 6: Do you want to enter another? type: confirm, name: askAgain; this loops the prompts
*/
const question = [
    {
        name: "employeeType",
        message: "Please choose the type of Employee:",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        name: "employeeName",
        message: "Please enter the employee's name:",
        type: "input"
    },
    {
        name: "employeeID",
        message: "Please enter the employee's ID number:",
        type: "number"
    },
    {
        name: "empEmail",
        message: "Please enter the employee's email address:",
        type: "input",
        validate: function (empEmail) {
            // Regex mail check (return true if valid mail), provided by Liberateur on stackoverflow.com
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(empEmail);
        }
    },
    {
        when (answers) {
            return answers.employeeType == "Manager";
        },
        name: "employeeOffice",
        message: "Please enter the manager's office:",
        type: "input"
    }, 
    {
        when (answers) {
            return answers.employeeType == "Engineer";
        },
        name: "employeeGithub",
        message: "Please enter the engineer's Github username:",
        type: "input"
    },
    {
        when (answers) {
            return answers.employeeType == "Intern";
        },
        name: "employeeSchool",
        message: "Please enter the intern's school:",
        type: "input"
    },
    {
        name: "askAgain",
        message: "Would you like to enter another employee's information? Y/N",
        type: "confirm"
    }
];

//const questions = [];

// this array contains all of the answer objects from however many loops of the inquirer prompt
const output = [];

// create a function to initiatlize the app by calling inquirer and feeding in questions
function init() {
    // start inquirer prompts to get answers from the user
    inquirer.prompt(question)
    .then((answer) => {
        // push the answer (all data needed for 1 employee) into the output array
        
        output.push(answer);

        // use a nested prompt to 
        // this loops the prompt if askAgain is true; example used from https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/recursive.js
        if (answer.askAgain) {
            init();
        } else {
            //console.log(output);
            writeToFile("index", output);
        }
    });
}

// call the function that will generate the HTML and pass in the results from inquirer
function writeToFile(fileName, data) {
    // this passes the data object (the answers from the inquirer prompt) to the function to generate the markdown file
    fs.writeFile(`./public/${fileName}.html`, generateHTML(data), (err) =>
    err ? console.error(err) : console.log("HTML File has been generated.")
    );
}

// start the app by calling the iniatilization function
init();