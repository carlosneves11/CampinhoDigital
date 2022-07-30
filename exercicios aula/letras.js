//faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha

let rs = require('readline-sync')
let palavra = rs.question('/n Informe uma palavra: ')
let tamanhoPalavra = palavra.length

for(let i = 0; i < tamanhoPalavra; i = i+1){
console.log(palavra.charAt(i))

}