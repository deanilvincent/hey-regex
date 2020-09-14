const regEx = require("./regEx-utils");

module.exports = {
  isWholeNumber(data) {
    if (!data) {
      throw new Error("isWholeNumber() data is empty.");
    }
    return new RegExp(regEx.wholeNumber).test(data) ? true : false;
  },
  isDecimalNumber(data, option) {
    if (!data) {
      throw new Error("isDecimalNumber() data is empty.");
    }
    if (option) {
      if (option === "roundOff") {
        data = data.toFixed(2);
      } else {
        throw new Error("Unknown option.");
      }
    }

    return new RegExp(regEx.decimalNumber).test(data) ? true : false;
  },
  isAlphaNumeric(data, option) {
    if (!data && !option)
      throw new Error("isAlphaNumeric() data and/or option is empty.");
    if (!data) throw new Error("isAlphaNumeric() data is empty.");

    if (!option)
      throw new Error(
        "Alpha numeric must have option: withSpace or withoutSpace."
      );

    if (option === "withSpace") {
      return new RegExp(regEx.alphaNumericWithSpace).test(data) ? true : false;
    }
    if (option === "withoutSpace") {
      return new RegExp(regEx.alphaNumericWithoutSpace).test(data)
        ? true
        : false;
    }
    // if unknown option
    throw new Error("Unknown option.");
  },
  isEmailId(data, option) {
    if (!data && !option)
      throw new Error("isEmailId() data and/or option is empty.");
    if (!data) throw new Error("isEmailId() data is empty.");
    if (!option)
      throw new Error("Email id must have option: common or uncommon.");

    if (option === "common") {
      return new RegExp(regEx.commonEmailId).test(data) ? true : false;
    }
    if (option === "uncommon") {
      return new RegExp(regEx.unCommonEmailId).test(data) ? true : false;
    }
    // if unknown option
    throw new Error("Unknown option.");
  },
  isUrl(data, option) {
    if (!data && !option)
      throw new Error("isUrl() data and/or option is empty.");
    if (!data) throw new Error("isUrl() data is empty.");
    if (!option)
      throw new Error(
        "URL must have option: withProtocol or optionalProtocol."
      );

    if (option === "withProtocol") {
      return new RegExp(regEx.urlWithProtocol).test(data) ? true : false;
    }
    if (option === "optionalProtocol") {
      return new RegExp(regEx.urlWithOptionalProtocol).test(data)
        ? true
        : false;
    }
    // if unknown option
    throw new Error("Unknown option.");
  },
};
