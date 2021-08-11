const woof = require("./woof");
test("should return number of woofs", function () {
  const result = woof("oh herro");
  expect(result).toBe("8woof!");
  expect(result).toMatch(/\dwoof/i);
  expect(["a", "b", "c"]).toContain("b");
});

test("should return null when not given a string", () => {
  expect(() => woof()).toThrow("MUST");
  //   const result = woof();
  //   expect(result).toBeNull();
});

test.todo("Should test on length");
