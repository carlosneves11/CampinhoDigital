const entrada = require('readline-sync');
let arrayNumero = [];
let cont = 0;

while(cont < 3){
    let numExistente = false;
    let num = entrada.questionInt('Informe um numero ' );
    if (cont == 0) {
        arrayNumero.push(num);
        cont++;
    } else {
        for(let i = 0; i < arrayNumero.length; i++){
            if (arrayNumero[i] == num){
                console.log('Valor existente ');
                numExistente = true;
                break;
            }
        }
        if (numExistente == false){
            arrayNumero.push(num);
            cont++;


        }


    }
}
console.log('a ordem dos numeros crescentes ' + arrayNumero.sort(function(a,b){return a-b}));
