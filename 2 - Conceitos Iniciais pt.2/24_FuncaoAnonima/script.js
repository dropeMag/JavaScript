// Diferentes da função tradicional, ela funciona é acionada em tempo de execução, não ocupando espaço na memória.

let f1 = function(v1, v2){
    return v1 + v2
};

console.log(f1(1, 2));


// FUNÇÃO CONSTRUTURA
// O último parâmetro é o corpo da função, ou seja, o que a função vai fazer com os outros parâmetros
let f2 = new Function('v1', 'v2', 'return v1 + v2');

console.log(f2(2, 2));
