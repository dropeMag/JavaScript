// COM ARRAYS
/*
let n1 = [1, 2, 3, 4, 5];
let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n3 = [n1 + n2];
let n4 = [n1, n2];
let n5 = [...n1, ...n2];

console.log('vira string: ', n3);
console.log(" ");
console.log('array de arrays: ', n4);
console.log(" ");
console.log('array com os elementos: ', n5);
*/

// COM OBJETO
/*
const jg1 = {nome: "Pedro", energia: 100, vidas: 3, magia: 150};
const jg2 = {nome: "Kiano", energia: 80, vidas: 5, força: 200};
const jg3 = {...jg1, ...jg2};

console.log(jg3);
*/

// COM ARROW FUNCTION
/*
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
};

let valores = [1, 4, 5, 10];

console.log(soma(valores));
console.log(soma(...valores));
*/

// COM DOM

// CRIA COLEÇÃO HTML, NÃO TEM MUITA OPÇÃO DE MANIPULAÇÃO
const ob1 = document.getElementsByTagName('div');

// CRIA LISTA, OFERECENDO MUITO CONTROLE SOBRE O OBJETO
const ob2 = [...document.getElementsByTagName('div')];

console.log(ob1);
console.log(ob2);

ob2.forEach(element => {
    element.innerHTML = 'Alterado'
});
