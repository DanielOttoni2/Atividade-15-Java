let vetor = new Array(10);

console.log("Digite 10 números inteiros:");

for (let i = 0; i < 10; i++) {
    let entrada = prompt(`Digite o valor para a posição ${i + 1}:`);
    vetor[i] = Number(entrada);
}

console.log("Vetor original:", vetor);

let inicio = 0;
let fim = vetor.length - 1;

while (inicio < fim) {
    let temp = vetor[inicio];
    vetor[inicio] = vetor[fim];
    vetor[fim] = temp;

    inicio++;
    fim--;
}

console.log("Vetor invertido:", vetor);