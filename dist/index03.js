"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let carteira = {
    saldo: 1000,
    entrada: 200,
    saida: 1500
};
function atualizarSaldo(carteira) {
    if (carteira.entrada) {
        carteira.saldo += carteira.entrada;
        console.log(`entrada adicionada ${carteira.entrada}, saldo atual: ${carteira.saldo}`);
    }
    if (carteira.saida) {
        if (carteira.saldo >= carteira.saida) {
            carteira.saldo -= carteira.saida;
            console.log(`Saida de ${carteira.saida} efetuada com sucesso! saldo atual: ${carteira.saldo}`);
        }
        else {
            console.log(`Saida de ${carteira.saida} negada! saldo insuficiente!  saldo atual: ${carteira.saldo}`);
        }
    }
}
atualizarSaldo(carteira);
