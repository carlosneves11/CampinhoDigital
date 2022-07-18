const entrada = require('readline-sync');

const num = entrada.questionInt('\nInforme um numero: ');

if (num % 2 == 0) {
    console.log('esse numero é par');
} else {
    console.log('esse numero é impar');
}