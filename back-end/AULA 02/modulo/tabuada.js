/********************************************************************************
 * Objetivo: Realizar o calculo de uma tabuada
 * Autor: Erick
 * Data: 07/03/2023
 * Versão: 1.0
 ********************************************************************************/

//Gerar a tabuada de um número
const calcularTabuada = function (numeroTabuada) {
    //Entradas
    let tabuada = numeroTabuada;
    let status;
    let cont = 0;
    let resultado;


    //Processamento

    if (tabuada == '')
        status = false;
    else if (isNaN(tabuada))
        status = false;
    else if (tabuada == 0)
        status = false;
    else if (tabuada == null)
        status = false;
    else {
        //While
        while (cont <= 10) {
            resultado = tabuada * cont;
            console.log(tabuada + 'x' + cont + '=' + resultado);
            cont += 1;
        }
        status = true;
    }

    //Saída
    return status;
};


//Para acessar uma função em outro arquivo, é necessário fazer o exports da função
module.exports = {
    calcularTabuada
}
