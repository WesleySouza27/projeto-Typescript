// 02
export interface NotaPeso {
    nota: number
    peso: number
}

//03
export interface carteira {
    saldo: number
    entrada?: number
    saida?: number
}

//04
export type produto = {
    id: number
    nome: string
    preco: number
}

//05
export type User = {
    nome: string
    idade: number
    ocupacao: string
    salario?: number
}

//06
export type diretor = {
    nome: string
    idade: number
    nivelComissao: number
    salario?: number
    
}

//07
export type UserOuDiretor = User | diretor
