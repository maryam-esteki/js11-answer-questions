// ? 7. Using Array Destructuring, get the last name from the array.
//  todo : notice that 'Christina' is firstName , 'Jon' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'Jon', 'Alexandare'];

// ! Answer
const [firstName,middleName,lastName]= students
console.log("firstName:",firstName)
console.log("middleName:",middleName)
console.log("lastName",lastName)