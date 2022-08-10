let contador = 0;
let destinoExiste = false
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}        