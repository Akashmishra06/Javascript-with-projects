Here are the structured notes and the code for your `.md` file:

```markdown
# JavaScript Notes

## Strict Mode

```javascript
"use strict";
```
- Enforces stricter parsing and error handling in JavaScript.
- Helps catch common coding errors and prevents the use of some unsafe features.

## Alerts

```javascript
// alert("hello"); // Use in browsers or HTML environments, not in Node.js
```

## Code Readability

- Aim for high readability in your code.

## TC39

- Official TC39 website: [TC39](https://tc39.es/)

## NNBBSSU

- **N**: Number
- **N**: BigInt
- **B**: String
- **B**: Boolean
- **S**: Null
- **S**: Undefined
- **U**: Symbol

## Data Types

```javascript
let name = "Akash";        // String
let age = 22;              // Number
let ifLoggedIn = false;    // Boolean
```

### Number

- **Number**: Represents numeric values (e.g., `2 ** 53`).

### BigInt

- **BigInt**: For very large integers (e.g., `1234567890123456789012345678901234567890n`).

### String

- **String**: Represents textual data (e.g., `""`, `''`).

### Boolean

- **Boolean**: Represents true or false values.

### Null

- **Null**: Represents a standalone value with no value (e.g., `null`).

### Undefined

- **Undefined**: Indicates a variable that has not been assigned a value.

### Symbol

- **Symbol**: Represents a unique value (e.g., `Symbol('123')`).

## Objects

- Objects are collections of properties.

## Example

```javascript
console.log(typeof null); // Output: "object"
```
- Note: `typeof null` returns `"object"` due to a historical bug in JavaScript.
```








Certainly! Here are the structured notes on type conversion and boolean conversion for your `.md` file, including the relevant code:

```markdown
# JavaScript Type Conversion

## Conversion from String to Number

```javascript
let score = "3sd3";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output: "number"
console.log(valueInNumber);        // Output: NaN (Not a Number)
```
- **`Number(score)`**: Converts the string `score` to a number. If the string cannot be converted, the result is `NaN` (Not a Number).
- **`NaN`**: Represents a value that is not a valid number.

## Comparisons and Data Types

- **Ensure Same Data Type Before Comparison**:
  - `"33" == 33` // This would be `true` with type coercion.
  - `"3df" == NaN` // This will result in `false` as NaN is not equal to any value, including itself.
  
  To avoid unexpected results, ensure data types match before comparison.

## Boolean Conversion

```javascript
let isLoggedIn = 1;
let BoolIsLoggedIn = Boolean(isLoggedIn);
console.log(BoolIsLoggedIn); // Output: true
```
- **`Boolean(isLoggedIn)`**: Converts `isLoggedIn` to a boolean.
  - `1` converts to `true`.
  - `0` converts to `false`.
  - Any non-zero number is converted to `true`.
  - **Other Values**:
    - `""` (empty string), `null`, `undefined`, and `NaN` convert to `false`.
    - Non-empty strings and objects convert to `true`.
```

This format provides a clear explanation of type conversion in JavaScript, including both string-to-number conversion and boolean conversion, along with relevant code examples.