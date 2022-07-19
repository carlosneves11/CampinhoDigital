const entrada = require('readline-sync');
const num1 = entrada.questionInt('\nDigite um numero ');
const num2 = entrada.questionInt('\nDigite o segundo numero ');
if (num1 > num2) {
    console.log('\nO primeiro numero é o maior ');
} else {
    console.log('\nO segundo numero é o maior ');
}