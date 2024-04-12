valor1 = parseInt(prompt('Insira um valor aqui'));
valor2 = parseInt(prompt('Insira outro valor'));
valor3 = parseInt(prompt('Insira outro valor'));


soma = valor1 + valor2 + valor3;

console.log (`A soma de ${valor1} e ${valor2} é igual a ${soma}`);

function calculoImc() {
    let peso = parseFloat(prompt('Insira o seu peso para calcular o imc'));
    let altura = parseFloat(prompt('Insira a sua altura'));

    let resultado = peso / (altura * altura);
    console.log(`O seu imc é igual a ${resultado.toFixed(2)}.`);

}

calculoImc();
