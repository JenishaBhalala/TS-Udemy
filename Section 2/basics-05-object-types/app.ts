///////////////////////////////////////////
// OBJECT 
///////////////////////////////////////////

/*

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Jenisha',
//   age: 21,
//   hobbies: ['swimming', 'sleeping'],
//   role: [5, 'Author']
// };

// const ADMIN = 0;            
// const READ_ONLY = 1;
// const AUTHOR = 2;

 /////////////////////////////////
 // ENUM

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};

const person = {
  name: 'Jenisha',
  age: 21,
  hobbies: ['swimming', 'sleeping'],
  role: Role.ADMIN
};

// person.role.push("HIJ");
// person.role[1]=10;

// person.role = [10, 'admin', 'user'];

let favActivities: string[];
favActivities = ['swim'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map());   // !!! GIVES AN ERROR !!!
}

// if (person.role === 'READ-ONLY-USER') {
//   console.log('is read only');
// }

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
 */


//////////////////////////////////////
// UNION Types

/*

type Combinable = number | string;   //Type aliases
type ConversionDescriptor = 'as-number' | 'as-text'  // Aliases

function combine(
  input1: Combinable , 
  input2: Combinable, 
  resultConversion: ConversionDescriptor) {

  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(28,24, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('28','24', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Jenisha', 'Harsh', 'as-text');
console.log(combinedNames);

*/


//////////////////////////////////////
// Function return types & "void"

/*

// To use "undefined" you must need to use return statement
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) :void{
  console.log('Result is: ' + num);
}

//// Function types & callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 28));


//////////////////////////////////////
// Function as Types

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 7;

console.log(combineValues(5, 7));

addAndHandle(28, 24, (result) => {
  console.log(result);
});

*/


//////////////////////////////////////
// "Unknown" Type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jenisha';

// Here 'string' and 'number' are the  string literal....i.e. used to check the type of a variable or expression
if (typeof userInput === 'string') {

  userName = userInput;
  //console.log("It is a string....")
}
// else {console.log("It is a number....")}


///////////////////////////
//The 'never' type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred !!', 500);
console.log(result); 