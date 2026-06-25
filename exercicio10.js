function calcularMediaPonderada(n1, n2, p1, p2) {
    const numerador = (n1 * p1) + (n2 * p2);
    const denominador = p1 + p2;
    return numerador / denominador;
}

const nota1 = Number(prompt("Digite a primeira nota por gentileza:"));
const peso1 = Number(prompt("Digite o peso da primeira nota por gentileza:"));

const nota2 = Number(prompt("Digite a segunda nota por favor:"));
const peso2 = Number(prompt("Digite o peso da segunda nota por favor:"));


if (peso1 + peso2 === 0) {
} else {
    
const resultado = calcularMediaPonderada(nota1, nota2, peso1, peso2);
console.log("A média ponderada é: " + resultado.toFixed(2));
alert("A média ponderada é: " + resultado.toFixed(2));
}