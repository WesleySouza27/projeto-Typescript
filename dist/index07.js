"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario03 = {
    nome: 'josé',
    idade: 29,
    ocupacao: 'engenheiro',
    salario: 8000
};
const usuario04 = {
    nome: 'maria',
    idade: 24,
};
const funcionario01 = {
    nome: 'wesley',
    idade: 26,
    nivelComissao: 7,
    salario: 25000
};
const funcionario02 = {
    nome: 'matheus',
    idade: 36,
    nivelComissao: 4,
};
const lista = [usuario03, funcionario01, usuario04, funcionario02];
function verificaTipo(lista) {
    for (const item of lista) {
        if ("nivelComissao" in item) {
            console.log(`Diretor(a) Nome: ${item.nome}, Idade: ${item.idade}, Nível de comissão: ${item.nivelComissao}, Salário: ${item.salario || 'N/A'}`);
        }
        else {
            console.log(`User -> Nome: ${item.nome}, Idade: ${item.idade}, ocupação: ${item.ocupacao || 'N/A'}, Salário: ${item.salario || 'N/A'}`);
        }
    }
}
verificaTipo(lista);
