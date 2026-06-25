const notasEquipes = [
    [8.5, 7.0, 9.0],  
    [6.0, 7.5, 8.0],  
    [9.5, 9.0, 10.0],
    [5.5, 6.5, 7.0]
    ];
    
const medias = [];
for (let i = 0; i < notasEquipes.length; i++) {
    let soma = 0;
    
   
    for (let j = 0; j < notasEquipes[i].length; j++) {
        soma += notasEquipes[i][j];
    }
    
   
    let media = soma / notasEquipes[i].length;
    
    
    medias.push(Number(media.toFixed(2)));
}
console.log("=== RELATÓRIO DE MÉDIAS DOS PROJETOS ===");
for (let i = 0; i < medias.length; i++) {
    console.log(`Equipe ${i + 1}: Média = ${medias[i]}`);
}