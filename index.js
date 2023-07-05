const inquirer = require('inquirer');
const fs  = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your applications title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please Enter a brief description of your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you you install your application? ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you USE your application? ',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you have a gofundme or contribution URL please put here.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Application test URL link',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please Select which license you will be using.',
            choices: ['Apache License, Version 2.0',
                'Common Development and Distribution License 1.0',
                'Eclipse Public License version 2.0',
                'GNU General Public License version 2',
                'GNU General Public License version 3',
                'GNU Lesser General Public License version 2.1',
                'GNU Lesser General Public License version 3',
                'GNU Library General Public License version 2',
                'Mozilla Public License 2.0',
                'The 2-Clause BSD License',
                'The 3-Clause BSD License',
                'The MIT License']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter Your GitHub Username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Your Email: ',
        },
    ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Readme.md file created! Check UTILS folder!')
    );
}

const init = () => {
    inquirer.prompt(questions)
        .then((answers) => writeToFile('./utils/README.md', generateMarkdown(answers)))
        .catch((err) => console.log(err));
 };

 init();
