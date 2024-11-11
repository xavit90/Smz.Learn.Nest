export class NewPokemon {
    readonly id: number;
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    scream() {
        console.log('NO QUIERO!!!');
    }

    speak() {
        console.log('NO QUIERO HABLAR!');
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    readonly id: number;
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charizard = new Pokemon(6, 'Charizard');
charizard.scream();
charizard.speak();