// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

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
