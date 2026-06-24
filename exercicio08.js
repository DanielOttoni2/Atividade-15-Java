let numero = +prompt("Digite um número inteiro positivo:");

let numeroOriginal = numero;
let contador = 0;

if (numero === 0) {
    contador = 1;
}

while (numero > 0) {
    let resto = numero % 10;
    numero = (numero - resto) / 10;
    contador++;
}

console.log(`O número ${numeroOriginal} possui ${contador} dígito(s).`);