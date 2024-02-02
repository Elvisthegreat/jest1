const addition = require("../calc");
const subtraction = require("../calc");

describe("calculator", () =>{
    describe("Addition function", () =>{
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 73 for 42 + 32", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () =>{
        
    });
    describe("Multiply function", () =>{
        
    });
    describe("Division function", () =>{
        
    });
})