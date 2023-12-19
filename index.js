const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter the contributors",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions on how to run tests:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function writeToFile(directory, fileName, data) {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Write the file inside the created or existing directory
  const filePath = path.join(directory, fileName);
  fs.writeFileSync(filePath, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const outputDirectory = "./newREADME";
      const outputFile = "generated-README.md";
      const markdownContent = generateMarkdown(answers);
      writeToFile(outputDirectory, outputFile, markdownContent);
      console.log(
        `${outputFile} has been successfully generated in ${outputDirectory}/`
      );
    })
    .catch((error) => {
      console.error("Error during user input:", error);
    });
}

// function call to initialize program
init();
