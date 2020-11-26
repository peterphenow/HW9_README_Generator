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
    let readmeTemplate = ` build markdown template here
    `;
    fs.writeFile(filename, readmeTemplate, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
