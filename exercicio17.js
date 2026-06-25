let codigosProdutos = [101, 202, 303, 404, 505, 606, 707, 808];


let codigoRemover = Number(prompt("Digite o código do produto que deseja remover do sistema:"));


let indice = codigosProdutos.indexOf(codigoRemover);


if (indice !== -1) {
    codigosProdutos[indice] = 0;
    alert("Sucesso! Produto removido. Novo vetor: " + codigosProdutos.join(", "));
} else {
    alert("Erro: O produto não existe no sistema.");
}