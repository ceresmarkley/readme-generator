function renderLicenseBadge(license) {
  // creates a string containing license badge URL which is linked to a license image. also replaces spaces and -.
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, "_").replace(/-/g, "--")}-blue)`;
  }
  // return empty string if there is no license
  return '';
}

function renderLicenseLink(license) {
  if (license) {}
    // return empty string if there is no license
    return '';
}

function renderLicenseSection(license) {
  if (license) {
    return `## License

* This App is licensed under ${renderLicenseBadge(license)}.

* For more information, please visit [${license}](${renderLicenseLink(license)}) on [OpenSource Licenses](https://opensource.org/licenses/).`;
  }
  // return empty string if there is no license
  return '';
}
function generateMarkdown(data) {
  return `# ${data.title}

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
