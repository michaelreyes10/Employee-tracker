const inquirer = import('inquirer');
const db = require('./db/connection');
const consoleTable = require('console.table');

function viewDepartments() { db.query({sql:'SELECT * FROM DEPARTMENTS'}, (errors, results, fields) => {
    if(errors) {
        console.log(errors.message);
    }
    console.table(results);
    // console.log(fields)

});

};

function initialPrompt() {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'initialPrompt',
        message: 'What would you like to see?',
        choices: ['Departments']
        }
    ]).then(data => {
       switch(data.initialPrompt) {
           case 'Departments':
            viewDepartments();
       }


    });    
};

initialPrompt();