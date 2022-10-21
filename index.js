//Packages needed for application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//Import taff cards.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

//Array of questions for user input.
function runPromptsEmployee() {
    const questions = [{
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Please select your title:',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
        name: 'title'
    }];

    return inquirer
        .prompt(questions);
}

function runPromptsManager() {
    const questions = [{
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber'
    }];

    return inquirer
        .prompt(questions);
}

function runPromptsEngineer() {
    const questions = [{
        type: 'input',
        message: 'What is your GitHub profile address?',
        name: 'github'
    }];

    return inquirer 
        .prompt(questions);
}

function runPromptsIntern() {
    const questions = [{
        type: 'input',
        message: 'What is the name of your school?',
        name: 'school'
    }];

    return inquirer
        .prompt(questions);
}
