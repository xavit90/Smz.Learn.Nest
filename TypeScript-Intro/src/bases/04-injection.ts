import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

// Declarar una Clase
export class Pokemon {
    private readonly http: PokeApiAdapter;
    public readonly id: number;
    public name: string;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor (id: number, name: string, http: PokeApiAdapter) {
        this.id = id;
        this.name = name;
        this.http = http;
    }

    scream(): void {
        console.log(`${this.name.toUpperCase()}!`);
    }

    speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
    }
}

const pokeApi = new PokeApiAdapter();
export const charmander = new Pokemon(4, "Charmander", pokeApi);