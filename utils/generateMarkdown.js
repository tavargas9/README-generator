// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Mozilla') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'IBM') {
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    } else {
        return '';
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== '') {
        return '[LICENSE](./LICENSE)';
    } else {
        return '';
    };
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== '') {
        return `This project is available under the ${license} license. See ${renderLicenseLink(license)} for more info.`
    } else {
        return '';
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Technologies Used](#Technologies-Used)
- [Questions](#Questions)
- [Credits](#Credits)

## Installation

${data.installation}

## Usage

${data.usage}

## License 

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Technologies Used

${data.technologies}

## Questions

If there are any questions, feel free to reachout to me on [GitHub](https://github.com/${data.github}), or send me an [email](mailto:${data.email}).

## Credits

This README was generated using [README Generator](https://github.com/tavargas9/README-generator) created by [Tomas Vargas](https://github.com/tavargas9).
`;
};

module.exports = generateMarkdown;