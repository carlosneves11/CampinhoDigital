/* Faça um programa que ao digita determinados numeros retorne uma musica
ex: Se o usuário digitar 1 ele retorna Fernandinho Faz chover , se digitar 2- eu não perdi
o controle, 3 - Sou humano, 4- Ousado amor
*/
var rs = require ('readline-sync')
var num1 = rs.questionInt('Digite um numero ')
if (num1 == 1) {
    console.log('/nfernandinho - Faz Chover')
} else {
    console.log('Eu não perdi o controle não')
}