
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
var p = dom.window.document.querySelector("p")
var h1 = dom.window.document.createElement("h1")
h1.textContent = "Testing Testing"
p.appendChild(h1)

console.log(dom.window.document.querySelector("p").textContent); // "Hello world"


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
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub?"
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
        var manName = document.createElement('h1')
        manName.textContent = answers['manager-name']
        body.appendChild(manName)
       
        inquirer.prompt(questions2).then((answers2) => {
           
           


            if(answers2.list === "engineer") { inquirer.prompt(questions3).then(
                (answers3) =>  {manager = new Manager(answers3);
                               manager.getName(answers3.name);
                               manager.getId(answers3.id);
                               manager.getEmail(answers3.email);
                               manager.getRole("Engineer");
                               console.log(manager.email)}).then(

                (answers2) => getAnswers())
            }

            else if(answers2.list === "intern") {inquirer.prompt(questions4).then((answers4) => 
                
                
                
                
                getAnswers())}

            else fs.writeFile()
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


