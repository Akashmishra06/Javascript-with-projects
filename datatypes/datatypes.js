// 1. Primitive Datatypes

const score = 100;
const scoreVal = 100.4;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false, because each Symbol is unique

const bigNumber = 2345432453245324n; // BigInt for very large numbers

// 2. Referenced Types (Non-primitive)

const heroes = ['shaktiman', 'naagraj', 'doga'];

const myObj = {
    name: "Akash",
    age: 22,
};

const myFunction = function() {
    console.log("hello world");
};

myFunction(); // Calls the function and logs "hello world"

// Type checking
console.log(typeof myFunction, typeof heroes); // "function" "object"

// Stack memory and Heap memory

// Call by value (primitive types) - stack memory
// Call by reference (non-primitive types) - heap memory

let myYouTubeName = "Akshs@.com";
let anotherName = myYouTubeName;
anotherName = 2345;
console.log(anotherName, myYouTubeName); // 2345 "Akshs@.com"

const myObj2 = {
    turnsis: false,
    data: "any",
};

const myObj3 = myObj2;
myObj3.turnsis = "travisHead";
console.log(myObj3.turnsis, myObj2.turnsis); // "travisHead" "travisHead"
