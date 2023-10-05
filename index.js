const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

const questions = [];

//write readme to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success")
  );
}
//inquirer
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "Title",
      },
      {
        type: "input",
        message: "Enter your project description",
        name: "Description",
      },
      {
        type: "input",
        message: "Enter your installation instructions",
        name: "Installation",
      },
      {
        type: "input",
        message: "Enter your usage information",
        name: "Usage",
      },
      {
        type: "list",
        message: "Choose a license",
        name: "License",
        choices: ["MIT", "Apache 2.0", "GNU GPL"],
      },
      {
        type: "input",
        message: "Enter your contribution guidelines",
        name: "Contribution",
      },
      {
        type: "input",
        message: "Enter your test information",
        name: "Test",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "Github",
      },
    ])

    .then((response) =>
      //send info to write readme
      writeToFile(`README.md`, markdown(response))
    );
}
// Function call to initialize app
init();
