//render license badge image
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[<img src="https://img.shields.io/badge/License-MIT-yellow.svg">]';
      break;
    case "Apache 2.0":
      return '[<img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg">]';
      break;
    case "GNU GPL":
      return "[<img src=https://img.shields.io/badge/License-GNU%20GPL-blue>]";
      break;
    case "Other/None":
      return "";
      break;
    default:
      return;
  }
}

//render link to license
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPL":
      return "(https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;
    case "Other/None":
      return "";
      break;
    default:
      return;
  }
}

//render license section if chosen
function renderLicenseSection(license) {
  if (license) {
    return `${license}`;
  } else return;
}

//generate markdown
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}${renderLicenseLink(data.License)}

  ## Table of Content 

- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${data.Description}

## Installation 
${data.Installation}

## Usage 
${data.Usage}

## License 
${renderLicenseSection(data.License)}

## Contributing 
${data.Contribution}

## Tests 
${data.Test}

## Questions 
Email: ${data.Email}
Github Profile: [Github](https://github.com/${data.Github})

`;
}

module.exports = generateMarkdown;
