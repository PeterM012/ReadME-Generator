const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      message: 'What is your Github username?',
      name: 'name',
    },
    {
        message: 'What is your email address?',
        name: 'email',
    },
    {
        message: "What is your project's name?",
        name: 'project',
    },
    {
        message: "Please write a short description of your project:",
        name: 'description',
    },
    {
        message: "What kind of license should your project have?",
        name: 'license',
    },
    {
        message: "What command should be run to install dependencies?",
        name: 'dependencies',
    },
    {
        message: "What command should be run to run tests?",
        name: 'tests',
    },
    {
        message: "What does the user need to know about using the repo?",
        name: 'repo',
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing',
    },
])

.then((response) => {
    fs.appendFile('README.md', formatData(response), (err) =>{
        err ? console.error(err): console.log('Success!')
    })
});

function formatData(data) {
    let output = "Github UserName:\n" + data.name + "\n";
    output += "Github Email: " + data.email + "\n";

    
    output += "Title: " + data.project + "\n";
    output += "Description: " + data.description + "\n";
    output += "License: " + data.license + "\n";
    output += "Dependencies: " + data.dependencies + "\n";
    output += "Test: " + data.tests + "\n";
    output += "Test: " + data.repo + "\n";
    output += "Test: " + data.contributing + "\n";

    return output;
}
