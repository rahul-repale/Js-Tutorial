const accId = 1234
var accName = "Rahul"
let accEmail = "rahulrepale@gmail.com"
accCity = "Pune"
let accountState;

// accId = 1435 not allowed because of constant
accName = "Aditya"
accEmail = "RR@gmail.com"
accCity = "Mumbai"

console.log(accId);

/*
prefer not to use var because of issue in block 
scope and functional scope
*/

console.table([accountState, accName, accEmail, accCity, accId])