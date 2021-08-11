const {
  verifyPassword,
  isNotNull,
  hasRightLength,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached
} = require("./verify_password");

describe("Password veriifier functions", () => {
  describe("1. HasRightLength requirement", () => {
    test("HasRightLength 8", () => {
      expect(hasRightLength("123456789")).toBe(false);
    });
    test("HasRightLength < 8", () => {
      expect(hasRightLength("12345678")).toBe(true);
    });
    test("HasRightLength 0", () => {
      expect(hasRightLength("")).toBe(true);
    });
    test("HassRightLength null", () => {
      expect(hasRightLength(null)).toBe(false);
    });
  });

  describe("2. IsNotNull requirement", () => {
    test("isNotNull null", () => {
      expect(isNotNull(null)).toBe(false);
    });
    test("isNotNull 'a'", () => {
      expect(isNotNull("a")).toBe(true);
    });
  });

  describe("3.hasUpperCaseCharacter requirement", () => {
    test("hadUpperCaseCharacter", () => {
      expect(hasUpperCaseCharacter("A")).toBe(true);
    });
    test("hadUpperCaseCharacter 'a'", () => {
      expect(hasUpperCaseCharacter("a")).toBe(false);
    });
    test("hadUpperCaseCharacter 'Aa'", () => {
      expect(hasUpperCaseCharacter("Aa")).toBe(true);
    });
    test("hadUpperCaseCharacter '123'", () => {
      expect(hasUpperCaseCharacter("123")).toBe(false);
    });
    test("hadUpperCaseCharacter null", () => {
      expect(hasUpperCaseCharacter(null)).toBe(false);
    });
  });
  describe("4.hasLowerCaseCharacter requirement", () => {
    test("hadLowerCaseCharacter", () => {
      expect(hasLowerCaseCharacter("a")).toBe(true);
    });
    test("hadLowerCaseCharacter 'a'", () => {
      expect(hasLowerCaseCharacter("A")).toBe(false);
    });
    test("hadLowerCaseCharacter 'Aa'", () => {
      expect(hasLowerCaseCharacter("Aa")).toBe(true);
    });
    test("hadLowerCaseCharacter '123'", () => {
      expect(hasLowerCaseCharacter("123")).toBe(false);
    });
    test("hadLowerCaseCharacter null", () => {
      expect(hasLowerCaseCharacter(null)).toBe(false);
    });
  });

  describe("5 hasDigit", () => {
    test("hasDigit '1'", () => {
      expect(hasDigit(1)).toBe(true);
    });
    test("hasDigit 'a'", () => {
      expect(hasDigit("a")).toBe(false);
    });
    test("hasDigit 'A1'", () => {
      expect(hasDigit("A1")).toBe(true);
    });
    test("hasDigit null", () => {
      expect(hasDigit(null)).toBe(false);
    });
  });

  describe("6 should comply to >= 3 conditions at the same time", () => {
    test("all conditions false", () => {
      conditions = [false, false, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
    });
    test("1 condition true", () => {
      conditions = [true, false, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
    });
    test("2 conditions true", () => {
      conditions = [true, true, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
    });
    test("3 conditions true", () => {
      conditions = [true, true, true, false, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
    });
    test("4 conditions true", () => {
      conditions = [true, true, true, true, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
    });
    test("all conditions true", () => {
      conditions = [true, true, true, true, true];
      expect(minimumConditionsReached(conditions)).toBe(true);
    });
  });

  describe("condition 7:should always comply to condition 4", () => {
    test("verifyPassword null", () => {
      expect(verifyPassword(null)).toBe(false);
    });
    test("verifyPassword 7", () => {
      expect(verifyPassword("7")).toBe(false);
    });
    test("verifyPassword only digits", () => {
      expect(verifyPassword("12345678")).toBe(false);
    });
    test("verifyPassword only uppercase", () => {
      expect(verifyPassword("ABCDEFGH")).toBe(false);
    });
    test("verifyPassword only lowercase", () => {
      expect(verifyPassword("abcdefgh")).toBe(true);
    });
    test("verifyPassword only lowercase, too long", () => {
      expect(verifyPassword("abcdefghijklmnu")).toBe(false);
    });
    test("verifyPassword lower and uppercase, too long", () => {
      expect(verifyPassword("ABCDefghijklmnu")).toBe(true);
    });
    test("verifyPassword correct Password", () => {
      expect(verifyPassword("Ab1")).toBe(true);
    });
  });

  describe("Todo's", () => {
    test.todo("hier een lijstje van dingen die ik nog moet doen: KLAAR!");
  });
});

//  PASS  ./verify_password.test.js
//   Password veriifier functions
//     1. HasRightLength requirement
//       ✓ HasRightLength 8 (1 ms)
//       ✓ HasRightLength < 8 (1 ms)
//       ✓ HasRightLength 0
//       ✓ HassRightLength null
//     2. IsNotNull requirement
//       ✓ isNotNull null
//       ✓ isNotNull 'a' (1 ms)
//     3.hasUpperCaseCharacter requirement
//       ✓ hadUpperCaseCharacter
//       ✓ hadUpperCaseCharacter 'a'
//       ✓ hadUpperCaseCharacter 'Aa'
//       ✓ hadUpperCaseCharacter '123'
//       ✓ hadUpperCaseCharacter null
//     4.hasLowerCaseCharacter requirement
//       ✓ hadLowerCaseCharacter
//       ✓ hadLowerCaseCharacter 'a' (1 ms)
//       ✓ hadLowerCaseCharacter 'Aa'
//       ✓ hadLowerCaseCharacter '123'
//       ✓ hadLowerCaseCharacter null (2 ms)
//     5 hasDigit
//       ✓ hasDigit '1' (1 ms)
//       ✓ hasDigit 'a'
//       ✓ hasDigit 'A1' (1 ms)
//       ✓ hasDigit null
//     6 should comply to >= 3 conditions at the same time
//       ✓ all conditions false
//       ✓ 1 condition true (1 ms)
//       ✓ 2 conditions true
//       ✓ 3 conditions true
//       ✓ 4 conditions true
//       ✓ all conditions true
//     condition 7:should always comply to condition 4
//       ✓ verifyPassword null (1 ms)
//       ✓ verifyPassword 7 (1 ms)
//       ✓ verifyPassword only digits
//       ✓ verifyPassword only uppercase (1 ms)
//       ✓ verifyPassword only lowercase
//       ✓ verifyPassword only lowercase, too long (1 ms)
//       ✓ verifyPassword lower and uppercase, too long
//       ✓ verifyPassword correct Password (1 ms)
//     Todo's
//       ✎ todo hier een lijstje van dingen die ik nog moet doen: KLAAR!

// --------------------|---------|----------|---------|---------|-------------------
// File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
// --------------------|---------|----------|---------|---------|-------------------
// All files           |     100 |      100 |     100 |     100 |
//  verify_password.js |     100 |      100 |     100 |     100 |
// --------------------|---------|----------|---------|---------|-------------------
// Test Suites: 1 passed, 1 total
// Tests:       1 todo, 34 passed, 35 total
// Snapshots:   0 total
// Time:        0.3 s, estimated 1 s
// Ran all test suites matching /verify/i.

// Watch Usage: Press w to show more.
