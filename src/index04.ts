import { produto } from './tipos'

const listaProdutos: produto[] = []

function cadastrarProduto(nome: string, preco: number): void {
    const novoProduto: produto = {
        id: (listaProdutos.length + 1),
        nome,
        preco
    }

    listaProdutos.push(novoProduto)
    console.log(`Produto ${nome} cadastrado com sucesso!`)
}


function listarProdutos(): void {
    if (listaProdutos.length === 0) {
        console.log('Nenhum produto cadastrado')
        return
    }

    console.log('lista de produtos')

    listaProdutos.forEach((produto) => {
        console.log(`Id: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco}`)
    })
}

function excluirProduto(id: number): void {
    const index = listaProdutos.findIndex((produto) => produto.id === id)

    if (index === -1) {
        console.log(`Produto com ID ${id} não encontrado.`)
        return
    }

    const produtoRemovido = listaProdutos.splice(index, 1)[0]
    console.log(`Produto: ${produtoRemovido.nome} removido com sucesso!`)
}


cadastrarProduto('celular', 1100)
cadastrarProduto('mouse', 30)
listarProdutos()
excluirProduto(listaProdutos[0].id)
listarProdutos()