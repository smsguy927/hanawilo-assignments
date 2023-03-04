// Problem #1: What should the following evaluations return?
// 2 =='2' >> true
// 'he' == 'she' >> false
// 2 === 2 >> true
// 'true' == true >> false
// true === true >> true
// 'true' != true >> true
// 'true' !== true >> true

// Problem #2: What are the three different ways you can declare a variable? And what is the differences between them?
// >> var, let, and const. var has function scope while let and const have block scope. You cannot reassign to const,
// but objects assigned to a const can be modified. 'var' should only be used when 'let' is not available, e.g.
// before ES6. Usage of 'var' generates a warning in Jetbrains IDEs.

// Problem #3: Write a simple function for each type of these functions:
// - First-Class Function
const addSeven = function(x) {
    return x + 7
}
// - Higher-Order Function
function transformNumberArray(arr, fn){
    for (let i = 0; i < arr.length; i++){
        arr[i] = fn(arr[i])
    }
}

// - Callback Function
const squareAndSubtractOne= x => x ** 2 - 1;

// Test the functions
let test1 = addSeven(32)
console.log(test1)
let test2Arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(test2Arr)
transformNumberArray(test2Arr, squareAndSubtractOne)
console.log(test2Arr)

// Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?
//const a = 'hi';
//console.log(c);
//
//const someFunction = (arg) => {
//   const b = 'bye';
//
//    if (arg) {
//        const c = 'see ya!';
//        console.log(a);
//        console.log(b);
//    }
//}
// >> Trying to log c will throw a reference error because c exists only within someFunction. C is not defined outside
// some function. If arg is true, a logs 'hi' and b logs 'bye'. If arg is false, a and b are not logged.

// Problem #5: Given the following data structure, write a for loop using:
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// - For statement
// - For...of
//
// The for loops should console.log out each of the values in order like this: e. g. 1, 2, 3, 4, 5, 6, 7, 8 ...
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < someArray.length; i++) {
    console.log(someArray[i])
}

for (let num of someArray) {
    console.log(num)
}
// Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative):
// const someArray = [1, 2, 3, 4, 5];
//
// - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
// - Use the length property to return the length of the array
// - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
// - Use the find() method to find and return the value of 5.
// - Use the slice() method to return back this array: [3, 4]
// - Use the splice() method to return back this array: [1, 2, 5]
// - Use the includes() method to return back TRUE when I pass in “4” into the includes method.
// - Use the indexOf() method to return back the index of the element “2”
// - Use the isArray() method to return back TRUE when I pass in the array
// - Use the join() method to return back: “1, 2, 3, 4, 5”
// - Use the map() method to return back a new array: [2, 4, 6, 8, 10]
// - Use the pop() method to return back a new array: [1, 2, 3, 4]
// - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
// - Use the shift() method to return back a new array: [2, 3, 4, 5]
// - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
// - Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return:
// [1, 3, 5, 9]

// - Use the reduce() method to return back the sum of all numbers in the array
//
// Helper method to undo splice mutation
Array.prototype.merge = function(arr2) {
    let firstArrIndex = 0;
    let secondArrIndex = 0;
    let resultArr = []
    while(firstArrIndex < this.length || secondArrIndex < arr2.length) {
        if(firstArrIndex >= this.length) {
            resultArr.push(arr2[secondArrIndex])
            secondArrIndex++
        }
        else if(secondArrIndex >= arr2.length || this[firstArrIndex] < arr2[secondArrIndex]) {
            resultArr.push(this[firstArrIndex])
            firstArrIndex++
        }
        else {
            resultArr.push(arr2[secondArrIndex])
            secondArrIndex++
        }
    }
    while (this.length){
        this.pop();
    }
    while(resultArr.length){
        this.push(resultArr.shift())
    }
};
const someArray2 = [1, 2, 3, 4, 5];
someArray2.concat() // non mutative
someArray2.length // non mutative
someArray2.filter(x => x != 3) // non mutative
someArray2.find(x => x == 5) // non mutative
someArray2.slice(2, 4) // non mutative
const removed = someArray2.splice(2, 2) // mutative
someArray2.merge(removed) // reverses splice mutation
someArray2.includes(4) // non mutative
const indexOf2 = someArray2.indexOf(2) // non mutative
const isItAnArray = Array.isArray(someArray2) // non mutative
const someArr2Str = someArray2.join() // non mutative
const doubledSomeArr2 = someArray2.map(x => x * 2) // non mutative
const popped = someArray2.pop() // mutative
someArray2.push(popped) // mutative
someArray2.push(6) // mutative
someArray2.pop() // mutative
const shifted = someArray2.shift() // mutative
someArray2.unshift(shifted) // mutative
someArray2.unshift(0) // mutative
const thisArray = [9, 1, 3, 5]
thisArray.sort() // mutative

// Problem #7: Given the following data structure:
// const someObject = {
//     color: 'black'
// }
// - Use the assign() method to add a new key value pair of:   name: ‘john doe’
// - Use the dot notation to add a new key value pair of:    age: 22
// - Use the bracket notation to add a new key value pair of:    address: ‘123 test address’
// - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
// - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test
//   address”]
// - Use the for...in loop against this object to console.log each of the keys values.
//     Your terminal should return:
//
// - // black
// - // john doe
// - // 22
// - // 123 test address
const someObject = {
    color: 'black'
}
Object.assign(someObject, {'name': 'john doe'})
someObject.age = 22
someObject['address'] = '123 test address'
for (const prop in someObject){
    console.log(someObject[prop])
}
// Problem #8: Given the following data structure:
//  const numbers = [
//  {
//    num: 1
//  },
//  {
//     num: 2
//  },
//  {
//      num: 3
//  }
//  ]
//  - Use either the for statement or for...of loop to console.log each of the keys. Values.
//  Your terminal should return
// // 1
// // 2
// // 3
 const numbers = [
 {
     num: 1
 },
 {
     num: 2
 },
 {
     num: 3
 }
]
for (const i of numbers) {
    console.log(i.num)
}
// Problem #9: Create a new Set() object
// - Add a new value of:    ‘john doe’
// - Check if the value of ‘john doe’ exists
// - Remove the value of ‘john doe’
const testSet1 = new Set()
testSet1.add('john doe')
testSet1.has('john doe')
testSet1.delete('john doe')

// Problem #10: Create a new Map() object
// - Add a new key-value pair of:    name: ‘john doe’
// - Check if the value ‘john doe’ exists
// - Remove the key-value pair of ‘john doe’
const testMap1 = new Map()
testMap1.set('name', 'john doe')
testMap1.has('name')
testMap1.delete('name')

// Problem #11: Explain what asynchronous programming means in 3 sentences.
// >> Asynchronous programming allows you to be able to handle multiple tasks at the same time. It works by running
// >> one part of the program while the other one waits. Asynchronous programming is useful in implementing event
// >> handlers because other code can be run while waiting for an event to happen.

// Problem #12: Explain what call back hell is.
// >> Callback hell is the result of having multiple nested anonymous callback functions within a block of code.
// >> It is primarily encountered within asynchronous programming but can also exist in synchronous programming.
// >> Callback hell is identified by a pyramid shape of }) symbols. Callback hell can be managed in the following ways:
// >> Wrap asynchronous code in async/await blocks, give anonymous functions names and their own blocks, and add
// >> comments for the confusing parts.

// Problem #13: Explain what is a promise and describe the possible states of promises.
// >> A promise is a representation of a future value that is not known when it is created. It allows asynchronous
// >> functions to return a value in the form of a promise. A promise has three states: pending, fulfilled, and rejected.
// >> Pending is the initial state of a promise that exists when waiting for a fulfillment or rejection. Fulfilled means
// >> that the request was completed successfully and now the promise's then methods are called. Rejected means that the
// >> promise failed and now the catch and error handling methods will be called.

// Problem #14: What is async/await?
// >> Async/await is a different type of syntax used to write promise code. Async is used to note and wrap an
// >> asynchronous function and await pauses execution of code inside an Async block.
// >> Instead of writing: fetch('api.com').then(response => response.json()).then(doSomething(response))
// >> You can do this: async function myFetch(){
// >> const response = await fetch('api,com');
// >> const json = await response.json();
// >> doSomething(json);
// }

//


// Problem #15: Create two async functions:
//     - fetchRickAndMorty
// o Using this api: https://rickandmortyapi.com/api/character
//     o Use a try/catch block
// o Your catch block should: console.log(error.message)
// o Fetch this api, and the function should return a payload of a ARRAY of the Characters’ name
// such as shown below:
//     § [“Rick Sanchez”, “Morty Smith”, “Tom Jones”, .... ]
// o Hint: What array methods can you use to get the result above??
// - fetchMultipleAPIs
// o Using these apis:
//     § API 1: https://rickandmortyapi.com/api/character/2
//     § API 2: https://randomuser.me/api/?results=1
//     o Use a try/catch block
// o Your catch block should: console.log(error.message)
// o Using a Promise.all() method, fetch both of these api’s concurrently, and the function should
// return a payload of the Names from each payload such as shown below:
//     § [“Morty Smith”, “Tony Kim”]
// § The first value “Morty Smith” should be coming from API 1.
// § The second value “Tony Kim” should be coming from API 2. Keep in mind, this second
// API will have a new random user each time you call it!
import fetch from 'node-fetch';
const rickMortyAPI1 = 'https://rickandmortyapi.com/api/character'
const rickMortyAPI2 = 'https://rickandmortyapi.com/api/character/2'
const randomUserAPI = 'https://randomuser.me/api/?results=1'
/*
// WRONG WAY!

fetch(rickMortyAPI1)
    .then(response => response.json())
    .then(response => console.log(response['results'].map(i => i['name'])))
    .catch(err => console.log(err))
*/

// Right Way
async function fetchRickMorty1() {
    const response = await fetch(rickMortyAPI1)
    const characters = await response.json();
    return characters
}


function logNames(x) {
    console.log(x['results'].map(i => i['name']))
}

fetchRickMorty1().then(res => logNames(res))
                 .catch(err => console.log(err.message))

// Parallel Fetch
async function fetchRickMortyAndRandomUser(){
    const [rickMortyResponse, randomUserResponse] = await Promise.all([
        fetch(rickMortyAPI2),
        fetch(randomUserAPI)
    ]);
    const rickMortyStuff = await rickMortyResponse.json();
    const randomUserStuff = await randomUserResponse.json();
    return [rickMortyStuff, randomUserStuff];
}

function logBothNames([rickMorty, user]) {
    const loggingArray = []
    const rickMortyName = rickMorty['name']
    loggingArray.push(rickMortyName)
    const randomUser = user['results'][0]
    const randomUserNameObj = randomUser['name']
    const randomUserFirstName = randomUserNameObj['first']
    const randomUserLastName = randomUserNameObj['last']
    loggingArray.push(`${randomUserFirstName} ${randomUserLastName}`)
    console.log(loggingArray)
}

fetchRickMortyAndRandomUser().then(([rickMorty,user]) => {
    logBothNames([rickMorty, user])
}).catch(err => console.log(err.message))

//     Problem #16: OOP
// In this task create a Shape class. It has three properties: name, sides, and sideLength. This class only models
// shapes for which all sides are the same length, like a square or an equilateral triangle.
//     We'd like you to:
// • Add a constructor to this class. The constructor takes arguments for the name, sides,
//     and sideLength properties, and initializes them.
// • Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of
// the shape's outer edge) and logs the result to the console.
// • Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and
// a sideLength of 5.
// • Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the
// browser's console as expected.
// • Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
// • Call triangle.calcPerimeter() to check that it works OK.

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        return this.sides * this.sideLength;
    }
}

const square = new Shape('square', 4, 5);
const triangle = new Shape('triangle', 3, 3);
console.log(`Square perimeter: ${square.calcPerimeter()}`)
console.log(`Triangle perimeter: ${triangle.calcPerimeter()}`)

//     Problem #17: OOP (Part 2)
// Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that
// calculates the square's area. Also set up the constructor so that the name property of Square object instances
// is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor,
//     you should therefore just need to provide the sideLength property.
//     Create an instance of the Square class called square with appropriate property values, and call
// its calcPerimeter() and calcArea() methods to show that it works OK.
class Square extends Shape {
    constructor(sideLength) {
        super('square', 4, sideLength);
    }
}
const square2 = new Square(5/40);
console.log(`Square 2 perimeter: ${square2.calcPerimeter()}`)
//     Problem #18: Using Git, please push this code up to your GitHub repo following the directions:
//
//     1. Initialize your project:   git init
// 2. Git checkout to:    git checkout -b week1-day
// 3. Git add all commits:    git add --all
// 4. Git commit:    git commit -m ‘week1-day1 assignment complete’
// 5. Push to your remote branch:    git push











//
//






