const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    // this initializes an Engineer object and tests it
    describe("Initialize", () => {
        it("should create an object with a name, id, and email address if provided with correct arguments", () => {
            const engineer = new Engineer ("James Jameson", 1, "jjameson@gmail.com", "JamJam");

            expect(engineer.name).toEqual("James Jameson");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("jjameson@gmail.com");
            expect(engineer.github).toEqual("JamJam");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
    // this tests the getGithub() method
    describe("getGithub", () => {
        it("should return the Github profile URL as a string", () => {
            const url = "https://github.com/JamJam";

            const result = new Engineer("James Jameson", 1, "jjameson@gmail.com", "JamJam").getGithub();

            expect(result).toEqual(url);
        });
    });
    // this tests the getRole() method
    describe("getRole", () => {
        it("should return the role", () => {
            const result = new Engineer("James Jameson", 1, "jjameson@gmail.com", "JamJam").getRole();

            expect(result).toEqual("Engineer");
        });
    });
});