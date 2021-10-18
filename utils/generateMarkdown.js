// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'Apache') {
		return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
	}

	if (license === 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
	}

	if (license === 'BSD') {
		return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
	}

	if (license === 'none') {
		return '';
	}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	console.log('Hellow!!!!!!', license);
	if (license != null) {
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
	// license link will go in table of contents
	// if there is link will take you to license section
	// if 'none' was selected have an empty string
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === 'MIT') {
		return `
# License
[MIT](https://choosealicense.com/licenses/mit/)
		`;
	};

	if (license === 'Apache') {
		return `
# License
[Apache](https://choosealicense.com/licenses/apache-2.0/)
		`;
	};

	if (license === 'BSD') {
		return `
# License
[BSD]()
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
	// console.log(data);
	return `# ${data.title} ${renderLicenseBadge(data.license)}

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
