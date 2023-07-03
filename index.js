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

function generateReadme(answers) {

}


const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateReadme(answers)))
        .catch((err) => console.log(err));
 };

 init();
