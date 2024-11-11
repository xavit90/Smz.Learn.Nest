import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAxiosAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

// Declarar una Clase
export class Pokemon {
    private readonly http: HttpAdapter;
    public readonly id: number;
    public name: string;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor (id: number, name: string, http: HttpAdapter) {
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
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0])
        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);
export const bulbasaur = new Pokemon(4, "Bulbasaur", pokeApiFetch);

console.log(charmander.getMoves());
console.log(bulbasaur.getMoves());