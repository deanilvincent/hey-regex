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
  expect(app.isEmailId("firstname.lastname@example.com", "common")).toEqual(
    true
  );
});

it("isEmailId Should return true if data and option are valid email address (email@subdomain.example.com)", () => {
  expect(app.isEmailId("email@subdomain.example.com", "common")).toEqual(true);
});

it("isEmailId Should return true if data and option are valid email address (firstname+lastname@example.com)", () => {
  expect(app.isEmailId("firstname+lastname@example.com", "uncommon")).toEqual(
    true
  );
});

it("isEmailId Should return false if data and option are valid email address (email@123.123.123.123) common", () => {
  expect(app.isEmailId("email@123.123.123.123", "common")).toEqual(false);
});

it("isEmailId Should return false if data and option are valid email address (email@123.123.123.123) uncommon", () => {
  expect(app.isEmailId("email@123.123.123.123", "uncommon")).toEqual(false);
});

it("isEmailId Should return true if data and option are valid email address (uncommon)", () => {
  expect(app.isEmailId("none@none.com", "uncommon")).toEqual(true);
});

it("isEmailId Should return type of boolean", () => {
  expect(typeof app.isEmailId("none@none.com", "common")).toEqual("boolean");
});

///////////////////////////////////////// URL
it("isUrl() should return true if data is https with 'withProtocol' option", () => {
  expect(app.isUrl("https://bing.com", "withProtocol")).toEqual(true);
});

it("isUrl() should return true if data has extended domain signature with 'withProtocol' option", () => {
  expect(app.isUrl("https://bing.com.pl", "withProtocol")).toEqual(true);
});

it("isUrl() should return true if data is http with 'withProtocol' option", () => {
  expect(app.isUrl("http://bing.com", "withProtocol")).toEqual(true);
});

it("isUrl() should return false if data has no protocol but with 'withProtocol' option", () => {
  expect(app.isUrl("bing.com", "withProtocol")).toEqual(false);
});

it("isUrl() should return true if data has protocol with 'optionalProtocol' option", () => {
  expect(app.isUrl("https://bing.com", "optionalProtocol")).toEqual(true);
});

it("isUrl() should return true if data with 'optionalProtocol' option", () => {
  expect(app.isUrl("bing.com", "optionalProtocol")).toEqual(true);
});

it("isUrl() should return true if data is a subdomain 'optionalProtocol'", () => {
  expect(app.isUrl("api.bing.com", "optionalProtocol")).toEqual(true);
});

it("isUrl() should return true if data is a multiple subdomain", () => {
  expect(app.isUrl("https://api.api.api.bing.com", "withProtocol")).toEqual(
    true
  );
});

it("isUrl() should return false if data has no domain at the end with 'withProtocol", () => {
  expect(app.isUrl("https://bing", "withProtocol")).toEqual(false);
});

it("isUrl() should return false if data has no domain at the end with 'optionalProtocol", () => {
  expect(app.isUrl("https://bing", "optionalProtocol")).toEqual(false);
});

it("isUrl() should return false if data has symbols with 'optionalProtocol", () => {
  expect(app.isUrl("https://bing@34sas*03", "optionalProtocol")).toEqual(false);
});

it("isUrl() should return false if data has symbols with 'withProtocol", () => {
  expect(app.isUrl("https://bing@34sas*03", "withProtocol")).toEqual(false);
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

it("Should throw exception if data and/or option for isUrl is empty", () => {
  expect(() => app.isUrl()).toThrow("isUrl() data and/or option is empty.");
});

it("Should throw exception if data for isUrl is empty", () => {
  expect(() => app.isUrl("", "withProtocol")).toThrow("isUrl() data is empty.");
});

it("Should throw exception if option for isUrl is empty", () => {
  expect(() => app.isUrl("asdf", "")).toThrow(
    "URL must have option: withProtocol or optionalProtocol."
  );
});

it("Should throw exception if option is unknown for isUrl", () => {
  expect(() => app.isUrl("asdf", "unknown")).toThrow("Unknown option.");
});