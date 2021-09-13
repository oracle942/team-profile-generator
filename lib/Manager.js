const Employee = require('./Employee')
// 

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        
        
        super(name, id, email, officeNumber)

    }
}


module.exports = Manager


