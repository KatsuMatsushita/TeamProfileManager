const Employee = require("../lib/employee");

describe("Employee", () => {
    // this initializes an Employee object and tests it
    describe("Initialize", () => {
        it("should create an object with a name, id, and email address if provided with correct arguments", () => {
            const employee = new Employee ("James Jameson", 1, "jjameson@gmail.com");

            expect(employee.name).toEqual("James Jameson");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("jjameson@gmail.com");
        });

        it("should throw an error if provided incorrect or no arguments", () => {
            const cb = () => new Employee();
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
    // this tests the getName() method
    describe("getName", () => {
        it("should return the name as a string", () => {
            const str = "James Jameson";

            const result = new Employee("James Jameson", 1, "jjameson@gmail.com").getName();

            expect(result).toEqual(str);
        });
    });
    // this tests the getID() method
    describe("getID", () => {
        it("should return the ID", () => {
            const result = new Employee("James Jameson", 1, "jjameson@gmail.com").getID();

            expect(result).toEqual(1);
        });
    });
    // this tests the getEmail() method
    describe("getEmail", () => {
        it("should return the email address", () => {
            const result = new Employee("James Jameson", 1, "jjameson@gmail.com").getEmail();

            expect(result).toEqual("jjameson@gmail.com");
        });
    });
    // this tests the getRole() method
    describe("getRole", () => {
        it("should return the role", () => {
            const result = new Employee("James Jameson", 1, "jjameson@gmail.com").getRole();

            expect(result).toEqual("Employee");
        });
    });
});