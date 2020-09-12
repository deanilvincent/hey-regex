const app = require("./index");

///////////////////////////////////////// WHOLE NUMBER
it("isWholeNumber Should return true if data is wholeNumber", () => {
  expect(app.isWholeNumber(123)).toEqual(true);
});

it("isWholeNumber Should return true if data is string wholeNumber", () => {
  expect(app.isWholeNumber("123")).toEqual(true);
});

it("isWholeNumber Should return false if data is with decimal", () => {
  expect(app.isWholeNumber(123.3)).toEqual(false);
});

it("isWholeNumber Should return false if data is string characters", () => {
  expect(app.isWholeNumber("asdf")).toEqual(false);
});

it("isWholeNumber Should return type of boolean", () => {
  expect(typeof app.isWholeNumber(123)).toEqual("boolean");
});

///////////////////////////////////////// DECIMAL NUMBER
it("isDecimalNumber Should return true if data is decimalNumber (##.#)", () => {
  expect(app.isDecimalNumber(12.3)).toEqual(true);
});

it("isDecimalNumber Should return true if data is decimalNumber (.#)", () => {
  expect(app.isDecimalNumber(0.3)).toEqual(true);
});

it("isDecimalNumber Should return true if data is decimalNumber (.##########..)", () => {
  expect(app.isDecimalNumber(0.3777777777777777777, "roundOff")).toEqual(true);
});

it("isDecimalNumber Should return true if data is decimalNumber (##.##)", () => {
  expect(app.isDecimalNumber(12.33)).toEqual(true);
});

it("isDecimalNumber Should return false if data is decimalNumber (##.###) without roundOff option", () => {
  expect(app.isDecimalNumber(12.333)).toEqual(false);
});

it("isDecimalNumber Should return true if data is decimalNumber (##.###) with roundOff option", () => {
  expect(app.isDecimalNumber(12.333, "roundOff")).toEqual(true);
});

it("isDecimalNumber Should return true if data is decimalNumber (##.#########...) with roundOf option", () => {
  expect(app.isDecimalNumber(12.377777777777777, "roundOff")).toEqual(true);
});

it("isDecimalNumber Should return true if data is string decimalNumber", () => {
  expect(app.isDecimalNumber("123.3")).toEqual(true);
});

it("isDecimalNumber Should return true if data is whole number", () => {
  expect(app.isDecimalNumber(123)).toEqual(true);
});

it("isDecimalNumber Should return false if data is string characters", () => {
  expect(app.isDecimalNumber("asdf")).toEqual(false);
});

it("isDecimalNumber Should return type of boolean", () => {
  expect(typeof app.isDecimalNumber(123.3)).toEqual("boolean");
});

///////////////////////////////////////// ALPHA NUMERIC
it("isAlphaNumeric Should return true if data and option are valid (alphanumeric data)", () => {
  expect(app.isAlphaNumeric("testing 01", "withSpace")).toEqual(true);
});

it("isAlphaNumeric Should return true if data and option are valid (alphanumericdata)", () => {
  expect(app.isAlphaNumeric("testing01", "withoutSpace")).toEqual(true);
});

it("isAlphaNumeric Should return true if option is withSpace and if sample data is 'hello world'", () => {
  expect(app.isAlphaNumeric("hello world", "withSpace")).toEqual(true);
});

it("isAlphaNumeric Should return true if option is withSpace and if sample data is 'helloworld'", () => {
  expect(app.isAlphaNumeric("helloworld", "withSpace")).toEqual(true);
});

it("isAlphaNumeric Should return true if option is withoutSpace and if sample data is 'helloworld'", () => {
  expect(app.isAlphaNumeric("helloworld", "withoutSpace")).toEqual(true);
});

it("isAlphaNumeric Should return false if option is withoutSpace and if sample data is 'hello world'", () => {
  expect(app.isAlphaNumeric("hello world", "withoutSpace")).toEqual(false);
});

it("isAlphaNumeric Should return type of boolean", () => {
  expect(typeof app.isAlphaNumeric("asdf", "withSpace")).toEqual("boolean");
});

///////////////////////////////////////// EMAIL IDS
it("isEmailId Should return true if data and option are valid email address (common)", () => {
  expect(app.isEmailId("none@none.com", "common")).toEqual(true);
}); 

it("isEmailId Should return true if data and option are valid email address (firstname.lastname@example.com)", () => {
  expect(app.isEmailId("firstname.lastname@example.com", "common")).toEqual(true);
});


it("isEmailId Should return true if data and option are valid email address (email@subdomain.example.com)", () => {
  expect(app.isEmailId("email@subdomain.example.com", "common")).toEqual(true);
});

it("isEmailId Should return true if data and option are valid email address (firstname+lastname@example.com)", () => {
  expect(app.isEmailId("firstname+lastname@example.com", "uncommon")).toEqual(true);
});

it("isEmailId Should return true if data and option are valid email address (email@123.123.123.123)", () => {
  expect(app.isEmailId("email@123.123.123.123", "uncommon")).toEqual(true);
});

it("isEmailId Should return true if data and option are valid email address (uncommon)", () => {
  expect(app.isEmailId("none@none.com", "uncommon")).toEqual(true);
});

it("isEmailId Should return type of boolean", () => {
  expect(typeof app.isEmailId("none@none.com", "common")).toEqual("boolean");
});

///////////////////////////////////////// EXCEPTIONS
it("Should throw exception if data value is empty in isWholeNumber()", () => {
  expect(() => app.isWholeNumber()).toThrow("isWholeNumber() data is empty.");
});

it("Should throw exception if data value is empty in isDecimalNumber()", () => {
  expect(() => app.isDecimalNumber()).toThrow(
    "isDecimalNumber() data is empty."
  );
});

it("Should throw exception if option is unknown for isDecimalNumber", () => {
  expect(() => app.isDecimalNumber(2, "unknown")).toThrow("Unknown option.");
});

it("Should throw exception if data and/or option for isAlphaNumeric is empty", () => {
  expect(() => app.isAlphaNumeric()).toThrow(
    "isAlphaNumeric() data and/or option is empty."
  );
});

it("Should throw exception if data for isAlphaNumeric is empty", () => {
  expect(() => app.isAlphaNumeric("", "roundOff")).toThrow(
    "isAlphaNumeric() data is empty."
  );
});

it("Should throw exception if option for isAlphaNumeric is empty", () => {
  expect(() => app.isAlphaNumeric("asdf", "")).toThrow(
    "Alpha numeric must have option: withSpace or withoutSpace."
  );
});

it("Should throw exception if option is unknown for isAlphaNumeric", () => {
  expect(() => app.isAlphaNumeric("asdf", "unknown")).toThrow(
    "Unknown option."
  );
});

it("Should throw exception if data and/or option for isisEmailIdAlphaNumeric is empty", () => {
  expect(() => app.isEmailId()).toThrow(
    "isEmailId() data and/or option is empty."
  );
});

it("Should throw exception if data for isEmailId is empty", () => {
  expect(() => app.isEmailId("", "roundOff")).toThrow(
    "isEmailId() data is empty."
  );
});

it("Should throw exception if option for isEmailId is empty", () => {
  expect(() => app.isEmailId("asdf", "")).toThrow(
    "Email id must have option: common or uncommon."
  );
});

it("Should throw exception if option is unknown for isEmailId", () => {
  expect(() => app.isEmailId("asdf", "unknown")).toThrow("Unknown option.");
});
