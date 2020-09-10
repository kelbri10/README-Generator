//import fs module to write README.md file
const fs = require ('fs'); 
//import inquirer module to ask user questions
const inquirer = require ('inquirer'); 

const generateMarkdown = require ('./generateMarkdown'); 

//questions prompted to user in CLI 
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'What is the name of your project?',
    }, 
    {
        type: 'input', 
        name: 'description', 
        message: 'Please enter a description of your project.',
    }, 
    {
        type: 'input', 
        name: 'install', 
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
        name: 'email', 
        message: 'What is your email address?'
    }
]; 

//once questions have been answered, 
//use fs in order to write to readMe file
inquirer.prompt(questions).then(project => {
    fs.writeFile('readME.md', generateMarkdown(project), 'utf8', err =>{ 
        if (err) throw err; 

        console.log('Your readME.md has been created!'); 
    })
}); 



