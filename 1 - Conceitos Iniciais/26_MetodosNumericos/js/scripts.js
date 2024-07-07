// parseFloat

console.log(parseFloat('12.5'));
console.log(parseFloat('125,02'));
console.log(Number.parseFloat('1.25'));

// parseInt -> NÃO ARREDONDA

console.log(parseInt('10.9'));
console.log(parseInt(12.99999999));

// toFixed

console.log(1.123456789.toFixed(0))
console.log(1.123456789.toFixed(1))
console.log(1.123456789.toFixed(2))

// isNan

console.log(isNaN('true'));
console.log(isNaN(true));   // É BINÁRIO (1), LOGO, DARÁ FALSE
console.log(isNaN('14'));
console.log(isNaN(20));
console.log(isNaN(46.32));
