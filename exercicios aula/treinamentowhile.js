let rs = require('readline-sync');
let numeroFatorial = rs.question('\nInsira um numero para calcular o Fatorial ');
let resultado = 1

while (numeroFatorial > 1) { 
    resultado = numeroFatorial * resultado
    numeroFatorial = numeroFatorial - 1
    if (numeroFatorial > 1) {
        
    }
    
}
console.log(resultado)