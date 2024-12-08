let numero1: number = 7
let numero2: number = 9

function validaNota(n1: number, n2: number): object {
    let media: number = (n1+n2)/2
    if (media >= 6) {
        let aluno: object = {
            nota: media,
            resultado: true, 
            mensagem: "Aprovado"
        }
        return aluno;
    } else {
        let aluno: object = {
            nota: media,
            resultado: false,
            mensagem: "Reprovado" 
        }
        return aluno;
    }
}

console.log(validaNota(numero1, numero2))