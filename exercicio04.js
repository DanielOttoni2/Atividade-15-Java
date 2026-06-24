let lado1=Number(prompt("Digite o comprimento do primeiro lado:"));
let lado2=Number(prompt("Digite o comprimento do segundo lado:"));
let lado3=Number(prompt("Digite o comprimento do terceiro lado:"));
if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é Equilátero (todos os lados iguais).");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é Isósceles (dois lados iguais).");
} else {
    console.log("O triângulo é Escaleno (todos os lados diferentes).");
}