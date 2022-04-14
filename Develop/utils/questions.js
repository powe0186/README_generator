// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.'
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What steps are required for instalation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for using your project.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'list all contributors and their githubs, separaged by commas.\n Example: John Wooden, JWooden2, Michael Jordan, MJ23'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'Gnu v3.0', 'BSL', ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of how to run your tests.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub ID?'
    }
];


module.exports = questions;