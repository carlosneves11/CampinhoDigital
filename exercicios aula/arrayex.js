
let resultado = 0
let rs = require('readline-sync')
let numero = rs.questionInt('Informe um numero 1: ')
let numero2 = rs.questionInt('Informe o numero 2: ')
let numero3 = rs.questionInt('Informe o numero 3: ')
resultado = numero + numero2 + numero3

console.log(`${numero} + ${numero2} + ${numero3}= ${resultado}`)

