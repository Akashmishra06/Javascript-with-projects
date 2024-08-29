// Variable Declarations and Assignments

// `const` - Constant variable (cannot be reassigned)
const accountId = 12345; 
// accountId = 2; // Uncommenting this line will cause a TypeError: Assignment to constant variable.

// `let` - Block-scoped variable (can be reassigned)
let accountEmail = "0289@nit.co.in";
let accountState;
let accountNo = null;

// `var` - Function-scoped variable (can be reassigned)
var accountPassword = "1234rty";
accountPassword = 909000; // Reassignment is allowed

// Implicit global variable (not recommended)
accountCity = "Lucknow"; // `accountCity` is implicitly global

// Display values in a table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountNo]);
