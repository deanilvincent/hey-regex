# Overview

NPM package that uses Javascript RegEx that checks common inputs like numbers, alpha numeric, email and url. 

[![Build Status](https://dev.azure.com/dv-github-repos/hey-regex/_apis/build/status/deanilvincent.hey-regex?branchName=master)](https://dev.azure.com/dv-github-repos/hey-regex/_build/latest?definitionId=5&branchName=master)

## Installation

`npm i hey-regex --save`

## Setup & Basic Usage
```
const heyRegex = require('hey-regex')
// or ES6 import
import heyRegex from 'hey-regex'

console.log(heyRegex.isWholeNumber(123)) // returns true
console.log(heyRegex.isWholeNumber(123.3)) // returns false

console.log(heyRegex.isDecimalNumber(12.3)) // returns true
console.log(heyRegex.isDecimalNumber(123.37777, "roundOff)) // returns true

console.log(heyRegex.isAlphaNumeric("testing01", "withoutSpace")) // returns true
console.log(heyRegex.isAlphaNumeric("hello world", "withSpace")) // returns true
console.log(heyRegex.isAlphaNumeric("hello world", "withoutSpace")) // returns false

console.log(heyRegex.isEmailId("email@subdomain.example.com", "common")) // returns true

console.log(heyRegex.isEmailId("firstname+lastname@example.com", "uncommon")) // returns true

console.log(heyRegex.isUrl("https://bing.com", "withProtocol")) // returns true
console.log(heyRegex.isUrl("https://bing.com", "optionalProtocol")) // returns true
console.log(heyRegex.isUrl("bing.com", "optionalProtocol")) // returns true
```

## Additional Info

| Functions | Options | 
| - | - | - |
| `isWholeNumber()` | none | If number is whole number or not |
| `isDecimalNumber()` | `roundOff` (Optional only) | 
| `isAlphaNumeric()` | `withSpace` & `withoutSpace` |
| `isEmailId()` | `common` & `uncommon` |
| `isUrl()` | `withProtocol` & `optionalProtocol`  |

### RegEx Used

Visit the [regEx-utils.js](./regEx-utils.js) file.

### Contribute

Feel free to clone or fork this project:  `https://github.com/deanilvincent/hey-regex.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/hey-regex) :)

### License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/deanilvincent/hey-regex/blob/master/LICENSE.md/) file for details.