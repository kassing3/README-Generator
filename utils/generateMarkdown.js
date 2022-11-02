// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    case "Boost Software License 1.0":
      return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
    case "BSD 3-Clause License":
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
    case "Creative Commons":
      return "https://licensebuttons.net/l/zero/1.0/80x15.png"
    case "Eclipse Public License 1.0":
      return "https://img.shields.io/badge/License-EPL_1.0-red.svg"
    case "GNU GPL v3":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg"
    case "The Hippocratic License 3.0":
      return "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg"
    case "IBM Public License Version 1.0":
      return "https://img.shields.io/badge/License-IPL_1.0-blue.svg"
    case "ISC License (ISC)":
      return "https://img.shields.io/badge/License-ISC-blue.svg"
    case "The MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg"
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
    case "Open Data Commons":
      return "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg"
    case "The Perl License":
      return "https://img.shields.io/badge/License-Perl-0298c3.svg"
    case "SIL Open Font License 1.1":
      return "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg"
    case "Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg"
    default:
      return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0"
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt"
    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause"
    case "Creative Commons":
      return "http://creativecommons.org/publicdomain/zero/1.0/"
    case "Eclipse Public License 1.0":
      return "https://opensource.org/licenses/EPL-1.0"
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0"
    case "The Hippocratic License 3.0":
      return "https://firstdonoharm.dev"
    case "IBM Public License Version 1.0":
      return "https://opensource.org/licenses/IPL-1.0"
    case "ISC License (ISC)":
      return "https://opensource.org/licenses/ISC"
    case "The MIT License":
      return "https://opensource.org/licenses/MIT"
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0"
    case "Open Data Commons":
      return "https://opendatacommons.org/licenses/by/"
    case "The Perl License":
      return "https://opensource.org/licenses/Artistic-2.0"
    case "SIL Open Font License 1.1":
      return "https://opensource.org/licenses/OFL-1.1"
    case "Unlicense":
      return "http://unlicense.org/"
    default:
      return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
   return `This project is licensed under [${license}](${renderLicenseLink(license)})`
  } else {
    return ""
  }
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})


  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing 
  If you would like to contribute to this application or package, please follow the followings applicable guidelines or the [Contributor Covenant](https://www.contributor-covenant.org/):
  
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

  If you have any questions about this repository or to find more of my work, please open an issue or view my [GitHub](https://github.com/${data.username}). You're more than welcome to also contact me directly via email at ${data.email}.

`;
}

module.exports = generateMarkdown;
