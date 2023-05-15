const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to do?'
    },
    {
        type: 'input',
        name: 'database',
        message: ''
    }
]
