const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// const classes = require(/lib/classes)

const questions = [
    {
    type: 'input',
    message: "Please enter the team manager's name:",
    name: 'manager-name'  
},
    {
    type: 'input',
    message: "Please enter a phone number:",
    name: 'phone-number'  
}
// {
//     type: 'list',
//     name: 'list',
//     message: "Please select an employee to ad, or finish",
//     choices: ["engineer", "intern", "finish"],
    // choices => if(choices === "finish") break
    
    // }
//     {
//     type: 'input',
//     message: "Please enter the engineer's github url:",
//     name: 'github-url',
//     when: (answers) => answers.list === 'engineer'

// },
//     {
//     type: 'input',
//     message: "Please enter the intern's school:",
//     name: 'school',
//     when: (answers) => answers.list === 'intern'

// }

]

const questions2 = [
    {
        type: 'list',
        name: 'list',
        message: "Please select an employee to ad, or finish",
        choices: ["engineer", "intern", "finish"],
        // choices => if(choices === "finish") break
        
        }
]

const questions3 = [
    {
        type: 'input',
        name: 'test',
        message: 'this is an engineer test'
    }
]
const questions4 = [
    {
        type: 'input',
        name: 'test',
        message: 'this is a test'
    }
]





function init() {
    inquirer.prompt(questions) . then( (answers) => 
    
    { function getAnswers(){
        inquirer.prompt(questions2).then((response) => { 
            if(response.list === "engineer") { inquirer.prompt(questions3).then((answers2) => 
                
                
                getAnswers())}
            else if(response.list === "intern") {inquirer.prompt(questions4).then((answers3) => 
                
                
                
                
                getAnswers())}
        })
    }
    getAnswers()
}
    )
} 
        
                                                       
                                     

init();


// function writeToFile(fileName, data) {
//     let filler = `# ${data.license}`

//     fs.writeFile(fileName, filler, (err) =>
//     err ? console.error(err) : console.log('Success!')
//     );
// }



    //     fs.writeFile("./dist/index.html", JSON.stringify(data), (err) =>
    // err ? console.error(err) : console.log('Success!'))
    
    
        // let fileName = `${data.name}` + ".html";
        // writeToFile(fileName, data)


