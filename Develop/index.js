// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'titlename',
    message: 'What is the title of your project? (required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('please enter your title!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'titlename',
    message: 'What is your GitHub username> (required)',
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log('please enter your GitHub username!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('please enter your email address!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'problem',
    message: 'What is your project and what problem will it be solve? (required)',
    validate: problemInput => {
        if (problemInput) {
            return true;
        } else {
            console.log('please enter your title!');
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
