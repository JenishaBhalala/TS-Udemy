import 'reflect-metadata';
import { plainToClass } from 'class-transformer'; 
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
    {title: 'A carpet', price: 28.5}, 
    {title: 'A Book', price: 24.7}
];

const newProd = new Product('', -5.28);
validate(newProd).then(errors => {
    if(errors.length > 0) {
        console.log('VALIDATION ERRORS !!!!!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

console.log(newProd.getInformation());

//const p1 = new Product('Book', 28.5);

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

//console.log(p1.getInformation());