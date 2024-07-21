const Name = "Rahul"
const RepoCount = 5

// console.log("Hello my name is " + Name + "and my repoCount is " RepoCount);

console.log(`Hello my name is ${Name} and my repoCount is ${RepoCount}`);

// const gameName = "DArKLOrD"
const gameName = new String('DArK_LOrD')

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase()); // stack memory
 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r', 3)); // we can also add index number to help compiler to think that this number is starting point to search the index 
// if there is more than one index number for any string then it will only print one index number which is infront of starting index number (if not given compiler take it as '0')

const newString = gameName.substring(0, 4) // always use positive indexing
console.log(newString);

const anotherString = gameName.slice(-7, 4) // can use negative indexing also but can't reverse any string it can only print straight string if given right index value 
console.log(anotherString);

const someString = "       Rahul       "
console.log(someString);
console.log(someString.trim());

const url = "https://rahul.com/rahul%20repale"
console.log(url.replace('%20','-'));

console.log(url.includes('Rahul'));

console.log(gameName.split('',7));

const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);

console.log(array3.copyWithin(0,2,5));


// flat()
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


// join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

console.log(elements);

console.log(elements.pop());
console.log(elements.push('Water'));
console.log(elements.push('Earth'));
console.log(elements.indexOf('Earth'));
elements.push('Space')
console.log(elements.join());


// reduce()
const arra1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5
const initialValue = 0;
const sumWithInitial = arra1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


// reverse() array
const arr = ['one', 'two', 'three'];
console.log('arr:', arr);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = arr.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('arr:', arr);
// Expected output: "array1:" Array ["three", "two", "one"]

//if we only have to reverse new array and keep the original array as it is
const OnlyReverseThisArray = arr.toReversed()
console.log('Reversed: ', OnlyReverseThisArray);
console.log("Original array: " ,arr);


// shift(); arr = ['three', 'two', 'one']
const firstElement = arr.shift() 
console.log(firstElement); // output => three 
console.log(arr); // output => ['two', 'one']
// unshift()
arr.unshift('four', 'three')
console.log(arr);
arr.reverse()
arr.push('five', 'six')
console.log(arr);


// some()
const integer = [1, 2, 3, 4, 5, 6, 7, 8];
const even = (element) => element%2 === 0;
console.log(integer.some(even));
console.log(integer);

console.log([12, 5, 8, 1, 4].some((x) => x > 10));// true


const fruits = ['apple', 'banana', 'watermelon']
fruits.push('mango')
console.log(fruits.join());

function isAvailable(arrayName, inputValue) {
    return arrayName.some((arrayValue) => arrayValue === inputValue.toLowerCase().trim());
}

const cherry = isAvailable(fruits, 'cherry')
console.log(cherry);
const banana = isAvailable(fruits, ' BANANA ')
console.log(banana);

