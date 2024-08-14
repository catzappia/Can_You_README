// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';

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
    message: 'Please provide a desciption of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines for your project.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
