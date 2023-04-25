/**********************************************************
 * Objetivo: Manipular Arrays e JSON
 * Data: 20/03/2023
 * Autor: Erick
 * Versão: 1.0
 **********************************************************/

/* 
    [ ] - Significa que esse objeto é um array
    { } - Sigifica que esse objeto é um JSON  
*/

var nomes = ['José da Silva', 'Luiz da Silva', 'Maria da Silva', 'André da Silva'];
// console.log(typeof(nomes[1]));
// console.log(nomes);
// console.log(nomes[0]);
// console.table(nomes);
// console.table(nomes[1]);

//Percorrendo arrays 
//While
let cont = 1;

//Para retornar a qtde de elementos de um array usamos o length
let qtdeItens = nomes.length;

//Percorrendo o array de nomes, utilizando a variavel cont
// essa variavel muda o seu valor para cada
//loop realizado Ex: 0   1   2

//Exemplo usando o While    
/*while(cont < qtdeItens){
    // console.log('O aluno ' + nomes[cont]);
    console.log(`O aluno ${nomes[cont]}`);
    cont +=1;
}
*/

//Exemplo usando o FOR
// for(let cont=0; cont < qtdeItens; cont++){
//     console.log(`O aluno ${nomes[cont]}`);
// }

//Exemplo usando ForEach
// nomes.forEach(function(item){
//     console.log(`O aluno ${item}`);
// });

//Manipulando dados no array
//push - Adiciona elementos no final do array
nomes.push('Gabriel Xavier', 'Ana Maria');
// nomes.push('Ana Maria');

//unshift - Adiciona elementos no inicio do array
nomes.unshift('Zacarias da Silva');
nomes.unshift('Leonardo da Silva');
nomes.unshift('Luiz da Silva');

console.table(nomes);
//pop - remove o ultimo elemento do array
nomes.pop();

//shift - remove o primeiro elemento do array
nomes.shift();

console.table(nomes);



