//Write the test for this class.
const Manager = require('../lib/Manager');

require('manager', () => {
    describe('generate manager object', () => {
        it('should generate a manager object from data input', () => {
            const manager = new Manager('Shelley', 26, 'shelley@gmail.com', 2);

            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    describe('get employee role', () => {
        const manager = new Manager('Shelley', 26, 'shelley@gmail.com', 2);

        expect(manager.getRole()).toEqual('Manager');
    });
});