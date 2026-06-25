const taxaDolar = 5.40;
const taxaEuro = 5.80;  

let opcao;
let valorReais;
let resultado;

do {
   
    opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Converter Dólar\n" +
        "2 - Converter Euro\n" +
        "3 - Sair"
    );

    opcao = Number(opcao);

    switch (opcao) {
        case 1:
            valorReais = Number(prompt("Digite o valor em Reais (R$):"));
            if (!isNaN(valorReais) && valorReais >= 0) {
                resultado = valorReais / taxaDolar;
                alert(`R$ ${valorReais.toFixed(2)} equivalem a US$ ${resultado.toFixed(2)}`);
            } else {
                alert("Valor inválido! Digite um número positivo.");
            }
            break;

        case 2:
            valorReais = Number(prompt("Digite o valor em Reais (R$):"));
            if (!isNaN(valorReais) && valorReais >= 0) {
                resultado = valorReais / taxaEuro;
                alert(`R$ ${valorReais.toFixed(2)} equivalem a € ${resultado.toFixed(2)}`);
            } else {
                alert("Valor inválido! Digite um número positivo.");
            }
            break;

        case 3:
            alert("Programa encerrado!");
            break;

        default:
            alert("Opção inválida! Escolha 1, 2 ou 3.");
    }
} while (opcao !== 3);