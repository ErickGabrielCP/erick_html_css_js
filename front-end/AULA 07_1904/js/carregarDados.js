/*********************************************************************************************************************
 * Objetivo: Carregar dados de endereço através do CEP informado (Buscando em JSON local e usando uma API publica)
 * Data: 12/04/2023
 * Autor: Marcel
 * Versão: 1.0
 *********************************************************************************************************************/

//Import da váriavel dadosCep existente no arquivo dados.js
import {dadosCep} from './dados.js';

//Cria um objeto do botão conforme a input no HTML
var botao = document.getElementById('pesquisar');
var form = document.getElementById('formulario');
var caixaCep = document.getElementById('input-cep');


//Função para receber o CEP e buscar os dados de endereço
const getDadosCep = function(){
    //Recebe o numero do cep digitado no formulário
    let numeroCep = document.getElementById('input-cep').value;

    //Percorre o array dadosCep para filtrar o cep informado
    dadosCep.dados.forEach(function(item){
        //Busca o cep digitado dentro do JSON
        if(item.cep.indexOf(numeroCep) != -1)
            setDadosCep(item);
    });
};

//Função para receber o CEP e buscar os dados na API do Via CEP
const getDadosCepAPI = function(){
    //REcebe o CEP digitado pelo usuário
    let numeroCep = document.getElementById('input-cep').value;

    let url = `https://viacep.com.br/ws/${numeroCep}/json/`;

    //Realiza uma requisição na URL especificada
    fetch (url)
        //Recebe os dados de retorno da API e converte em JSON
        .then (function(response){
            return response.json();
        })
        //Recebe os dados convertidos em JSON e chama a função para carregar os dados na tela
        .then (function(dados){
            setDadosCep(dados);
        })
}

//Função para carregar os dados nas caixas do formulário
const setDadosCep = function(item){
     //Carrega os dados encontrados no formulário
     form.logradouro.value = item.logradouro;
     form.bairro.value = item.bairro;
     form.cidade.value = item.localidade;
     form.estado.value = item.uf;
};

//Função para validar a entrada de dados e fazer a 
//mascara do CEP
const validacaoMascara = function(teclaDigitada){
   //Recebe a tecla digitada e converte para o código ascii  
   let ascii = teclaDigitada.charCode;

   //Recebe o elemento da caixa de texto
   let cep = document.getElementById('input-cep');
   
   //Padroniza a caixa de texto com o fundo branco
   cep.style.backgroundColor = 'white';

   //Permite somente a entrada das teclas numéricas (0 ... 9)
   //conforme a tabela ascii
   if((ascii < 48 || ascii > 57) && ascii != 13){
        //Coloca a cor vermelha no fundo da caixa para destacar
        //o erro de digitação
        cep.style.backgroundColor = 'red';
        //Cancela a ação da tecla digitada
        teclaDigitada.preventDefault();
   //Realiza a ação de executar a busca do CEP no Enter     
   }else if (ascii == 13){
        getDadosCepAPI();
   }else{
        //Caso a tecla digitada seja permitida, recebe o conteúdo ja
        // existente na caixa
        let conteudoCep = String(cep.value);
        //Se a qtde de digitos for  = 5, concatena o simbolo de traço 
            //no conteudo da caixa
        if(conteudoCep.length == 5){
            cep.value = conteudoCep + '-';
        //Limita a qtde de digitos em apenas 9 digitos    
        }else if(conteudoCep.length >= 9){
            teclaDigitada.preventDefault();
        }
   }

}

//Adiciona o evento de escutar o click do botão de pesquisar
botao.addEventListener('click', function(){ getDadosCepAPI(); });
//Adiciona o evento de escutar a ação de digitar na caixa
caixaCep.addEventListener('keypress', function(tecla){ validacaoMascara(tecla); })