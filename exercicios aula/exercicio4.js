const entrada = require ('readline-sync');

const quantmaca = entrada.questionInt('\nInforme a quantidade de macas  ');
if (quantmaca < 12) {
    console.log(' o valor total é: ' + parseFloat(quantmaca * 0.30));
} else {
    console.log(' o valor total é: ' + parseFloat(quantmaca* 0.25));
    
}