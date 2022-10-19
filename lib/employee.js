//Variable to import inquirer???
//Write constructor function to return name, ID, email and role.
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    //Return input name.
    getName () {
        return this.name;
    }
    //Return input id.
    getID () {
        return this.id;
    }
    //Return input email.
    getEmail () {
        return this.email;
    }
    //Return input role.
    getRole () {
        return 'Employee';
    }
}
//Export file.
module.exports = Employee;

