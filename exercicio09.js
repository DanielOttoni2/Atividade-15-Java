let senha = Number(prompt("Digite a senha de usuário:"));

let tentativas = 3;
let senhaCorreta = 'segredo123';
let acessoPermitido = false;

for (let i = 1; i <= tentativas; i++) {
    let senhaDigitada = prompt(`Tentativa ${i} de ${3}. Digite sua senha:`);

    if (senhaDigitada === senhaCorreta) {
        acessoPermitido = true;
        alert('Acesso Permitido');
        break;
    } else {
        let tentativasRestantes = tentativas - i;
        if (tentativasRestantes > 0) {
            alert(`Senha incorreta. Você ainda tem ${tentativasRestantes} tentativa(s).`);
        }
    }
}

if (!acessoPermitido) {
    alert('Conta Bloqueada');
}