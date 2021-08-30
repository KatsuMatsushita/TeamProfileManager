const Manager = require("../lib/manager");

describe("Manager", () => {
    // this initializes an Manager object and tests it
    describe("Initialize", () => {
        it("should create an object with a name, id, and email address if provided with correct arguments", () => {
            const manager = new Manager ("James Jameson", 1, "jjameson@gmail.com", 101);

            expect(manager.name).toEqual("James Jameson");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("jjameson@gmail.com");
            expect(manager.officeNumber).toEqual(101);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Manager();
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
    // this tests the getRole() method
    describe("getRole", () => {
        it("should return the role", () => {
            const result = new Manager("James Jameson", 1, "jjameson@gmail.com", 101).getRole();

            expect(result).toEqual("Manager");
        });
    });
});