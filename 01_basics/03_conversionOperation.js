// for string with pure numbers inside of it
let score = "33.93"

console.log(typeof (score)); // we can also find type with this methods
console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33.93" => 33.93

// for strings with mixture of numbers and characters
let sc = "33abc"

console.log(typeof sc);

let valueNumber = Number(sc)

console.log(typeof valueNumber);
console.log(valueNumber);

// "33abc" => NaN

// for null value
let a = null

console.log(typeof a);

let value = Number(a)

console.log(typeof value);
console.log(value);

// "null" => 0

// for undefined value

let b = undefined
console.log(typeof b);

let num = Number(b)
console.log(typeof num);
console.log(num);

// "unefined" = NaN

// for boolean value

let c = true
console.log(typeof c);

let Numm = Number(c)
console.log(typeof Numm);
console.log(Numm);

// "true" => 1; "false" => 0

// to convert in boolean 
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "rahul" => true

// convert in string

let someNumber = 33

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

// 33 => "33"

// boolean to string

let someBoolean = true
let StringSomeBoolean = String(someBoolean)

console.log(StringSomeBoolean);
console.log(typeof StringSomeBoolean);

// "true" => true

// *************** Operations ********************

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2**3); // 2^3 
// console.log(2%3); // remainder

// let str1 = "hello"
// let str2 = " Rahul"
// let str3 = str1+str2
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log("1" + "2");