function inversor(texto) {
    if(typeof texto != 'string'){
        console.log("oh carai")
    }

    let invertido = '';
    for (let i = texto .length - 1; i >= 0; i --) {
        invertido += texto[i]
    }
    console.log(`Palavra: "${texto}"`)
    return invertido;
    }

console.log(inversor("Saiba a diferença entre mas e mais."))

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

let texto = "Saiba a diferença entre mas e mais.";

let resultado = contador(texto);

console.log(resultado);
