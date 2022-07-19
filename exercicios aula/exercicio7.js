const entrada = require('readline-sync');
const num1 = entrada.questionInt('\nDigite o primeiro numero ');
const num2 = entrada.questionInt('\nDigite o segundo numero ');
if (num1 == num2){
    console.log('Os numeros são iguais');
    } else if(num1 > num2){
        console.log('O primeiro numero é maior que o segundo');
    }else {
        console.log('O segundo numero é maior que o primeiro');
    }
    