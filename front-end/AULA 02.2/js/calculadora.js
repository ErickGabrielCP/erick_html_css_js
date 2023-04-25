/**************************************************************
 * Objetivo: Criar funções para realizar calculos matemáticos
 * Data: 15/02/2023
 * Autor: Marcel
 * Versão: 1.0
 **************************************************************/

//Função para realizar os calculos Matemáticos

//Modelo 1 de criação de função (tradicional)
    // function calcular(tipoCalculo){
    //     //Recebe o argumento e converte para MAIUSCULO (toUpperCase())
    //     let operacao = tipoCalculo.toUpperCase();
    //     //Recebe os valores digitados nas caixas de texto no html 
    //     //    (getElementById - pega o elemento pélo ID atribuido)
    //     let numero1 = document.getElementById('valor1').value; 
    //     let numero2 = document.getElementById('valor2').value;
    //     let divResultado = document.getElementById('resultado'); 
    //     let resultado;
    //     let status = true;
    //     let msgErro;
    //     /*
    //         Exemplo utilizando IF

    //     if(operacao == 'SOMAR')
    //         resultado = Number(numero1) + Number(numero2);
    //     else if(operacao == 'SUBTRAIR')
    //         resultado = Number(numero1) - Number(numero2);
    //     else if(operacao == 'MULTIPLICAR')
    //         resultado = Number(numero1) * Number(numero2);
    //     else if(operacao == 'DIVIDIR')
    //         resultado = Number(numero1) / Number(numero2);
    //     */

    //     //Validação para tratar a entrada de caracteres inválido
    //         //isNaN() - é uma função que valida se a variavel tem 
    //             //valor numerico ou não
    //     if(isNaN(numero1) || isNaN(numero2))
    //     {
    //         status = false;
    //         msgErro = "ERRO: Entrada de valores inválida, não é possivel letras.";
    //     }else{

    //         /* Exemplo utilizando o Switch*/
    //         switch (operacao) {
    //             case "SOMAR":
    //                 resultado = Number(numero1) + Number(numero2);
    //                 break;
    //             case "SUBTRAIR":
    //                 resultado = Number(numero1) - Number(numero2);
    //                 break;
    //             case "MULTIPLICAR":
    //                 resultado = Number(numero1) * Number(numero2);
    //                 break;
    //             case "DIVIDIR":
    //                 //Tratamento de erro para a divisão por 0
    //                 if (numero2 == 0)
    //                 {
    //                     status = false;
    //                     msgErro = 'Erro: Não é possivel realizar uma divisão por 0.'
    //                 }else
    //                     resultado = Number(numero1) / Number(numero2);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }

    //     if (status){
    //         // oFixed(2) - permite limitar a qtde de casas decimais    
    //         divResultado.innerText = resultado.toFixed(2);
    //         //altera a cor e o tamanho da letra utilizando o CSS
    //         divResultado.style.color = '#0fff00';
    //         divResultado.style.fontSize = '2em';
    //     }else{
    //         divResultado.innerText = msgErro;
    //         divResultado.style.color = '#ffffff';
    //         divResultado.style.fontSize = '2em';
    //     }

    // }

//Modelo 2 de criação de função (callBack)
const calcular = function(tipoCalculo){
        //Recebe o argumento e converte para MAIUSCULO (toUpperCase())
        let operacao = tipoCalculo.toUpperCase();
        //Recebe os valores digitados nas caixas de texto no html 
        //    (getElementById - pega o elemento pélo ID atribuido)
        let numero1 = document.getElementById('valor1').value; 
        let numero2 = document.getElementById('valor2').value;
        let divResultado = document.getElementById('resultado'); 
        let resultado;
        let status = true;
        let msgErro;
        /*
            Exemplo utilizando IF

        if(operacao == 'SOMAR')
            resultado = Number(numero1) + Number(numero2);
        else if(operacao == 'SUBTRAIR')
            resultado = Number(numero1) - Number(numero2);
        else if(operacao == 'MULTIPLICAR')
            resultado = Number(numero1) * Number(numero2);
        else if(operacao == 'DIVIDIR')
            resultado = Number(numero1) / Number(numero2);
        */

        //Validação para tratar a entrada de caracteres inválido
            //isNaN() - é uma função que valida se a variavel tem 
                //valor numerico ou não
        if(isNaN(numero1) || isNaN(numero2))
        {
            status = false;
            msgErro = "ERRO: Entrada de valores inválida, não é possivel letras.";
        }else{

            /* Exemplo utilizando o Switch*/
            switch (operacao) {
                case "SOMAR":
                    resultado = SOMAR(numero1, numero2);
                    break;
                case "SUBTRAIR":
                    resultado = SUBTRAIR(numero1, numero2);
                    break;
                case "MULTIPLICAR":
                    resultado = MULTIPLICAR(numero1, numero2);
                    break;
                case "DIVIDIR":
                    //Tratamento de erro para a divisão por 0
                    if (numero2 == 0)
                    {
                        status = false;
                        msgErro = 'Erro: Não é possivel realizar uma divisão por 0.'
                    }else
                        resultado = DIVIDIR(numero1, numero2);
                    break;
                default:
                    break;
            }
        }

        if (status){
            // oFixed(2) - permite limitar a qtde de casas decimais    
            divResultado.innerText = resultado.toFixed(2);
            //altera a cor e o tamanho da letra utilizando o CSS
            divResultado.style.color = '#0fff00';
            divResultado.style.fontSize = '2em';
        }else{
            divResultado.innerText = msgErro;
            divResultado.style.color = '#ffffff';
            divResultado.style.fontSize = '2em';
        }
};

//Função para limpar todos os valores
function limpar(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';

}

//Modelo 3 de criação de função (Arrow Function)

const SOMAR         = (valor1, valor2) => Number(valor1) + Number(valor2);
const SUBTRAIR      = (valor1, valor2) => Number(valor1) - Number(valor2);
const MULTIPLICAR   = (valor1, valor2) => Number(valor1) * Number(valor2);
const DIVIDIR       = (valor1, valor2) => Number(valor1) / Number(valor2);

