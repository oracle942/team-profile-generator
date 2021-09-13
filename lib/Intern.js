const Employee = require('./Employee')


class Intern extends Employee {
    constructor(name, id, email, schoool){

        super(name,id,email,school)
        
        getSchool()

    }
}

module.exports = Intern