// const userName = 'Jenisha';
// // userName = 'Maximilian';
// let age = 21;

// age = 25;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);


////////////////////////////////////
// Arrow Function

/*
const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 7));

*/


////////////////////////////////////
// Spread Operator (...)

const hobbies = ['swimming', 'Painting'];
const activeHobbies = ['Hiking'];

console.log(activeHobbies);

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: "Jenisha",
  age: 21
};

const copiedPerson = { 
  ID: 5, 
  ...person, 
  City: "Surat" 
};
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

//Array & Object Destructuring

const addNumbers = add(5, 7, 24, 28, 12);
console.log(addNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { name: fname, age} = person;

console.log(fname, age, person);




