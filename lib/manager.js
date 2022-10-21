//Import employee.js.
const Employee = require('./employee');

//Write function to return name, ID, email and role - use super keyword to access employee.js.
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //Return office number input.
    getOfficeNumber () {
        return this.officeNumber;
    }
    //Change role to manager.
    getRole () {
        return 'Manager';
    }
}
//Export file.
module.exports = Manager;