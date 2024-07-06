for(var i = 0; i < 10; i++){

    console.log(i)

    if(i === 5){
        break;
    };
};

console.log("Deu Break")

///////////////////////////////

var x = 0;

while(x < 100){
    
    x += 10;

    if(x === 20 || x === 50){
        console.log("Continue");
        continue
    };

    console.log("Testando " + x)
};




