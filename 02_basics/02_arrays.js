const marvelHeros = ["thor", "Ironman", "spiderman"];
const DcHeros = ["Superman", "Batman", "Flash"];

// marvelHeros.push(DcHeros)
console.log(marvelHeros)
// console.log(marvelHeros[3][1])

const AllHeros = marvelHeros.concat(DcHeros);
console.log(AllHeros);

const allNewHeros = [...marvelHeros, ...DcHeros] // this is preferred method (spread operator)
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5], [6, [7, 8 ], 9], 10, 11]
const realAnotherArray = anotherArray.flat(2)
console.log(realAnotherArray);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from({name: "Rahul", age: 21})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




// console.log(marvelHeros.length)
// console.log(marvelHeros.fill("Rahul", 1, 3))
// console.log(marvelHeros.flat(Infinity)) // doesn't change the main array value just make the copy of it
// console.log(marvelHeros)
// console.log(marvelHeros.concat(DcHeros)) // best way to join arrays
// console.log(marvelHeros.includes("Rahul"))
// marvelHeros.concat(DcHeros)
// console.log(marvelHeros.reverse()) // reverse original array
// console.log(marvelHeros.toLocaleString())
// console.log(marvelHeros.toReversed()) // just make reverse copy of original array