const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.824356
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ MATHS ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); 
console.log(Math.round(4.4)); 
console.log(Math.ceil(4.4)); 
console.log(Math.floor(4.4)); 
console.log(Math.sqrt(4)); 
console.log(Math.max(3,4,6,1,9));
console.log(Math.min(3,4,6,1,9));

console.log(Math.random());
console.log(Math.floor(Math.random()*100) + 1);

const min = 1;
const max = 6;

// IMP FORMULA
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


