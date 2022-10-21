// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "[![License: MIT](https://img.shields.io/badge/License-" +
  license.replace("-", "_") +
  "-blue.svg)](https://opensource.org/licenses/" +
  license +
  ")\n";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "https://opensource.org/licenses/" + license + "\n";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "## License\n" + renderLicenseLink(license);
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = "# " + data.project + "\n\n";
  output += renderLicenseBadge(data.license);
  output += "## Description\n" + data.description + "\n";
  output += "## Table of Contents:\n";
  output += "- [Installation](#installation)\n";
  output += "- [Usage](#usage)\n";
  output += "- [License](#license)\n";
  output += "- [Contributing](#contributing)\n";
  output += "- [Tests](#test)\n";
  output += "- [Questions](#questions)\n";
  output += "## Installation\n" + data.dependencies + "\n";
  output += "## Usage\n" + data.repo + "\n";
  output += "## Credit\n" + data.credit + "\n";
  output += renderLicenseSection(data.license)
  output += "## Features\n" + data.features + "\n";
  output += "## Contributing\n" + data.contributing + "\n";
  output += "## Test\n" + data.tests + "\n";
  output +=
    "## Questions\n" +
    "If you have any questions about the repo, open an issue or contact me directly at " +
    data.email +
    ". You can find more of my work at [" +
    data.name +
    "](https://github.com/" +
    data.name +
    ")." +
    "\n";

  return output;

}

module.exports = {
  generateMarkdown
}
