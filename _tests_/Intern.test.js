//Write the test for this class.
const Intern = require('../lib/Intern');

describe('intern', () => {
    describe('generate intern object', () => {
        it('should generate an intern object from data input', () => {
            const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

            expect(intern.school).toEqual(expect.any(String));
        });
    });

    describe('get name of school', () => {
        const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });

    describe('get employee role', () => {
        const intern = new Intern('Dan', 24, 'dan@gmail.com', 'DU');

        expect(intern.getRole()).toEqual('Intern');
    });
});