//information on the employee, setting the key value. 
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    //returns to employee
    getRole(){
        return `Employee`
    }
}
module.exports = Employee