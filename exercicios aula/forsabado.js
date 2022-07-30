//receba um numero e imprima a palavra ola mundo e represente um numero ao
//final de cada olá mundo!

let rs = require('readline-sync')

let numero = rs.question('Insira um numero: ')

for(let n = 1; n <= numero; n = n+1) { // se for menor ou igual ele continua 
console.log(" Olá mundoo "  + n)       //se for maior ele para o loop

}