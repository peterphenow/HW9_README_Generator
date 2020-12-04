const inquirer = require("inquirer");
const fs = require("fs");

//array of inquirer prompts to get all necessary info to build a readme file
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usageInfo",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "testingInstructions",
    },
    {
      type: "list",
      message: "What license are you using?",
      name: "license",
      choices: ["MIT", "GPLv3", "Apache License 2.0", "BSD"],
    },
    {
      type: "input",
      message: "what is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((data) => {
    const filename = "README.md";
    let badgeURL = "";

    if (data.license === "MIT") {
      badgeURL =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.license === "GPLv3") {
      badgeURL =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (data.license === "Apache License 2.0") {
      badgeURL =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (data.license === "BSD") {
      badgeURL =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }

    let readmeTemplate = `${badgeURL} 
  # ${data.projectName}  

  ## Description  
    
  ${data.description}  
    
  ## Installation  
    
  ${data.installation}  
    
  ## Usage  
    
  ${data.usageInfo}  
    
  ## Contributing  
    
  ${data.contribution}  
    
  ## Tests  
    
  ${data.testingInstructions}  
    
  ## License  
    
  This project uses the ${data.license} license.  

  ## Questions  

  If you have any questions or comments about this repository, please contact me at ${data.email}.

  Please visit [${data.github}](https://github.com/${data.github}) to view more of my work.
  `;

    fs.writeFile(filename, readmeTemplate, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
