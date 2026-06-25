const matriz = [
    [10, 20, 30, 40],
    [ 5, 15, 25, 35],
    [ 2,  4,  6,  8],
    [ 1,  3,  5,  7]
];


let somaSegundaColuna = 0;
const indiceColunaAlvo = 1; 

console.log("--- Elementos da Segunda Coluna (Índice 1) ---");

for (let linha = 0; linha < matriz.length; linha++) {
    
    let elemento = matriz[linha][indiceColunaAlvo];
    
    console.log(`Linha ${linha}, Coluna ${indiceColunaAlvo}: ${elemento}`);
   
    somaSegundaColuna += elemento;
}
console.log("-----------------------------------------");
console.log(`Soma final dos elementos da segunda coluna: ${somaSegundaColuna}`);