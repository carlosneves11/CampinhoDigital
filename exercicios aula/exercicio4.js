const entrada = require ('readline-sync');

const quantmaca = entrada.questionInt('\nInforme a quantidade de macas  ');
let valtot = 0;
if (quantmaca < 12) {
    valtot = quantmaca * 0.30;
} else {
    valtot = quantmaca * 0.25;   
}

console.log(' o valor total é: ' + valtot);