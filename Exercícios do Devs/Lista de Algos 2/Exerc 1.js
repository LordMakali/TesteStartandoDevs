function inversor(texto) {
    let invertido = '';
    for (let i = texto .length - 1; i >= 0; i --) {
        invertido += texto[i]
    }
    return invertido;
    }

console.log(inversor("Saiba a diferença entre mas e mais."))