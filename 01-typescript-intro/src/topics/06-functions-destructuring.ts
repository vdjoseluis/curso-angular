export interface Product {
    description: string,
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//const taxCalculation = (options: TaxCalculationOptions): number[] => {
//const taxCalculation = ({ tax, products }: TaxCalculationOptions): [number, number] => {
export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {

    const { tax, products } = options;

    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.21;

const [total, taxTotal] = taxCalculation({ tax, products: shoppingCart });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);

