// Primitive and Non Primitive call by value and call by referencee  

// javascript  is dynamic types language 

// symbol 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



let Number_1 = 344.5
let BigNumer = 23453245678654324567543456543n
let Booln = true
let nullVal = null
let val = undefined
let Str = "Akash"
const symA1 = Symbol("323232")

// no primitve 

let myyArray = ["hello", "Everyone", "this", "is", "me"]

const myobj = {
    key1:"Akash",
    Key2:"Mishra"
}

const Myfunction = function(){
    console.table([Number_1, val, Str]);
    console.log(myobj, myyArray);
    
    
}
Myfunction()0