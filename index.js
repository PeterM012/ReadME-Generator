// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMD = require("./generateMarkdown.js");


// Created an array of questions for user input
const questions = [
  {
    message: "What is your Github username?",
    name: "name",
  },
  {
    message: "What is your email address?",
    name: "email",
  },
  {
    message: "What is your project's name?",
    name: "project",
  },
  {
    message: "Please write a short description of your project:",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "GNU", "Apache 2.0", "ISC"],
  },
  {
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    message: "What command should be listed as a contributor?",
    name: "credit",
  },
  {
    message: "What features should be listed?",
    name: "features",
  },
  {
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    message: "What does the user need to know about using the repo?",
    name: "repo",
  },
  {
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

// Creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// Creates a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
    var file = "README.md"
    var markDown = genMD.generateMarkdown(response)
    writeToFile(file,markDown)      
    });
}

// Function call to initialize app
init();
