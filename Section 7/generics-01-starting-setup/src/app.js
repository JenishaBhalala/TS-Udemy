//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// // Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety.
var names = [];
//the echo function is generic because it uses the type parameter T
function echo(value) {
    return value;
}
// Using the generic function with different data types
//When you call echo("Hello, TypeScript!"), TypeScript infers the type string for T. 
var resultString = echo("Hello, TypeScript!");
// when you call echo(42), TypeScript infers the type number for T.
var resultNumber = echo(42);
var resultArray = echo([1, 2, 3]);
console.log(resultString);
console.log(resultNumber);
console.log(resultArray);
