/* EXERCÍCIO 1 

Faça um algoritmo que, dado as 3 notas tiradas por um aluno, calcule e imprima a 
média e classificação conforme a tabela:

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação: 
- Média menor que 5 = Reprovação 
- Média entre 5 e 7 = Recuperação 
- Média maior ou igual a 7 = Aprovado  */

const nota1 = 7;
const nota2 = 7;
const nota3 = 7; 

const mediaFinal = ((nota1 + nota2 + nota3) / 3);
console.log(mediaFinal);

if (mediaFinal < 5){
    console.log('Reprovação');
} else if (mediaFinal >= 5 && mediaFinal < 7 ){
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}


/* EXERCÍCIO 2

O IMC é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta

Fórmula do IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo: 

Abaixo de 18.5  = Abaixo do Peso;
Entre 18.5 e 25 = Peso Normal;
Entre 25 e 30 = Acima do peso;
Entre 30 e 40 = Obesidade; 
Acima de 40 = Obesidade Grave;  */

const peso = 75;
const altura = 1.75;

// Math.pow(altura, 2) => para fazer ao quadrado de forma mais simplificada
const imc = peso / (altura * altura); 
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do Peso');
}else if (imc >= 18.5 && imc < 25 ){
    console.log('Peso Normal');
}else if (imc >= 25 && imc < 30 ){
    console.log('Acima do peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obesidade');
}else {
    console.log('Obesidade Grave');
}

/* EXERCÍCIO 3

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da forma de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o calculo adequado

1- A vista (Débito) = recebe 10% de desconto 
2- A vista (Dinheiro ou PIX) = recebe 15% de desconto 
3- Em duas vezes = preço normal, sem juro
4- Acima de duas vezes = preço normal + juros de 10% */

const precoEtiqueta = 100;
const formaDePgto = 1 // débito


if (formaDePgto === 1){
    console.log('Total a pagar = ' + precoEtiqueta * 0.9);
}else if (formaDePgto === 2){
    console.log('Total a pagar = ' + precoEtiqueta * 0.85);
}else if (formaDePgto === 3){
    console.log('Total a pagar = ' + precoEtiqueta);
}else {
    console.log('Total a pagar = ' + precoEtiqueta * 1.1);
}