/**************************************************************
 * Objetivo: Criar funções para realizar calculos matemáticos
 * Data: 15/02/2023
 * Autor: Marcel
 * Versão: 1.0
 **************************************************************/

//Função para realizar os calculos Matemáticos
function calcular(tipoCalculo){
    //Recebe o argumento e converte para MAIUSCULO (toUpperCase())
    let operacao = tipoCalculo.toUpperCase();
    //Recebe os valores digitados nas caixas de texto no html 
    //    (getElementById - pega o elemento pélo ID atribuido)
    let numero1 = document.getElementById('valor1').value; 
    let numero2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado'); 
    let resultado;
    
    if(operacao == 'SOMAR')
        resultado = Number(numero1) + Number(numero2);
    else if(operacao == 'SUBTRAIR')
        resultado = Number(numero1) - Number(numero2);
    else if(operacao == 'MULTIPLICAR')
        resultado = Number(numero1) * Number(numero2);
    else if(operacao == 'DIVIDIR')
        resultado = Number(numero1) / Number(numero2);

    // oFixed(2) - permite limitar a qtde de casas decimais    
    divResultado.innerText = resultado.toFixed(2);

}

//Função para limpar todos os valores
function limpar(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';

}