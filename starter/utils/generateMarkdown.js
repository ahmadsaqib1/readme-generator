// generateMarkdown.js
function generateMarkdown(data) {
  // Function to get the license badge URL based on the selected license
  function getLicenseBadgeURL(license) {
    switch (license) {
      case "MIT":
        return "https://img.shields.io/badge/License-MIT-yellow.svg";
      case "Apache":
        return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      case "GPL":
        return "https://img.shields.io/badge/License-GPLv3-blue.svg";
      default:
        return "";
    }
  }

  // Function to generate the license section with badge and notice
  function generateLicenseSection(license) {
    const licenseBadgeURL = getLicenseBadgeURL(license);
    return `## License

This project is licensed under the ${license} License - see the [LICENSE.md](LICENSE.md) file for details.`;
  }

  return `# ${data.title}
  
![badge](${getLicenseBadgeURL(data.license)})

## Description
${data.description}

## Table of Contents

- [Decription](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


${generateLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me:
- [GitHub: ${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
