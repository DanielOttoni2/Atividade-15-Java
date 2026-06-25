function classificarIMC(peso, altura) {
 
    const imc = peso / (altura * altura);
    let classificacao = '';

 
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

   
    return `Seu IMC é ${imc.toFixed(1)} e a classificação é: '${classificacao}'`;
}

const resultado = classificarIMC(75, 1.75);
console.log(resultado);