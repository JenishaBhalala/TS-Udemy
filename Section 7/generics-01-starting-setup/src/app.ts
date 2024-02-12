//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// // Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety.
/*
const names: Array<string> = [];


//the echo function is generic because it uses the type parameter T

function echo<T>(value: T): T {
    return value;
  }
  
  // Using the generic function with different data types

  //When you call echo("Hello, TypeScript!"), TypeScript infers the type string for T. 
  const resultString: string = echo("Hello, TypeScript!");

  // when you call echo(42), TypeScript infers the type number for T.
  const resultNumber: number = echo(42);


  const resultArray: number[] = echo([1, 2, 3]);
  
  console.log(resultString)
  console.log(resultNumber)
  console.log(resultArray)  */


// const mergedObj = merge({name: 'Jenisha'}, {age: 22});

// Generic function to swap the values of two variables
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

// Using the generic function with different data types
const swappedNumbers = swap(1, 2);
const swappedStrings = swap("hello", "world");

console.log(swappedNumbers); // Output: [2, 1]
console.log(swappedStrings); // Output: ["world", "hello"]


//
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Jenisha', hobbies: ['H', 'I']}, {age: 22});
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no Value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi There !!'));






