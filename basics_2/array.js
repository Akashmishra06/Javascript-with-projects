// // 1. **`push()`**
// // 2. **`pop()`**
// // 3. **`shift()`**
// // 4. **`unshift()`**
// // 5. **`concat()`**
// // 6. **`slice()`**
// // 7. **`splice()`**
// // 8. **`forEach()`**
// // 9. **`map()`**
// // 10. **`filter()`**
// // 11. **`reduce()`**
// // 12. **`find()`**
// // 13. **`findIndex()`**
// // 14. **`indexOf()`**
// // 15. **`lastIndexOf()`**
// // 16. **`sort()`**
// // 17. **`reverse()`**
// // 18. **`every()`**
// // 19. **`some()`**
// // 20. **`join()`**
// // 21. **`toString()`**
// // 22. **`fill()`**
// // 23. **`copyWithin()`**
// // 24. **`at()`**


// const Array_1 = ['Noida', "Ghaziabad", "Delhi", "NewDelhi", "Okhla", "GreaterNoida", "Alpha1", "Alpha2"]
// const Array_2 = ['Area1', 'area2', 'area3', 12, 43, 34343]
// const Arra_3 = Array_1.concat(Array_2)
// const Arra_4 = Array_1.push(Array_2[4])
// console.log(Array_1);
// // console.log();

// // console.log(Array_1);
// // console.log(Array_2);




const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2.length);

myArr.push(6)

myArr.pop()

myArr.unshift(0)
myArr.shift() // like pop
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);
