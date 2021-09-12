const fs = require('fs')
const inquirer = require('inquirer')
// const classes = require(/lib/classes)

const question = [
    {
    type: 'input',
    message: "Please enter the team manager's name:",
    name: 'manager-name'  
}
//     {
//     type: 'input',
//     message: "Please enter the team manager's employee ID:",
//     name: 'manager-ID'  
// },
//     {
//     type: 'input',
//     message: "Please enter the team manager's email:",
//     name: 'manager-email'  
// },
//     {
//     type: 'input',
//     message: "Please enter the team manager's office number:",
//     name: 'manager-office'  
// },
//     {
//     type: 'list',
//     name: 'list',
//     message: "Please select an employee to ad, or finish",
//     choices: ["engineer", "intern",]

// },
// {
//     type: 'input',
//     name: ''
// }
]

// function writeToFile(fileName, data) {
//     let filler = `# ${data.license}`

//     fs.writeFile(fileName, filler, (err) =>
//     err ? console.error(err) : console.log('Success!')
//     );
// }


function init() {
    inquirer.prompt(question)
    .then((data) => {
        fs.writeFile("./dist/index.html", JSON.stringify(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    
        // let fileName = `${data.name}` + ".html";
        // writeToFile(fileName, data)
    )})
}

// module.exports = data
init();