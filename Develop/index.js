// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions.js');
const generateMarkdown = require('./utils/generateMarkDown.js');



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const {name, description, instalation, usage, contributors, licenses, tests, email, gitHub} = data;
    const fileContents = generateMarkdown(data);
    fs.writeFile(fileName, fileContents, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README created successfully!")
        }
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        
        writeToFile('YOURREADME.md', answers);
        
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
    }
  });

}

// Function call to initialize app
init();
