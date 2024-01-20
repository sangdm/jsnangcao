
// function sayHello() {
//     console.log('Hello World');
//   }
  
 
//   sayHello();
  
  
//   function add(num1, num2) {
//     console.log(num1 + num2);
//   }
  

//   add(5, 10);
  
  
  
//   // Returning a value
//   function subtract(num1, num2) {
//     return num1 - num2;
  
//     console.log('After the return');
//   }
  
//   // Assign the returned value to a variable
//   const result = subtract(10, 2);
  
//   console.log(result, subtract(20, 5));

//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());