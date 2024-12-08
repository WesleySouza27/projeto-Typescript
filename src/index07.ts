import { User } from './tipos'
import { diretor } from './tipos'
import { UserOuDiretor } from './tipos'

const usuario03: User = {
    nome: 'josé',
    idade: 29,
    ocupacao: 'engenheiro',
    salario: 8000
}

const usuario04: User = {
    nome: 'maria',
    idade: 24,
    ocupacao: 'empresária'
}

const funcionario01: diretor = {
    nome: 'wesley',
    idade: 26,
    nivelComissao: 7,
    salario: 25000   
}

const funcionario02: diretor = {
    nome: 'matheus',
    idade: 36,
    nivelComissao: 4, 
}

const lista: UserOuDiretor[] = [usuario03, funcionario01, usuario04, funcionario02]


function verificaTipo(lista: UserOuDiretor[]): void {
    for (const item of lista) {
        if ("nivelComissao" in item) {
            console.log(
            `Diretor(a) Nome: ${item.nome}, Idade: ${item.idade}, Nível de comissão: ${item.nivelComissao}, Salário: ${item.salario || 'N/A'}`
            )
        } else {
            console.log(
            `User -> Nome: ${item.nome}, Idade: ${item.idade}, ocupação: ${item.ocupacao || 'N/A'}, Salário: ${item.salario || 'N/A'}`
            )
        }
    }
}

verificaTipo(lista)


