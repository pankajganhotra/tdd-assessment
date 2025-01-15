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
});
