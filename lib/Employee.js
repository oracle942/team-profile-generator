class Employee { 
    constructor(name, id, email){
    }

        getName(name)  {
            this.name = name

        }

        getId(id) {
            this.id = id

        }

        getEmail(email){
            this.email = email

        }
        
        getRole(){         //returns Employee. Overriden to return Manager, Engineer, or Intern 
                return this
        } 

}

module.exports = Employee
