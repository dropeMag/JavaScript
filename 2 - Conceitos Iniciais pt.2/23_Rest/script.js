function soma(...valores){
    let res = 0;

    for(let i of valores){
        res += i;
    }

    return res;
};

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));
