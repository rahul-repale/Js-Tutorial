//  primitive

// 7 types : string, Number, Boolean, null, unefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const temp = null
let userEmail;
const score = 33

const bigNum = 2408923471n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Thor", "SpiderMan"]

let myObj = {
    name: "Rahul",
    age: 21
}

const myFunction = function(){
    console.log("Hello, World");
}

console.log(typeof bigNum);


// +++++++++++++++ Memory Notes ++++++++++++++

// stack (primitive);

let MyYoutubeName = "Rahul Repale"
let anotherName = MyYoutubeName
anotherName = "Chai aur code"

console.log(MyYoutubeName);
console.log(anotherName);

// In stack memory we get duplicate copy of value from one variable to another variable
// if we change the value of duplicate copy in another variable then there will be no change in original copy
// if we print both variable, we'll get original value in first variable and changed value in another(second) variable


// Heap (Non Primitive)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// in heap memory, if we try to assign value of one funtion to another then the another function will receive the reference of that value from heap memory.
// if we change the value from another function then the original value is also gets changed.
// if we try to print both functions then the changed value gets printed 
