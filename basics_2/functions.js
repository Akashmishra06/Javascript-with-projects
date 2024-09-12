// function sayMyName(){
//     console.log("Akash"); 
// }

// sayMyName()


// function addTwoNumber(number1, number2) {//parameters
//     console.log(number1 + number2);
//     return number1+number2
    
// }

// const result = addTwoNumber(3,5) // arguments

// console.log(result);


// function logInUserMassage(username){
//     if (username === undefined){
//         console.log("plsEnter username");
//         return 
//     }
//     return `${username} just logedIn`
// }

// console.log(logInUserMassage())


// rest and spread in js 
function calculateCartPrice(val1 , val2, ...num1){
    return num1
}

console.log(calculateCartPrice(2,  200, 400, 500));

// objects 

const user = {
    name:"akash",
    prince: 3232
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.prince}`);
    
}

handleObject(user)

