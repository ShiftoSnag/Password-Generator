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
    {
        type: `input`,                                                              
        message: `pick your languages`,
        name: `languages`,
    },
    {
        type: `input`,                                                              
        message: `What usage does this project have?`,
        name: `usage`
    },

    {
        type: `input`,                                                              
        message: `What contribution guidelines`,
        name: `contr`
    },
    {
        type: `input`,                                                              
        message: `How do you test this`,
        name: `test`
    },
    {
        type: `input`,                                                              
        message: `GitHub Username`,
        name: `gitHubUser`
    },
    {
        type: `input`,                                                              
        message: `Email Address`,
        name: `email`
    },
    {
        type: `input`,                                                              
        message: `LinkedIn :`,
        name: `linkedIn`
    },
    {
        type: `input`,                                                              
        message: `Git clone :`,
        name: `gitClone`
    },
    {
        type: `input`,                                                              
        message: `Road Map for your project`,
        name: `roadMap`
    },
    {
        type: `list`,                                                              
        message: `Pick your License`,
        name: `license`,
        choices: ["MIT", "Apache", "Mozilla", "GPL"]

    },
];
const generateMD = (answers) => `# ${answers.userName} Portfolio
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)
![badge](https://img.shields.io/badge/LinkedIn-IN%20-blue)

<!-- TABLE OF CONTENTS -->

## Table of Contents
* [About The Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
${answers.desc}

<!-- GETTING STARTED -->
## Built With
${answers.languages}

<!-- GETTING STARTED -->
## Getting Started
${answers.gettingStarted}

To get a local copy up and running follow these simple steps.

<!-- Prerequisites -->
${answers.test}

### Installation

1. Clone the repo
   sh
   git clone ${answers.gitClone}
   



<!-- USAGE EXAMPLES -->
### Usage
${answers.usage}

<!-- ROAD MAP -->
### Road map
${answers.roadMap}


<!-- CONTRIBUTING -->
### Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature)
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Feel free to reach out to me with questions comments, or concerns at one of the ways below.

Git Hub: ${answers.gitHubUser}

Email: ${answers.email}

LinkedIn Link: ${answers.linkedIn}

Project Link: ${answers.gitClone}

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
${answers.contr}`

//TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() 
    {inquirer
        .prompt(questions)
            //console.log(response.name, response.languages, response.comm)
            .then((answers) => writeFileAsync('readMETemp.MD', generateMD({...answers})))
            .then(() => console.log('Successfully wrote to index.html'))
            .catch((err) => console.error(err));
    }

// Function call to initialize app
init();
