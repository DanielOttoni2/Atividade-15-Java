let inicio = Number(prompt("Digite o número inicial:"));
let fim = Number(prompt("Digite o número final:"));
let somaAcumulada = 0;


let min = Math.min(inicio, fim);
let max = Math.max(inicio, fim);


for (let i = min; i <= max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        somaAcumulada += i;
    }
}

console.log(`A soma acumulada dos números múltiplos de 3 ou múltiplos de 5 entre ${min} e ${max} é: ${somaAcumulada}`);
alert(`A soma acumulada dos números múltiplos de 3 e múltiplos de 5 é: ${somaAcumulada}`);