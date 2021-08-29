const Employee = require("employee.js");

class Manager extends Employee {
    constructor (name, id, email, office) {
        this.officeNumber = office;

        super(name, id, email);
    }

    getRole(){
        return "Manager"
    }
}