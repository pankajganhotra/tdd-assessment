const add = require("./add");

describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the sum of comma-separated 2 digits", () => {
    expect(add("1,2")).toBe(3);
    expect(add("10,20")).toBe(30);
    expect(add("5, 15")).toBe(20);
  });

  test("should return the sum of comma-separated n digits", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40,50,60")).toBe(210);
    expect(add("5,15,20,25,30,25,40,45,50")).toBe(255);
  });

  test('should handle newlines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('10\n20\n30')).toBe(60);
    expect(add('1\n5,  10\n15')).toBe(31);
  });
});
