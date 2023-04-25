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

//Adiciona o envento de escutar o click do botão de pesquisar
botao.addEventListener('click', function(){ getDadosCepAPI(); });