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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
