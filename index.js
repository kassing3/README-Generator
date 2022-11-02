// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message:"What is the Title of your project?",
        name: "title",
    },
    {
        type: "input",
        message:"Please provide a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message:"Installation Instructions: What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message:"Usage Information: Provide instructions on how to use your program and example of use",
        name: "usage",
    },
    {
        type: "input",
        message:"Contribution Guidelines: Please provide contribution guidelines if applicable.",
        name: "contributions",
    },
    {
        type: "input",
        message:"Testing Instructions: Provide written out tests for you application with provided examples on how to run them.",
        name: "tests",
    },
    {
        type: "list",
        message:"Please select the license that applies to your application.",
        name: "license",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "Creative Commons", "Eclipse Public License 1.0", "GNU GPL v3", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Open Data Commons", "The Perl License", "SIL Open Font License 1.1", "Unlicense"],
    },
    {
        type: "input",
        message:"What's your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message:"What's your email",
        name: "email",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
   inquirer
   .prompt(questions)
   .then((answers) => 
     writeToFile('README.md', answers)
    )
   .then (() =>
        console.log('Success!')
    ) 
    .catch( (err) =>
        console.log(err)
    )
}

// Function call to initialize app
init();
