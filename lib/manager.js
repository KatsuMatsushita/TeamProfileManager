const Employee = require("../lib/employee.js");

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.officeNumber = office;
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;