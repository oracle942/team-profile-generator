
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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

    <div class="container">
        <header class="d-flex justify-content-center py-3">
          <h1>TEAM PROFILE GENERATOR</h1>
        </header>
    </div>

    <div class = "content"></div>
      
    
    <script src="../script.js">
    </script>
   
</body>
</html>`);
   
// var p = dom.window.document.querySelector("p")
// var h1 = dom.window.document.createElement("h1")
// h1.textContent = "Testing Testing"
// p.appendChild(h1)

// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"


const questions = [
    {
    type: 'input',
    message: "Please enter the team manager's name:",
    name: 'managerName'  
},
    {
    type: 'input',
    message: "Please enter the team manager's phone number:",
    name: 'phoneNumber'  
},
    {
    type: 'input',
    message: "Please enter the team manager's email:",
    name: 'email'  
},
    {
    type: 'input',
    message: "Please enter the team manager's office number:",
    name: 'officeNumber'  
},


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
        var div = dom.window.document.createElement("div")
        var content = dom.window.document.querySelector(".content")
        div.innerHTML = `<div class="container d-flex flex-wrap">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${answers.managerName}</h5>
            <p class="card-text">Manager</p>

            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Phone number: ${answers.phoneNumber}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
            </ul>
            
        </div>    
    </div>`
        content.appendChild(div)


       
        inquirer.prompt(questions2).then((answers2) => {
           
           


            if(answers2.list === "engineer") { inquirer.prompt(questions3).then(
                (answers3) =>  {engineer = new Engineer(answers3);
                               name = engineer.getName(answers3.name);
                               id = engineer.getId(answers3.id);
                               email = engineer.getEmail(answers3.email);
                               role = engineer.getRole("Engineer");
                               github = engineer.getGitHub(answers3.github)
                               div.innerHTML = `<div class="container d-flex flex-wrap">
                               <div class="card" style="width: 18rem;">
                                   <div class="card-body">
                                   <h5 class="card-title">${answers3.name}</h5>
                                   <p class="card-text">Engineer</p>
                       
                                   </div>
                                   <ul class="list-group list-group-flush">
                                   <li class="list-group-item">Employee ID: ${answers3.id}</li>
                                   <li class="list-group-item">Email: ${answers3.email}</li>
                                   <li class="list-group-item">GitHub: ${answers3.github}</li>
                                   </ul>
                                   
                               </div>    
                           </div>`
                           var div2 = dom.window.document.createElement("div")
                           var domString = dom.window.document.documentElement.outerHTML;
                           content.appendChild(div2)
                            fs.writeFile('index1.html', domString, (err) =>
                                err ? console.log(err) : console.log('Successfully created index.html!')
                            );
                            
                            
                            
                            }


                               
                               
                               
                               
                               ).then(

                (answers3) => getAnswers())
            }

            else if(answers2.list === "intern") {inquirer.prompt(questions4).then((answers4) => 
                
                
                
                
                getAnswers())}

            else fs.writeFile('index.html', dom.window.document.toString(), (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
          );
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


