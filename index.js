//Packages needed for application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//Import taff cards.
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');

//Array of questions for user input.
function runPromptsEmployee() {
    const questions = [{
        type: 'input',
        message: 'What is your name?',
        name: 'name'
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
