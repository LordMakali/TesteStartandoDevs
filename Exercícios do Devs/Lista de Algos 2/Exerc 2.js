function contador(str) {
    let qnt = 0;
    let padrão = /[aeiou]/;

    for (let i = 0; i < str.length; i++) {
        if(str[i].match(padrão)) {
            qnt++;
        }
    }
    return qnt
}

let texto = 'Artthur Makoto Gomes da Silva';

let resultado = contador(texto);

console.log(resultado);