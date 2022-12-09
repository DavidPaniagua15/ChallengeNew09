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
            console.log('please enter what your project is!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'create',
    message: 'Why did you create this project? (required)',
    validate: createInput => {
        if (createInput) {
            return true;
        } else {
            console.log('please enter why you create this project!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'someone',
    message: 'How will someone use this? (required)',
    validate: someoneInput => {
        if (someoneInput) {
            return true;
        } else {
            console.log('please enter what your project is!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'installation',
    message: 'Please provide step-by-step installation instructions for your project! (required)',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('please enter your installation instruction!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use! (required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('please enter your use instructions!');
            return false;
        }
    }
},

{
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project? (required)',
    choices: ['agpl', 'apache', 'mit', 'no license']
},
{    
    type: 'confirm',
    name: 'confirmContributers',
    message: 'Would you like to allow other developers to contribute?',
    default: true
},

{
    type: 'input',
    name: 'contribute',
    message: 'Please provide guidelines for contributing. (required)',
    when: ({ confirmContributers }) => {
        if (confirmContributers) {
            return true
        } else {
            return false
        }
    },
    validate: contributerInput => {
        if (contributerInput) {
            return true
        } else {
            console.log ('Please enter contributer guidelines.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to test the app. (required)',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log ('Please enter your use test instructions!');
            return false;
        }
    }
}

];

// TODO: Create a function to write README file
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

