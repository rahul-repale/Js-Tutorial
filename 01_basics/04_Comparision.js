// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("02" > 1); // true
// console.log("02" < 1); // false

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true

/* the reason is that an euality check == and comparisons > < >= =< work differntly
comparisons convert null to a number, treating it as 0.
that's why null >= 0 is true and null > 0 is false and null == 0 is also false */

// console.log("2" === 2); // === to strictly check