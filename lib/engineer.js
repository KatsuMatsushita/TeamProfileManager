const Employee = require("employee.js");

class Engineer extends Employee {
    constructor (name, id, email, git){
        this.github = git;
        
        super (name, id, email);
    }

    getGithub() {
        this.github;
    }

    getRole() {
        return "Engineer";
    }
}