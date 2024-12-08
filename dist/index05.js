"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function informacoesUser({ nome, idade, ocupacao, salario }) {
    if (nome && idade) {
        console.log(`${nome}, ${idade} anos, ${ocupacao ? ocupacao : 'N/A'}, ${salario ? salario : 'N/A'}`);
    }
    else {
        console.log('nome e idade são obrigatórios');
    }
}
const usuario = {
    nome: 'wesley',
    idade: 26,
};
const usuario02 = {
    nome: 'joão',
    idade: 30,
    ocupacao: 'pedreiro',
    salario: 8500
};
informacoesUser(usuario);
informacoesUser(usuario02);
