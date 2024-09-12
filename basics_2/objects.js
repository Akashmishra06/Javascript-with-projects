// singleton 

// object litterals 


const mySym = Symbol("key1")

const jsUser = {
    name:"hitesh",
    age:  18,
    location: "jaipur",
    [mySym]: "121",
    email: "akashmishra@gmail.com",
    isLoggeIn: false,
    lastLoginDays: ["monday", "satuarday"],
    "fullName" : "akashMishra"
}

myArray = ['h', 'a']

console.log(jsUser.fullName);

console.log(jsUser["email"]);

// Object.freeze(jsUser)



jsUser.greet = function(){
    console.log(jsUser);
    
}

console.log(jsUser.greet());


const tinderUser = new Object() // singleton 
const tinderUser1 = {} // non singltonn
console.log(tinderUser);


tinderUser.id = "123abc"
