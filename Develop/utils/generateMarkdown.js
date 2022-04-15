// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-green`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let suff;
  switch(license) {
    case 'MIT':
      suff = 'mit';
      break;
    case 'Apache 2.0':
      suff = 'apache-2.0';
      break;
    case 'Gnu v3.0':
      suff = 'agpl-3.0';
      break;
    case 'BSL':
      suff = 'bsl-1.0';
      break;
  }
  return `https://choosealicense.com/licenses/${suff}/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return `
    MIT License:
    A short and simple permissive license with conditions only requiring preservation
    of copyright and license notices. Licensed works, modifications, and larger works
    may be distributed under different terms and without source code.`
  } else if (license === 'Apache 2.0') {
    return `Apache License 2.0
    A permissive license whose main conditions require preservation of copyright and 
    license notices. Contributors provide an express grant of patent rights. Licensed 
    works, modifications, and larger works may be distributed under different terms 
    and without source code.`
  } else if (license === 'Gnu v3.0'){
    return `Permissions of this strongest copyleft license are conditioned on making 
    available complete source code of licensed works and modifications, which include
    larger works using a licensed work, under the same license. Copyright and license
    notices must be preserved. Contributors provide an express grant of patent rights.
    When a modified version is used to provide a service over a network, the complete 
    source code of the modified version must be made available.`
  } else if (license === 'BSL'){
    return `Boost Software License 1.0
    A simple permissive license only requiring preservation of copyright and license
    notices for source (and not binary) distribution. Licensed works, modifications, 
    and larger works may be distributed under different terms and without source code.`
  } else {
    return `No License Applied`;
  }
}

function generateContributorGithubs(contributors) {
  let conArray = contributors.split(',');
  let trimArray = [];
  for(id of conArray) {
    trimArray.push(id.trim());
  }
  let conMarkdown = ``;
  for (id of trimArray) {
    conMarkdown += `- [${id}](https://github.com/${id})\n`
  }
  return conMarkdown;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributors, license, tests, email, gitHub } = data;
  return `
  # ${title}

## Badges

![Apache](${renderLicenseBadge(license)})

## Description

${description}

## Table of Contents

- [Badges](#Badges)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

${installation}

## Usage

${usage}


## Credits

${generateContributorGithubs(contributors)}

## License

${renderLicenseSection(license)}

[CLICK FOR MORE ABOUT LICENSE](${renderLicenseLink(license)})

## Tests

${tests}

## My Github & Email

- [https://github.com/${gitHub}](https://github.com/${gitHub})
- [${email}](mailto:${email})

`;
}

module.exports = generateMarkdown;
