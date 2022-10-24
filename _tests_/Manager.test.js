//Write the test for this class.
const Manager = require('../lib/Manager');

describe('manager', () => {
    describe('generate manager object', () => {
        it('should generate a manager object from data input', () => {
            const manager = new Manager('Shelley', 26, 'shelley@gmail.com', 2);

            expect(manager.officeNumber).toEqual(2);
        });
    });
    describe('get manager office number', () => {
        const manager = new Manager('Shelley', 26, 'shelley@gmail.com', 2);

        expect(manager.getOfficeNumber()).toEqual(2); //IS THIS CORRECT????
    });

    describe('get employee role', () => {
        const manager = new Manager('Shelley', 26, 'shelley@gmail.com', 2);

        expect(manager.getRole()).toEqual('Manager');
    });
});