//import fs module to write README.md file
const fs = require ('fs'); 
//import inquirer module to ask user questions
const inquirer = require ('inquirer'); 

const questions = [
    {
        type: 'input',
        name: 'projectTitle', 
        message: 'What is the name of your project?',
    }, 
    {
        type: 'input', 
        name: 'description', 
        message: 'Please enter a description of your project.',
    }, 
    {
        type: 'input', 
        name: 'installation', 
        message: 'What are the steps to install your project?'
    }, 
    {
        type: 'input', 
        name: 'usage', 
        message: 'Please provides instructions for how to use your project.'
    },
    {
        type: 'list', 
        name: 'license', 
        message: 'What type of license would you like your project to be under?', 
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'gitUsername',
        message: 'What is your github username?'
    }, 
    {
        type: 'input', 
        name: 'emailAddress', 
        message: 'What is your email address?'
    }
]; 

inquirer.prompt(questions).then(answers => {
    console.log(answer); 
}); 
//}).catch (error => {

//})
