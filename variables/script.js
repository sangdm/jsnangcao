// console.log(100);
// console.log('Hello World');
// console.log(20, 'Hello', true);
// const x = 100;
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.table({ name: 'Brad', email: 'brad@gmail.com' });
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);


//bai so 2: This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

//bai so 3: variables
// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'sangdm';
// const lastName = 'dm';
// let age = 30;

// console.log(firstName);

// // Naming Conventions
// // - Only letters, numbers, underscores and dollar signs
// // - Can't start with a number

// // Multi-Word Formatting
// // firstName = camelCase
// // first_name = underscore
// // FirstName = PascalCase
// // firstname = lowercase

// // We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// age = 31;
// console.log(age);

// // With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);

// const x = 100;

// // We can not re-assign a const variable
// // x = 200 // Will result in an error

// // We can still manipulate arrays and objects using const
// const arr = [1, 2, 3, 4];
// arr.push(8);
// console.log(arr);

// const person = {
//   name: 'Brad',
// };
// person.name = 'John';
// person.email = 'brad@gmail.com';
// console.log(person);

// // // Declare multiple values at once
// let a, b, c;

// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(f);


//bai so 4:

// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true; //ten bien bat dau bang has, is

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

//phan biet null và undefined

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};
//bat dau bang dong tu: 
function sayHello() {
  console.log('xin chao cac ban');
}
sayHello();

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3