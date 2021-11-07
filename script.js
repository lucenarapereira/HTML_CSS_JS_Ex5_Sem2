function AskingData(){

var name = prompt("Qual é o seu nome?");
while(name=="")
        {
            name = prompt("Por gentileza, preencha seu nome.");
        }

var age = prompt("Qual é a sua idade");
while(isNaN(age))
        {
            age = prompt("Por gentileza, digite um número inteiro para sua idade.");
        }

var sport = confirm("Você gosta de praticar algum esporte?");

var mensagem = `${name}, tem ${age} anos de idade e ${sport?"pratica":"não pratica"} esportes.`;

console.log(mensagem);

}