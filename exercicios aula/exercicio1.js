const entrada = require ('readline-sync');

const ano = entrada.questionInt('\nInforme o ano de nascimento: ');

const idade = 2022 - ano;

if (idade >= 18){
console.log('seu voto é obrigatório');
} else if(idade > 15 && idade < 18){
    console.log('voto opcional');
}else {
    console.log('você não pode votar');
}




