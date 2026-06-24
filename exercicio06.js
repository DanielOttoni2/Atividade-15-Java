let numero=Number(prompt("Digite um numero"));
if (numero % 2 === 0) {
    console.log(`Seu número é par: ${numero} e o triplo dele é ${numero * 3}`);
} else {
    console.log(`Seu número é ímpar: ${numero} e o quadrado dele é ${numero ** 2}`);
}