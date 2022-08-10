let rs = require('readline-sync')

let numeroInseridos = []
let resultado = 0
for(let i = 0; i < 5; i++){ // enquanto não chegar a quinta vez vai inicializar o meu loop

let numeroInserido = rs.questionInt(`Insira um numero ${i}: `) // Estou pedindo para o usuário adicionar um numero
numeroInseridos.push(numeroInserido)     //inteiro
 resultado = resultado + numeroInserido                                                       
} 
let imprimir = ""
for(let n = 0; n < numeroInseridos.length; n++){
    imprimir = `${imprimir} + ${numeroInseridos[n] }`
    
}
imprimir = imprimir + "=" + resultado
console.log(imprimir)
