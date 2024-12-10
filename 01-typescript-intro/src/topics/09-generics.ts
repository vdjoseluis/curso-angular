export const whatsMyType = <T>(argument: T): T => {
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(20);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));