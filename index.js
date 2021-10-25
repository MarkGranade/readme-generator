// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'testInst',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ['Apache License 2.0', 'MIT License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'none']
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) throw err;
        // console.log('Success');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( answers => {
        // console.log(answers);
        let templateCode = generateReadme(answers);
        // console.log('This is the Template', templateCode);

        writeToFile(templateCode);
    })
};

// Function call to initialize app
init();
