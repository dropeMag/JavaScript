function primeiraFuncao(){
    console.log("Hello World.");
};

primeiraFuncao();
primeiraFuncao();
primeiraFuncao();

function dizerNome(nome){
    console.log("O nome é: " + nome);
};

dizerNome("Pedro");

var nomeFulano = "Fulano";

dizerNome(nomeFulano);

function soma(a, b){
    var soma = a + b;
    return soma;
};

console.log(soma(1, 2));
