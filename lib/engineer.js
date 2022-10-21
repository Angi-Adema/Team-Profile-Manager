//Import employee.js.
const Employee = require('./employee');

//Write function to return name, ID, email and role and extend employee info - use super keyword to access employee.js.
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Return Github input.
    getGithub () {
        return this.github;
    }
    //Change employee role to engineer.
    getRole () {
        return 'Engineer';
    }
}
//Export file.
module.exports = Engineer;