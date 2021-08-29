const Employee = require("employee.js");

class Intern extends Employee {
    constructor (name, id, mail, school) {
        this.school = school;

        super (name, id, mail);
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}