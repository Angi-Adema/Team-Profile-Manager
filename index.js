//Packages needed for application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//Import taff cards.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const staffArray = [];

function managerQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Who is the team manager?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's id number?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email address?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?"
        },
    ]).then((answers) => {
        const { name, id, email, officeNumber } = answers;
        const manager = new Manager (name, id, email, officeNumber);

        staffArray.push(manager);
       

    }).then(() => menu())
}

function engineerQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the engineer's id?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the engineer's email address?"
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?"
        },
    ]).then((answers) => {
        const { name, id, email, github } = answers;
        const engineer = new Engineer (name, id, email, github);

        staffArray.push(engineer);
        

    }).then(() => menu())
}

function internQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the name of the intern?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the intern's id number?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's email address?"
        },
        {
            name: "school",
            type: "input",
            message: "What is the name of the intern's school?"
        },
    ]).then((answers) => {
        const { name, id, email, school } = answers;
        const intern = new Intern (name, id, email, school);

        staffArray.push(intern);
      

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
    fs.writeFileSync('./dist/index.html', generateHTML(staffArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Staff profile successfully created!")
        }
    })
}

function start() {
    managerQuestions()
       
}

start()