let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof myDate.toDateString()); // string
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 8, 3)
// let myCreatedDate = new Date(2024, 8, 13, 5, 4)
// let myCreatedDate = new Date("2023-04-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // miliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))

