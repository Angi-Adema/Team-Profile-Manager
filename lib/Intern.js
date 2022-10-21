//Import employee.js.
const Employee = require('./Employee');

//Write function to return name, ID, email and role - use super keyword to access employee.js.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //Return school input.
    getSchool () {
        return this.school;
    }
    //Change role to intern.
    getRole () {
        return 'Intern';
    }
}
//Export file.
module.exports = Intern;