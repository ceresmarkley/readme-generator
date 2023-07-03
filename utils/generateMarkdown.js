function renderLicenseBadge(license) {
  // creates a string containing license badge URL which is linked to a license image. also replaces spaces and -.
  if (license) {
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue)`;
  }
  // return empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}


## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions

Got a question? Reach me @
* Email:  ${data.email}
* GitHub: [@${data.username}](https://github.com/${data.username}/)

---

© 2023 Ceres Markley. All Rights Reserved.`;
}

module.exports = generateMarkdown;
