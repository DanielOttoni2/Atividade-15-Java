let matriz = [[], [], []];
let maiorValor = -Infinity;
let maiorLinha = 0;
let maiorColuna = 0;

for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      
        let valor = Number(prompt(`Digite o valor inteiro para a posição [Linha ${linha}, Coluna ${coluna}]:`));
        matriz[linha][coluna] = valor;
        
    
        if (valor > maiorValor) {
            maiorValor = valor;
            maiorLinha = linha;
            maiorColuna = coluna;
        }
    }
}

console.log("Matriz inserida:", matriz);
alert(`Maior valor encontrado: ${maiorValor} \nCoordenadas exatas -> Linha: ${maiorLinha}, Coluna: ${maiorColuna}`);