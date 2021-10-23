class Employee { 
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

        getName()  {
                return this.name
        }

        getId() {
            return this.id

        }

        getEmail(){
            return this.email


        }
        
        getRole(){         //returns Employee. Overriden to return Manager, Engineer, or Intern 
                return "Employee" 

        } 

}

module.exports = Employee
