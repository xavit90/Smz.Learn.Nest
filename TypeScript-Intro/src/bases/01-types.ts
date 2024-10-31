//Declaración de variables con y sin tipos de datos asignados.
export const name = "xavit";
export const mark: number = 90;
export const isValid: boolean = false;

export const templateString = `Esto es un "template string"
Que puede tener:
* Tipo multilinea
* "" -> comillas dobles
* '' -> comillas simples
* Inyectar valores, ej. variable (name) -> ${name}
* Expresiones, ej. (1 + 1) -> ${1 + 1}
* Tipos numericos, ej. ${mark}
* Tipos booleanos, ej. ${isValid}`;

console.log(templateString);