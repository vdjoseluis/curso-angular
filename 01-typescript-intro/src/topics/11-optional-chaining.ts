export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jose Luis',
}

const passenger2: Passenger = {
    name: 'Raquel',
    children: ['Sophie', 'Jose Luis', 'Maria Cristina'],
}

const returnChildrenNumber = (passenger: Passenger): number => {
    //const howManyChildren = passenger.children?.length || 0;
    !passenger.children && (passenger.children = []);
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name,howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2); 