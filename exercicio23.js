const matrizA = [4, 5, 6];
const matrizB = [];


const linhasA = matrizA.length;      
const colunasA = matrizA[0].length;   


for (let j = 0; j < colunasA; j++) {
  matrizB[j] = []; 
  
  for (let i = 0; i < linhasA; i++) {
    matrizB[j][i] = matrizA[i][j];
  }
}

console.log("Matriz Original A:");
console.table(matrizA);

console.log("Matriz Transposta B:");
console.table(matrizB);