const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, officeNumber, github){
        super(name, id, email, officeNumber)
        // console.log("Hello Engineer")
        // getGitHub()

    }
}

module.exports = Engineer