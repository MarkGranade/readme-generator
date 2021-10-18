// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

// MOCK DATA FOR TESTING
const mockData = {
    title: 'Potential Enigma',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero!',
    installation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero!',
    usageInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero!',
    contribution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero!',
    testInst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure laborum asperiores illo hic temporibus tempora. At sunt quae incidunt architecto. A exercitationem voluptas non pariatur error aliquam vel vero!',
    github: 'MarkGranade',
    email: 'mark.granade@gmail.com',
    license: 'MIT'
};


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
        choices: ['Apache', 'MIT', 'BSD', 'none']
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
    // THIS CODE IS FOR TESTING PURPOSES
    // REMOVE AND UNCOMMENT inquirer.prompt() AND BELOW
    // let templateCode = generateReadme(mockData);
    // writeToFile(templateCode);
	// console.log(templateCode);
    
    inquirer.prompt(questions)
    .then( answers => {
        console.log(answers);
        let templateCode = generateReadme(answers);
        console.log('This is the Template', templateCode);

        writeToFile(templateCode);
    })
};

// Function call to initialize app
init();
