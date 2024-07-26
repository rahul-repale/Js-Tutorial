// Array

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[1]);

const myHeros = ["IronMan", "Thor"]

const newArr = Array(1, 2, 4, 6, 8);
console.log(newArr[2]);

// Array Methods

myArray.push(6)
myArray.pop()
myArray.push(7)

myArray.shift()
myArray.unshift(9)

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArray = myArray.join()

console.log(myArray);
console.log(newArray);


// slice , splice

console.log("A", myArray);

const myNewArr = myArray.slice(1, 3)
console.log(myNewArr);
console.log("B ", myArray);

const myNewArray = myArray.splice(1, 3)
console.log(myNewArray);
console.log("C", myArray);

myArray.push(2)
console.log(myArray.sort());

