//Write the test for this class.
const Employee = require('../lib/Employee');

describe('employee', () => {
    describe('generate employee object', () => {
        it('should generate an employee object from data input', () => {
            const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        })
    })

    describe('get employee name', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getName()).toEqual(expect.any(String));
    })

    describe('get employee id', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getID()).toEqual(expect.any(Number));
    })

    describe('get employee email', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    })

    describe('get employee role', () => {
        const employee = new Employee('Shmo', 20, 'shmo2@yahoo.com');

        expect(employee.getRole()).toEqual('Employee');
    })
})
