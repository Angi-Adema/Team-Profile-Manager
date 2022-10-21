//Packages needed for application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//Import taff cards.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function managerQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: ""
        },
        {
            name: "id",
            type: "input",
            message: ""
        },
        {
            name: "email",
            type: "input",
            message: ""
        },
        {
            name: "officeNumber",
            type: "input",
            message: ""
        },
    ]).then((answers) => {

    }).then(() => menu())
}

function engineerQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: ""
        },
        {
            name: "id",
            type: "input",
            message: ""
        },
        {
            name: "email",
            type: "input",
            message: ""
        },
        {
            name: "github",
            type: "input",
            message: ""
        },
    ]).then((answers) => {

    }).then(() => menu())
}

function internQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: ""
        },
        {
            name: "id",
            type: "input",
            message: ""
        },
        {
            name: "email",
            type: "input",
            message: ""
        },
        {
            name: "school",
            type: "input",
            message: ""
        },
    ]).then((answers) => {

    }).then(() => menu())
}

function menu() {
    inquirer.prompt([
        {
            name: "menu",
            type: "list",
            message: "what would you like to do?",
            choices: ['add a new Engineer', 'add a new Intern', 'Build HTML']
        },

    ]).then((answers) => {
        switch (answers.menu) {
            case 'add a new Engineer':
                engineerQuestions()
                break;
            case 'add a new Intern':
                internQuestions()
                break;
            default:
                buildHtml()
        }
    })
}

function buildHtml() {
    fs.writeFileSync('./dist/index.html', generateHTML())
}

function start() {
    managerQuestions()
}

start()