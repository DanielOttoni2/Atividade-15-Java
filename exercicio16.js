const vetorInicial = [12, 35, 8, 42, 19, 7, 100, 53, 24, 9];


const vetorPares = vetorInicial.filter(numero => numero % 2 === 0);
const vetorImpares = vetorInicial.filter(numero => numero % 2 !== 0);

console.log("Vetor Inicial:", vetorInicial);
console.log("Vetor de Pares:", vetorPares);
console.log("Vetor de Ímpares:", vetorImpares);