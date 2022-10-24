//Write the test for this class.
const Intern = require('../lib/Intern');

describe('intern', () => {
    describe('generate intern object', () => {
        it('should generate an intern object from data input', () => {
            const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

            expect(intern.school).toEqual("DU");
        });
    });

    describe('get name of school', () => {
        const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

        expect(intern.getSchool()).toEqual(expect.stringContaining("DU"));
    });

    describe('get employee role', () => {
        const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

        expect(intern.getRole()).toEqual('Intern');
    });
});