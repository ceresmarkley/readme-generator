const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What you like to do?',
        },{
            type: 'input',
            name: 'github',
            message: 'What is your github?',
        },{
            type: 'input',
            name: 'linkedIn',
            message: 'What is your linkedin?',
        },
    ]);
};

const generateHTML = ({ name, location, github, linkedIn}) =>
 `<!DOCTYPE html>
 <html lang="en-us">
 

 </body>`;

 const init = () => {
    promptUser()
        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('successfully wrote things!'))
        .catch((err) => console.log(err));
 };

 init();
