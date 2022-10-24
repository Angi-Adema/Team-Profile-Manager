//Write the test for this class.
const Employee = require('../lib/Employee');

describe('employee', () => {
    describe('generate employee object', () => {
        it('should generate an employee object from data input', () => {
            const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

            expect(employee.name).toEqual('Shmo');
            expect(employee.id).toEqual(20);
            expect(employee.email).toEqual('shmo2@yahoo.com');
        });
    });

    describe('get employee name', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getName()).toEqual('Shmo');
    });

    describe('get employee id', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getID()).toEqual(20);
    });

    describe('get employee email', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getEmail()).toEqual('shmo2@yahoo.com');
    });

    describe('get employee role', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});
