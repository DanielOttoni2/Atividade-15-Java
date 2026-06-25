function exibirInventarioConsolidado(vetorProdutos, matrizEstoque) {
console.log("========================================");
console.log("  INVENTÁRIO CONSOLIDADO DAS FILIAIS ");
console.log("========================================");
    
for (let i = 0; i < vetorProdutos.length; i++) {
        let nomeProduto = vetorProdutos[i];
        
        let estoqueFilial1 = matrizEstoque[i][0];
        let estoqueFilial2 = matrizEstoque[i][1];
        let totalAcumulado = estoqueFilial1 + estoqueFilial2;
        
        console.log(`Produto: ${nomeProduto.padEnd(12)} | Total: ${totalAcumulado} unidades`);
        console.log(`   (Filial 1: ${estoqueFilial1} | Filial 2: ${estoqueFilial2})`);
        console.log("----------------------------------------");
    }
}

const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

const estoqueFiliais = [
    [15, 10], 
    [50, 45], 
    [30, 25], 
    [12, 8]   
];

exibirInventarioConsolidado(produtos, estoqueFiliais);

