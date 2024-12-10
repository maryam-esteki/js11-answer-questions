// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

//! Answer :clg
const [a, [b, c], [d, f]] = moreStudents;
console.log(a)
console.log([b,c])
console.log([d,f])

