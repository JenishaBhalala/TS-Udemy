let num: number = 5;
let str: string = "Jenisha";

let nan1: number = NaN; 
console.log(nan1);

function iseven(a: number): boolean {
    return a%2===0
}

console.log(iseven(5)); 

let num1: bigint = 123456789101112123n;
console.log(num1)


///////////////////////////////////
// Function
function greet(name: string, id: number) {
    console.log(`Hello ${name} your ID is ${id}`);
}
const rg = greet("Jenisha", 5);
console.log(rg)  // Undefined coz the function itself is not returning anything


////////////////////////////////////
// Arrow Function
const g = (name: string, id: number) => {
    console.log(`${name} ${id}`);  // Output is: aJB 28
    return "JBH";
}

const res = g("JB", 28);
console.log(res)   // Output is 'JBH' coz function returns 'JBH'


//////////////////////////////////////////////////////
// Enum

//The first member, Newspaper, is initialized with the numeric value 1. 
//Thus The remaining members will be incremented by 1 from the numeric value of the first value

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia | undefined{
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia | undefined = getMedia('Forbes'); // returns Magazine
console.log(mediaType);

/////////////////////////////////////
// Interface

interface Calc {  
    subtract (first: number, second: number): any;  
}  

// Here Calculator is an object which is type of Calc(Interface)
let Calculator: Calc = {    
    subtract(first: number, second: number) {  
        return first - second;  
    }  
}  
const k = Calculator.subtract(7,5)
console.log(k)


///////////////////////////////////////////
// Array and its various operations

const arr: number[] = [2,8,5,7,4]
console.log(arr)
console.log(arr.length)
const newarr = arr.push(285)
console.log(newarr)
console.log(arr)
console.log(arr.length)
console.log("➡️➡️➡️➡️➡️➡️")
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
console.log("🙌🙌🙌🙌🙌🙌")

arr.forEach(
    (cv) => console.log(cv)
    )
    
    console.log("🟢🟢🟢🟢🟢🟢")
    for(const x in arr) {
        console.log(x)
    }
    console.log("🎯🎯🎯🎯🎯🎯")
    for(const y of arr){
        console.log(y)
}

//////////////////////////////////////////////
// MAP
const arr1: string[] = ['a', 'b', 'h', 'j']
const nm = arr1.map((curEle) => curEle.toUpperCase());
console.log(nm)

// FILTER
const nf = arr.filter((curEle) => curEle%2 === 0)
console.log(nf)

const nf1 = arr.filter((curEle) => curEle > 4)
console.log(nf1)

//////////////////////////////////////////////
// enum

enum Roles {
    user = "user",
    admin = "admin"
} 


type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles;
}

const u1: LoginDetails = {
    name: "Jenisha",
    email: "bhalala@gmail.com",
    password: "jhjh",
    role: Roles.admin
}

const u2: LoginDetails = {
    email: "jenisha@gmail.com",
    password: "hjhj",
    role: Roles.user
}

const isAdmin: (user: LoginDetails) => string = (user: LoginDetails): string => {
    const {name, email, role} = user;
    return role === "admin" ? `${email} is allowed to edit the website`: `${email} is not allowed to edit the website` 
}

console.log(isAdmin(u1))
console.log(isAdmin(u2))


///////////////////////////////////////
// Generics


function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("HelloWorld 🌏🌎🌍");  
let output2 = identity<number>(28);

console.log(output1)
console.log(output2)


/////////////////////////////////////
//  Overloading

function add<T>(a: T, b: T): void {
    console.log(typeof a);
    console.log(typeof b);
}

const res1: void = add<number>(5, 7);
const res2: void = add<string>('Jenisha', 'Bhalala');

// passing multiple data types at once

function add1<T, U>(a: T, b: U): void {
    console.log(typeof a);
    console.log(typeof b);
}

const r1: void = add1<number, string>(5, 'Jenisha');
const r2: void = add1<string, number>('Jenisha', 28);
const r3: void = add1<string, boolean>('JB', true);


/////////////////////////////////////
//  Interface

interface Products {
    name: string;
    price: number;
    quantity: number;
}

const p1: Products = {
    name: "Jenisha",
    price: 2800,
    quantity: 5
}

const calcTotalprice: (product: Products) => number = (product: Products): number => {
    const {price, quantity} = product;
    return price*quantity;
}

console.log(calcTotalprice(p1))

/////////////////////////////////////
// Class

class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce() {
        return `My name is ${this.name}, ${this.age} years old and I love ${this.hobbies[0]} and ${this.hobbies[1]}`
    }
}

const per1: Persons = new Persons("Jenisha", 21, ['swimming', 'painting'])
const per2: Persons = new Persons("Bhalala", 22, ['cooking', 'dancing'])


console.log(per1.hobbies)
console.log(per1.introduce())
console.log(per2)

//////////////  child class

class Student extends Persons {
    enrollNo: number;
    course: string;

    constructor(name: string, age: number, hobbies: string[], enrollNo: number, course: string) {
        super(name, age, hobbies)
        this.enrollNo = enrollNo;
        this.course = course;
    }

    displayInfo() {
        return `Enrollment No: ${this.enrollNo}\nCourse: ${this.course}\nName: ${this.name}\nAge: ${this.age}\nHobbies: ${this.hobbies.join(', ')}`;
    }

}

const stu1: Student = new Student("JB", 28, ['singing', 'reading'], 1044, "Data Science")

console.log(stu1.hobbies)
console.log(stu1.age)
console.log(stu1.displayInfo()); // student class method
console.log(stu1.introduce());  // Calling Parent class method in child class


////////////////////////////////////////////
// Getter and Setter

class Person {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter method for the name property(here get is a keyword)
    get name(): string {
        return this._name;
    }

    // Setter method for the name property(here set is a keyword)
    set name(newName: string) {
        // Add any validation logic here
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Invalid name!");
        }
    }
}
// Create an instance of the Person class
const person1 = new Person("Jenisha");

// Access the name property using the getter method
console.log(person1.name); // Output: Jenisha

// Set the name property using the setter method
person1.name = "Bhalala";

// Access the name property again using the getter method
console.log(person1.name); // Output: Bhalala

// Try setting an invalid name
person1.name = ""; // Output: Invalid name!


////////////////////////////////////////
////// Bank Account

class BankAccount {
    private _balance: number ;

    constructor(balance: number) {
        this._balance = balance
    }

    get balance(): number {
        return this._balance;
    }

    set balance(newBalance: number) {
        if(newBalance >= 0 ) {
            this._balance = newBalance;
            console.log(`New updated balance is: ${newBalance}`)
        } else {
            console.error(`PLease enter an valid amount !!`)
            //throw new Error("Invalid Amount ❌❌")
        }
    }
}

const bankAcc = new BankAccount(500);

console.log(bankAcc.balance);

bankAcc.balance = 2800

bankAcc.balance = 0
bankAcc.balance = -5

////// Temperature Converter

class Temperature {
    private _celsius: number = 0;
    
    constructor(celsius: number) {
        this._celsius = celsius;
    }

    get celsius(): number {
        return this._celsius;
    }

    set celsius(cel: number) {
        this._celsius = cel;
        //console.log(`Temperature in celsius is : ${cel}`);
    }

    get fahrn(): number {
        const f =(this._celsius * 9 / 5) + 32;
        return f;
    }

    set fahrn(f: number) {
        const c = (f - 32) * 5 / 9; 
        this._celsius = c;
        //console.log(`Temperature in celsius is : ${c}`);
    }
}

const tempt = new Temperature(28);

//console.log(tempt.celsius)
console.log(tempt.fahrn)


tempt.celsius = 50;
//console.log(tempt.celsius)
console.log(tempt.fahrn)

tempt.fahrn = 70
console.log(tempt.celsius)
//console.log(tempt.fahrn)


/////////////////////////////////////////
// Abstract class

//The getSepia() method is an abstract method and so must be defined in the derived class. 
//The Instagram class derives from the TakePhoto class and so it must define the getSepia() method as abstract. 
//The Instagram class must implement all the abstract methods of the TakePhoto class, otherwise the compiler will show an error.
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        ) {}

        abstract getSepia(): void
        getReelTime(): number {
            return 28;
        }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Hellooo Sepia !!")
    }
}

const jenisha: TakePhoto =  new Instagram("front", "tokyo", 5)
console.log(jenisha.getSepia())
console.log(jenisha.getReelTime())


/////////////////////////////////////
// Decorator 

// Decorator function
function simpleDecorator(target: any, propertyKey: string) {
    console.log(`Decorator called on ${propertyKey} of ${target.constructor.name}`);
}

// Class with decorated method

class Example {
    @simpleDecorator
    greet() {
        console.log("Hello, world!");
    }
}

const example = new Example();
example.greet();