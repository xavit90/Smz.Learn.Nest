import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// Declarar una Clase
export class Pokemon {
    public readonly id: number;
    public name: string;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public scream(): void {
        console.log(`${this.name.toUpperCase()}!`);
    }

    public speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
    }
}

// Declarar una Clase (simplificada)
/*export class Pokemon {
    constructor (public readonly id: number, public name: string) {
    }
}*/

// Instanciar un objeto a partir de una clase
export const charmander = new Pokemon(4, "Charmander");
charmander.scream();
charmander.speak();
console.log(charmander.getMoves());