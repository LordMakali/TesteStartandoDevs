const nome = "Artthur"
const nota1 = 8
const nota2 = 9
const nota3 = 7
const media = (nota1 + nota2 + nota3) / 3
const resultado = media >= 8

if(resultado) {
    console.log(`O alune ${nome} conseguiu uma média de ${media} e foi aprovado`)
} else {
    console.log(`O alune ${nome} conseguiu uma média de ${media} e foi reprovado`)
}