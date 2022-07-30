//o numero que colocamos dentro do char A1 é a posicao do caractere 
// queremos da string lembrando que o primeiro elemento é 0 e não 1 sendo assim, uma string  
 //de 2 elementos 0 e 1 para cada char você deve concatenar isto numa string separada e 
 //exibir ela no final exercício dia 25 julho campinho

 rs = require('readline-sync')
 trabalho = rs.question('\nDigite uma palavra: ')
 trabalho_final = ""
 for (let i = 0; i != trabalho.length; i++){
        switch (trabalho.charAt(i).tolowerCase()){
            case "a";
            trabalho_final += "A"
            break
            case "e";
            trabalho_final += "E"
            break
            

        }
 }