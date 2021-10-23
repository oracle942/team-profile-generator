const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="container ">
        <header class="d-flex justify-content-center py-3">
          <h1>TEAM PROFILE GENERATOR</h1>
        </header>
    </div>
    <div class = "content container d-flex flex-wrap"></div>
      
    
    <script src="../script.js">
    </script>
   
</body>
</html>`);

const managerQuestions = [
  {
    type: 'input',
    message: "Please enter the team manager's name:",
    name: 'managerName',
  },
  {
    type: 'input',
    message: "Please enter the team manager's id:",
    name: 'id',
  },
  {
    type: 'input',
    message: "Please enter the team manager's email:",
    name: 'email',
  },
  {
    type: 'input',
    message: "Please enter the team manager's office number:",
    name: 'officeNumber',
  },
];

const question = [
  {
    type: 'list',
    name: 'selection',
    message: 'Please select an employee to ad, or finish',
    choices: ['engineer', 'intern', 'finish'],
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's id?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's github?",
  },
];
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the intern's id?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's email?",
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",
  },
];


function createManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    var div = dom.window.document.createElement('div');
    var content = dom.window.document.querySelector('.content');
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    div.innerHTML = `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${answers.managerName}</h5>
            <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
            </ul>
            
        </div>    
    </div>`;
    content.appendChild(div);
    init();
  });
}

function createEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    var div = dom.window.document.createElement('div');
    var content = dom.window.document.querySelector('.content');
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    div.innerHTML = `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${answers.name}</h5>
            <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">github: ${answers.github}</li>
            </ul>
            
        </div>    
    </div>`;
    content.appendChild(div);
    init();
  });
}
function createIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    var div = dom.window.document.createElement('div');
    var content = dom.window.document.querySelector('.content');
    const newManager = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    div.innerHTML = `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${answers.name}</h5>
            <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">School: ${answers.school}</li>
            </ul>
            
        </div>    
    </div>`;
    content.appendChild(div);
    init();
  });
}

function init() {
  inquirer.prompt(question).then((answers) => {
    switch (answers.selection) {
      case 'engineer':
        createEngineer();
        break;
      case 'intern':
        createIntern();
        break;
      case 'finish':
        var domString = dom.window.document.documentElement.outerHTML;
        fs.writeFile('index1.html', domString, (err) =>
          err
            ? console.log(err)
            : console.log('Successfully created index.html!')
        );
        break;
    }
  });
}

createManager();
