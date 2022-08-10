//leia numeros e ao final, faça a soma de todos eles e exiba de forma
//que apareça toda operação
let rs = require('readline-sync')

let numeroInserido1 = rs.questionInt(' Digite um numero 1: ')// rs.questionInt pq quero que o
let numeroInserido2 = rs.questionInt('Insira o numero 2: ')  // usuário digite um numero Inteiro
let numeroInserido3 = rs.questionInt('Insira o numero 3: ')
let numeroInserido4 = rs.questionInt('Insira o numero 4: ')
let numeroInserido5 = rs.questionInt('Insira o numero 5: ')

let resultado = numeroInserido1 + numeroInserido2 + numeroInserido3 + numeroInserido4 + numeroInserido5

console.log(`${numeroInserido1} + ${numeroInserido2} + ${numeroInserido3} + ${numeroInserido4
} + ${numeroInserido5} = ${resultado}`)