function contarMaioresQue50Positivos(vetor) {
    let quantidade = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 50) {
            quantidade++;
        }
    }
    return quantidade;
}

let numeros = [10, 60, -5, 85, 49, 100, 2];

let resultado = contarMaioresQue50Positivos(numeros);

console.log("Vetor:", numeros);
console.log("Quantidade de números positivos e maiores que 50:", resultado);