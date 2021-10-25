// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'Apache License 2.0') {
		return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
	}

	if (license === 'MIT License') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
	}

	if (license === 'GNU GPLv3') {
		return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
	}

	if (license === 'Mozilla Public License 2.0') {
		return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
	}

	if (license === 'Boost Software License 1.0') {
		return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
	}

	if (license === 'none') {
		return '';
	}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	// console.log('Hello!!!!!!', license);
	if (license != 'none') {
		return `
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Testing](#testing)
5. [Questions](#questions)
6. [License](#license)
		`;
	} else {
		return `
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Testing](#testing)
5. [Questions](#questions)
		`;
	};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	// console.log('renderLicenseSection', license);
	if (license === 'MIT License') {
		return `
# License
[MIT](https://choosealicense.com/licenses/mit/)
		`;
	};

	if (license === 'Apache License 2.0') {
		return `
# License
[Apache](https://choosealicense.com/licenses/apache-2.0/)
		`;
	};

	if (license === 'GNU GPLv3') {
		return `
# License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
		`;
	};

	if (license === 'Mozilla Public License 2.0') {
		return `
# License
[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)
		`;
	};

	if (license === 'Boost Software License 1.0') {
		return `
# License
[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)
		`;
	};

	if (license === 'none') {
		return ``;
	};
	// if there is a license show section title and badge
	// if there is no license we want to get rid of it so add empty string
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	console.log('generateMarkdown', data);
	return `
# ${data.title} ${renderLicenseBadge(data.license)}

# Description
${data.description}

${renderLicenseLink(data.license)}

# Installation Instructions
${data.installation}

# Usage Info
${data.usageInfo}

# Contribution Guidelines
${data.contribution}

# Testing Instructions
${data.testInst}

${renderLicenseSection(data.license)}

# Questions
GitHub Username: [${data.github}](https://github.com/${data.github})


Email: <${data.email}>
	`;
};

module.exports = generateMarkdown;
