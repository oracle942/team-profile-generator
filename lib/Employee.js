const data = require('data')


class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email

        getName()

        getId()

        getEmail()
        
        getRole() //returns Employee. Overriden to return Manager, Engineer, or Intern 

    }
}

module.export = Employee