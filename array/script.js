// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// // x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// // x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // // Chaining methods - Some methods can be chained depending on the return value.
// // x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);


// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // x = fruits.concat(berries);

// //spread
// // x = [...fruits, ...berries];
// x = [...fruits];
// x.push("cam");

// console.log({fruits});
// console.log({x});

const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x);