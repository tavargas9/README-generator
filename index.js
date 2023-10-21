//Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a breif description of this project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Write the installation instructions for the project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Write the usage information for this project',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Write the contribution guidelines for this project',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Write the test instructions for this project',
      },
      {
        type: 'input',
        name: 'technologies',
        message: 'List the technologies that this project uses',
      },
      {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'IBM'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
      },
      {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data)
    });
};

// Function call to initialize app
init();
