// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log(generateMarkdown);

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
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) throw err;
        console.log('Success');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( answers => {
        console.log(answers);
        let templateCode = generateMarkdown(answers);
        console.log('This is the Template', templateCode);

        writeToFile(templateCode);
    })
};

// Function call to initialize app
init();
