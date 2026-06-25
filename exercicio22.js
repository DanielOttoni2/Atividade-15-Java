let matriz = [
    [2.5, 3.0, 1.2],
    [4.0, 5.5, 0.5],
    [1.0, 2.2, 3.3]
];

console.log("--- Matriz Original ---");
console.table(matriz);

let fator = Number(prompt("Digite o fator multiplicador:"));


if (isNaN(fator)) {
    fator = 2.0; 
}


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = matriz[i][j] * fator;
    }
}


console.log(`--- Matriz Multiplicada por ${fator} ---`);
console.table(matriz);