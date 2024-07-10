/*
let num = [10, 20, 30, 40, 50];

for(i = 0; i < num.length; i++){
    console.log(num[i])
};

for(let n in num){
    console.log(n)
};

for(n of num){
    console.log(n)
};
*/

const objs = document.getElementsByTagName('div');

// console.log(objs);

for(o in objs){
    console.log(o)
};

for(o of objs){
    console.log(o)
    o.innerHTML = "Mds"
};
