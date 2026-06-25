let vetorA = [];
let vetorB = [];
let vetorC = [];

console.log("Digite 5 elementos para o Vetor A:");
for (let i = 0; i < 5; i++) {
    let elemento = prompt(`Vetor A - Posição ${i}:`);
    vetorA.push(elemento);
}

console.log("Digite 5 elementos para o Vetor B:");
for (let i = 0; i < 5; i++) {
    let elemento = prompt(`Vetor B - Posição ${i}:`);
    vetorB.push(elemento);
}


for (let i = 0; i < 5; i++) {
    vetorC.push(vetorA[i]);
    vetorC.push(vetorB[i]);
}

console.log("Vetor A:", vetorA);
console.log("Vetor B:", vetorB);
console.log("Vetor C (Intercalado):", vetorC);