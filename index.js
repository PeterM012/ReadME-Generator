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
        type: "list",
        message: "What kind of license should your project have?",
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
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
    fs.writeFile('README.md', formatData(response), (err) =>{
        err ? console.error(err): console.log('Success!')
    })
});

function formatData(data) {
    let output = "### Title: " + data.project + "\n";
    output += "[![License: MIT](https://img.shields.io/badge/License-" + data.license + "-blue.svg)](https://opensource.org/licenses/" + data.license + ")";
    output += "## Description\n" + data.description + "\n";
    output += "## Table of Contents:\n" 
    output += "- [Installation](#installation)\n";
    output += "- [Usage](#usage)\n";
    output += "- [License](#license)\n";
    output += "- [Contributing](#contributing)\n";
    output += "- [Tests](#test)\n";
    output += "- [Questions](#questions)\n";
    output += "## Installation\n" + data.dependencies + "\n";
    output += "## Usage\n" + data.repo + "\n";
    output += "## License\n" + data.license + "\n";
    output += "## Contributing\n" + data.contributing + "\n";
    output += "## Test\n" + data.tests + "\n";
    output += "## Questions\n" + "If you have any questions about the repo, open an issue or contact me directly at " + data.email + ". You can find more of my work at [" + data.name + "](https://github.com/" + data.name + ")." + "\n"
   

    return output;
}
