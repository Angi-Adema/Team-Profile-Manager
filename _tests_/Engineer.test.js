//Write the test for this class.
const Engineer = require('../lib/Engineer');

describe('engineer', () => {
    describe('generate engineer object', () => {
        it('should generate an engineer object from data input', () => {
            const engineer = new Engineer('Angi', 22, 'angi.adema@gmail.com', 'Angi-Adema');

            expect(engineer.github).toEqual('Angi-Adema');
        })
    })

    describe('get engineer github username', () => {
        const engineer = new Engineer('Angi', 22, 'angi.adema@gmail.com', 'Angi-Adema');

        expect(engineer.getGithub()).toEqual('Angi-Adema');
    })

    describe('get employee role', () => {
        const engineer = new Engineer('Angi', 22, 'angi.adema@gmail.com', 'Angi-Adema');

        expect(engineer.getRole()).toEqual('Engineer');
    })
})