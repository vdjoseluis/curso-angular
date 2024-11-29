export class Person {
    /* public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    } */

    constructor(
        public name: string, 
        public address: string = 'No address'
    ) { }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName);
    }
}

const ironman = new Person('Ironman');
const ironman2 = new Person('Ironman', 'New York');
console.log(ironman);
console.log(ironman2);

const hero = new Hero('Ironman', 45, 'Tony');
console.log(hero);

export class Hero2 {
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        //this.person = new Person(realName);
    }    
}

const tony = new Person('Tony Stark', 'New York');

const hero2 = new Hero2('Ironman', 45, 'Tony', tony);
console.log(hero2);