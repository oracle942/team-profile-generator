const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, officeNumber, github){
        super(name, id, email, officeNumber)
      

    }
}

module.exports = Engineer