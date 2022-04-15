// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
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
        message: "list all contributors' gitHubs.\n Example: JWooden2, MJ23, StephCur30"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache2.0', 'Gnuv3.0', 'BSL', ]
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