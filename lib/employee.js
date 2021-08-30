class Employee {
    constructor(name, id, email){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string")
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number")
        }

        if (typeof email !== "string" || !email.trim().length || email.indexOf("@") == -1) {
            throw new Error("Expected parameter 'email' to be a non-empty string and contain an email address")
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }
 
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;