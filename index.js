const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
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
            message: 'Any Contribution Guidelines to Your Cool App? ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Application test URL link',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please Select which license you will be using. ',
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


const init = () => {
    inquirer.prompt(questions)
        .then((answers) => writeFile('README.md', generateMarkdown(answers)))
        .catch((err) => console.log(err));
 };

 init();
