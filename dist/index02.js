"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notas1 = [
    { nota: 5, peso: 2 },
    { nota: 8, peso: 3 },
];
const notas2 = [
    { nota: 7, peso: 1 },
    { nota: 9, peso: 2 },
    { nota: 6, peso: 3 }
];
function calcularMediaPonderada(lista) {
    let Notas = 0;
    let somaPeso = 0;
    for (const item of lista) {
        Notas += item.nota * item.peso;
        somaPeso += item.peso;
    }
    return parseFloat((Notas / somaPeso).toFixed(2));
}
const resultado1 = calcularMediaPonderada(notas1);
console.log(`Média ponderada 1: ${resultado1}`);
const resultado2 = calcularMediaPonderada(notas2);
console.log(`Média ponderada 2: ${resultado2}`);