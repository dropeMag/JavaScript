// HOISTING
console.log(teste1)
// console.log(teste2) -> vai gerar um erro

// -----------------------

var nome = null;
var sobrenome;

console.log(nome);
console.log(sobrenome);

nome = "Pedro";
sobrenome = "Magalhães";

console.log(nome);
console.log(sobrenome);


var teste1;
// teste2; -> vai gerar um erro