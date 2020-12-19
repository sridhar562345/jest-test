const rewire = require("rewire");

const stringUtils = rewire(process.cwd() + "/src/stringUtils.js");
const isEmpty = stringUtils.__get__("isEmpty");
const convertToUpperCase = stringUtils.__get__("convertToUpperCase");

describe("String utils test cases", () => {
   it("should test isEmpty function", () => {
      expect(isEmpty("")).toBe(true);
      expect(isEmpty("Empty")).toBe(false);
   });

   it("should test convertToUpperCase function", () => {
      expect(convertToUpperCase("sample")).toBe("SAMPLE");
      expect(convertToUpperCase("Testing")).toBe("TESTING");
   });
});
