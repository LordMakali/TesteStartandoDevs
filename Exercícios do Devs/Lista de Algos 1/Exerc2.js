const nome = "Artthur"
const sal = 2800
const aumentado = sal * 1.18
const imposto = aumentado > 3000

if(imposto) {
    console.log(`O funcionário ${nome} irá começar a receber ${aumentado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Por se tratar de um valor maior que R$3.000,00 o mesmo terá de pagar imposto.`)
} else {console.log(`O funcionário ${nome} irá começar a receber ${aumentado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Por se tratar de um valor menor que R$3.000,00 o mesmo não terá de pagar imposto.`)}