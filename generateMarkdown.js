// function to generate markdown for README using template literals
function generateMarkdown(project) {

return `# ${project.title}

## Table of Contents 
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributors](#Contributors)

## Description 
${project.description}
        
## Installation 
${project.install}

## Usage 
${project.usage}

## License 
This project is licensed under ${project.license}.

## Contributors 
This project was created by ${project.gitUsername}. You can email them here: ${project.email}.

`;

}

module.exports = generateMarkdown;
  