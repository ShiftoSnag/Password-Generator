// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

// List of questions to be populated in the read me file below.
// description, check  
// installation instructions, usage information, contribution guidelines, test instructions
// git hub username -make this a link to git hub page, email
// Table of contents takes to the corresponding section

const questions = [
    {
        type: `input`,                                                              
        message: `What is your full name?`,
        name: `userName`
    },
    {
        type: `input`,                                                              
        message: `type out a description of your project`,
        name: `desc`
    },
    {
        type: `input`,                                                              
        message: `Type out how to get started with your project`,
        name: `gettingStarted`
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
