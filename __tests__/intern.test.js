const Intern = require("../lib/intern");

describe("Intern", () => {
    // this initializes an Intern object and tests it
    describe("Initialize", () => {
        it("should create an object with a name, id, and email address if provided with correct arguments", () => {
            const intern = new Intern ("James Jameson", 1, "jjameson@gmail.com", "RIT");

            expect(intern.name).toEqual("James Jameson");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("jjameson@gmail.com");
            expect(intern.school).toEqual("RIT");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
    // this tests the getSchool() method
    describe("getSchool", () => {
        it("should return the school", () => {
            const result = new Intern("James Jameson", 1, "jjameson@gmail.com", "RIT").getSchool();
    
            expect(result).toEqual("RIT");
        });
    });
    // this tests the getRole() method
    describe("getRole", () => {
        it("should return the role", () => {
            const result = new Intern("James Jameson", 1, "jjameson@gmail.com", "RIT").getRole();

            expect(result).toEqual("Intern");
        });
    });
});