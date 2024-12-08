"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function informacoesFuncionario({ nome, idade, salario, nivelComissao }) {
    if (nome && idade && nivelComissao) {
        console.log(`Diretor(a) ${nome}, ${idade} anos, comissão nível ${nivelComissao}, salário ${salario ? salario : 'N/A'}`);
    }
    else {
        console.log('Nome, idade e nível de comissão são obrigatórios');
    }
}
const funcionario01 = {
    nome: 'wesley',
    idade: 26,
    nivelComissao: 7,
    salario: 25000
};
const funcionario02 = {
    nome: 'joão',
    idade: 48,
    nivelComissao: 5,
};
informacoesFuncionario(funcionario01);
informacoesFuncionario(funcionario02);
