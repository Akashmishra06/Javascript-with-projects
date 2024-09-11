// date and time in javascript 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

let myCreatedDate = new Date(2023, 1, 23, 4, 5, 6)
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());

// methos of date 