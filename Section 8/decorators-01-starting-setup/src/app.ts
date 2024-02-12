function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger('LOGGING - PERSON')

class Person {
    name = 'Jeniiiisha';

    constructor() {
        console.log('Creating Person object 🕴️🧑‍🦱🤵');
    }
}

const pers = new Person();
console.log(pers);




