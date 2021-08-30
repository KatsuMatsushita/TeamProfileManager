const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor (name, id, email, git){
        super (name, id, email);
        this.github = git;
    }

    getGithub() {
        return `https://github.com/${this.github}`;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;