// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
// end starter code
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to the repo?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// end starter code
// end starter code
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
// end starter code
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
// end starter code
