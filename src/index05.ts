import { User } from './tipos'

function informacoesUser({ nome, idade, ocupacao, salario}: User): void {
    if (nome && idade && ocupacao) {
        console.log(`${nome}, ${idade} anos, ${ocupacao}, ${salario ? salario : 'N/A'}`)
    } else {
        console.log('nome e idade são obrigatórios')
    }
}

const usuario: User = {
    nome: 'wesley',
    idade: 26,
    ocupacao: 'Programador'
}

const usuario02: User = {
    nome: 'joão',
    idade: 30,
    ocupacao: 'pedreiro',
    salario: 8500
}


informacoesUser(usuario)
informacoesUser(usuario02)