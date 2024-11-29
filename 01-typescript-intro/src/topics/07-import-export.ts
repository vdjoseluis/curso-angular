import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 250.0
    }
];

const tax = 0.21;

const [total, taxTotal] = taxCalculation({ tax, products: shoppingCart });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);