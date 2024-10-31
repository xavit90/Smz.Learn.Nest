//Declaración de interfaz
interface Pokemon {
    id: number, //La declaración de estos campos son obligatorios
    name: string,
    age?: number //La declaración de este tipo indica que es opcional o nulo
}

//Creación de objeto de tipo interface
export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur"
}

export const charmander: Pokemon = {
    id: 4,
    name: "Charmander"
}

//Trabajar con arreglos
export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmander);

console.log(pokemons);