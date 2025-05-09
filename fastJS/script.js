// const { log } = require("console");

let name = "Hitesh"
const pi = 3.14

let number = 425 // Number
let text = "hello" // String
let isTrue = true // Boolean

let nothing = null //   Object

let undefinedVar = undefined // Undefined

let symbolVar = Symbol() // Symbol

let person = {
  name: "Hitesh",
  age: 50,
  isStudent: true,
}

let num = "42"
let numb = "42a"
let convertedNum = Number(num) // standard way of conversion
let convertedNumb = Number(numb)

// console.log(convertedNum);
// console.log(typeof convertedNum);
// console.log(num);
// console.log(typeof num);

// console.log(numb);
// console.log(typeof numb);

// console.log(convertedNumb);
// console.log(typeof convertedNumb);

// let newNum = +num;

let newNum = parseInt(num)

// console.log(newNum);
// console.log(typeof newNum);

let str = 12345
let newStr = String(str) // standard way

// console.log(newStr);
// console.log(typeof newStr);

// PR -> Pull Request

/*

let x = 5;
let y = 10;

console.log(x == y);   // checks value
console.log(x === y);  // strict check (value and type as well)
console.log(x != y);  // not equal to

*/

// console.log(Math.max(5,10));

// console.log(Math.min(5,10));

// console.log(Math.random());

let firstName = "Abhay"

let lastname = "Kumar"

let fullName = firstName + " " + lastname

// console.log(fullName);

let message = "Hello World"

// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.indexOf("or"));
// console.log(message.slice(2,9));

// ---------------  Template Literals  ``
let myName = "Abhay"
let greeting = `Hello ${myName}`
// console.log(greeting);

//  ------------ Array ----------------

let numArray = [1, 2, 3, 4, 5, 7, 2, 9]
// console.log(numArray.indexOf(2));  // returns first index of element

/*

const chaiTypes = ["masala Chai", "Ginger Chai","Green Tea","Lemon Tea"];

console.log(chaiTypes.length);
console.log(chaiTypes.indexOf("Green Tea"));

chaiTypes.push("Herbal Tea");  // add items at the end
chaiTypes.pop();  // returns value at last index

let index = chaiTypes.indexOf("Ginger Chai");
if (index !== -1){
  chaiTypes.splice(index,2);  // remove 2 elements starting from index value
}
console.log(chaiTypes);
*/

const chaiTypes = [
  "masala Chai",
  "Ginger Chai",
  "Green Tea",
  "Lemon Tea",
  "Herbal Tea",
]
/*

chaiTypes.forEach((element,index) => {    // for each loop hai a
  console.log(`${index} : ${element}`);
  console.log(`${index + 1} : ${element}`);  // index stars from 1 here
  
})

*/

let moreChaiTypes = ["oolong Tea", "White Tea"]

let allChaiTypes = chaiTypes.concat(moreChaiTypes)
// console.log(allChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea", "Desi Chai"] // ...chaiTypes -> unpacks the array of chaiTypes (spread the chaiTypes array)
// console.log(newChaiTypes);

//  ---------------- Object Literals ------------

let chaiRecipe = {
  names: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk,sugar and spices",
}
// console.log(chaiRecipe);
// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecipe = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, milk, sugar, spices with some love", // overrides existing property
}

// console.log(updatedChaiRecipe);

let { names, ingredients } = chaiRecipe // object destructure
let [firstChai, secondChai] = chaiTypes // Array destructure

// console.log(names);
// console.log(ingredients);
// console.log(firstChai);
// console.log(secondChai);

// ------------  Operations   --------------------

function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai")
  } else {
    console.log("Preparing regular chai")
  }
}
// prepareChai("Masala Chai");
// prepareChai("chai");

function calculateTotalBill(amount) {
  // convert to number

  if (amount > 1000) {
    return amount * 0.9
  } else {
    return amount
  }
}

// console.log(calculateTotalBill(1200));
// console.log(calculateTotalBill(800));

/*

let finalBill = calculateTotalBill(1500);
let finalBills = calculateTotalBill(900);

console.log(finalBill);
console.log(finalBills);

*/

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("stop")
      break
    case "yellow":
      console.log("wait-wait")
      break
    case "green":
      console.log("go-go-go")
      break
    default:
      console.log("Challan kaat do")
  }
}

// trafficLight("green");
// trafficLight("red");
// trafficLight("yellow");

function checkTruthyValue(value) {
  if (value) {
    console.log("truthy-hai-bhai")
  } else {
    console.log("False-hai")
  }
}

/*
// checkTruthyValue(1);
// checkTruthyValue(0);
checkTruthyValue("JS");
checkTruthyValue("");   // false
checkTruthyValue([]);   // isko v true liya hai
checkTruthyValue([1,2]);

*/

// ------  Turnary operator

function calculateBill(amount) {
  return amount > 1000 ? amount * 0.9 : amount
}

// console.log(calculateBill(2000));
// console.log(calculateBill(200));

function login(username, password) {
  if (username === "admin" && password === "1234") {
    console.log("Login Successful")
  } else {
    console.log("Invalid Credentials .....")
  }
}

// login("admin","1234");
// login("admin","123");

// --------  Iterations ---------

// "JavaScript".toUpperCase().indexOf()  // called chaining or pipe in JavaScript

// Print the total sale value

let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
]

let initialValue = 0
// let totalSales = salesData.reduce( (acc,sale) => 0 + sale.price, 0);
// console.log(totalSales);  // output 80 dega jo ki wrong hai

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0)
// console.log(totalSales);

// print the items having stock < 50

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
]

// Note : Fileter se jo hme output milta hai wo hmesha ek array hota hai vle hi wo empty array ho

// let lowStockItems = inventory.filter( (item) => item.stock < 50);

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50
})
// console.log(lowStockItems);

// Print the most Active user

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
]

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
)

// console.log(mostActiveUser);

//  --- Map Filter Reduce -------- *****************************

// Maps function is used to transform an array

const arr = [5, 1, 3, 2, 6]

// function double(x){
//   return 2 * x;
// }

// const output = arr.map( (x) => 2*x);
// console.log(output);

// function tripple(x){
//   return 3 * x;
// }

// let output = arr.map( (x) => 3 * x);
// console.log(output);

// function binary(x){
//   return x.toString(2);
// }

// const output = arr.map(double);
// const output1 = arr.map(tripple);
// const output2 = arr.map(binary);

// console.log(output);
// console.log(output1);
// console.log(output2);

// Higher order function
/*

const output = arr.map(function binary(x){
  return x.toString(2);
});


// Arrow function

// const output1 = arr.map( (x) => {
//   return x.toString(2);
// })

const output1 = arr.map( (x) => x.toString(2));

// console.log(output);
// console.log(output1);

*/

// --------------------  Filter  filter  filter  *****************************

// filter function is used to filter the values based on condition

// output odd values from array

/*

function isOdd(x){
  return x % 2;
}

function isEven(x){
  return x % 2 === 0;
}

const output = arr.filter(isOdd);
const output2 = arr.filter(isEven);

// const output1 = arr.filter( (x) => x  > 4);

 const output1 = arr.filter( function greaterThanorEqualtoThree(x)  {
  return x >= 3;
 });

// console.log(output);  
// console.log(output1);  
// console.log(output2);  

*/

// -------- Reduce  ----- Reduce ------   Reduce   ***********

// used at a place where you have to take all the values ofarrayn and comes up with a single value

/*
const output = arr.reduce(function(acc,curr){
  return acc + curr;
},0);

const output1 = arr.reduce((acc,curr) => acc+curr);

console.log(output);
console.log(output1);
*/

// Find maximum of array using reduce

/*

let arr1 = [0,5,3,9,-2,8,7,32,-18,20]; 

const output = arr1.reduce(function(acc,curr){
  if(curr > acc){
    acc = curr;
  }
  return acc;
},0)




// const output1 = arr1.reduce( (acc,curr) => acc < curr ? (acc = curr): curr);   // doubtful hai

console.log(output);
console.log(output1);

*/

const user = [
  { firstName: "Abhay", lastName: "Kumar", age: 30 },
  { firstName: "Donald", lastName: "Trump", age: 80 },
  { firstName: "Narendra", lastName: "Modi", age: 82 },
  { firstName: "Babita", lastName: "Rani", age: 30 },
]

// list of full names of user

// const output = user.map( (x) => x.firstName+" "+x.lastName);
// console.log(output);

// count people with a perticular unique age

/*

const output = user.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]+=1;
    
  }else{
    acc[curr.age] = 1;
    
  }
  return acc;


},{});

console.log(output);

*/

// first name of all people whose age is less than 50

// const output = user.filter( (x) => x.age < 50).map( (x) => x.firstName);

// console.log(output);

//       using reduce find total count less than 40 age

/*

const output = user.reduce(function(acc,curr){
  if(curr.age < 50){
    acc.push(curr.firstName);
  }
  return acc;
},[])

const output1 = user.reduce( (acc,curr) => {
  if(curr.age < 50){
    acc.push(curr.firstName);
  }
  return acc;

},[])

console.log(output);
console.log(output1);

*/

//  Iterations ------  functions ---------   & concepts  ******************

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
  { description: "Internet Pack", amount: 500, category: "Telecom" },
]

// find expenses for all category dynamically

/*
let expenseReport = expenses.reduce( (report,expense) => {
   report[expense.category] += expense.amount;
   return report;

},{Food: 0, Utilities: 0});  // this is not dynamic, for other category we have to initialize again

console.log("Expense Report", expenseReport);

*/

/*  
let expenseReport = expenses.reduce( (report,expense) => {

  report[expense.category] = (report[expense.category] || 0) + expense.amount;

  return report;      // This is dynamic code

},{});

console.log("Expense Report", expenseReport);

*/

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", comnpletd: false, priority: 1 },
]

// print all the tasks not completed and sort

let completedTask = tasks
  .filter((x) => !x.completed)
  .sort((a, b) => a.priority - b.priority)

// console.log(completedTask);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
]

// find average rating of each movie

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0)
  let average = total / movie.ratings.length

  /*
  movie.ratings = average;

  return movie;

  */

  return { title: movie.title, ratings: average.toFixed(3) }
})

// console.log(averageRatings);
// console.log(movieRatings);

/// ---------------  Revision  ---------------------------

function greet(name) {
  console.log(`Hello ${name}`)
}

// greet("Hitesh");
// greet("Abhay");

let globalVar = "I am global"

function modifyGlobal() {
  globalVar = "I am modified"

  let blockScopedVar = "I am block-scoped"

  console.log(blockScopedVar)
}

// console.log(globalVar);
// modifyGlobal();

/*

let config = function(){}()  // IIFE  : ek hi bar execute hota hai dubara kam me nhi aata hai

( () => {}) () // IIFE  :  IIFE is like use and throw function

*/

let person1 = {
  name: "Abhay",
  greet: function () {
    console.log(`Hello ${this.name}`)
  },
  age: 30,
}

let person2 = {
  name: "Hitesh",
  age: 50,
  find: function () {
    console.log(`Your age is: ${this.age}`)
  },
}

// call ya bind use krte hain context change krne k liye

/*

person1.greet.call(person2);  // Guess the output here
person1.greet.bind(person2);  // Guess the output here   // Nothing will print here

// Bind returns a new function

const bindGreet = person1.greet.bind(person2);  // This itself is a function here (bindGreet)
bindGreet();
console.log(bindGreet);  // returns Function: bound greet
console.log(bindGreet());  

// person1.greet.call(person2);
// person2.find.call(person1);

*/

//  JS ke ander ki cheeje -------------

// call stack / JS Engine waits for nothing, Hum Js ke ander kisi cheej ko delay kr hi nhi skte

// setTimeout JS ka part hi nhi HTMLDetailsElement, a part hai browser ka

// setTimeout Browser ka feature hai, a ak timer set krta hai browser k ander

// Jaise hi time complete hota hai wo command ko call stack k ander dal deta hai

// Browser kisi v code ko directly call stack k ander nhi dalta hai wo call back queue ko deta hai

//  -----------------------  call back queue  -------------  Event loop

// There are two types of task queue in JS: 1. MicroTask Queue, 2. Callback Task Queue

// Event loop is just a process jo ki call back queue me agar koi code hai to usko call stack ko dega agar call stack empty hai toh

/*

  const obj = {
    personName: "hitesh",
    greet: function(){
      console.log(`Hello ${this.personName}`)
    }
  };


 console.log(`Hello from India`);
 
 setTimeout( () => console.log(`I am delayed`),0);

setTimeout(obj.greet, 2*1000);  // Minimum toh 2 sec wait krna hi hoga , maximum ki koi guarantee nhiu hai, agr call stack empty nhi rha to lamba jaega waiting period. output aha pe Hello Undefined hai kyuki greet function ka context end ho gya hai kyuki call stack kisi ka wait nhi krta

 console.log(`Bye Bye`);

 console.log("Hello");

 setTimeout(obj.greet.bind(obj), 1*1000);  // bind obj k context ko wapas lane ka kam kiya hai isliye greet function this.personName ko shi se map kr pa rha hai

 console.log("Bye-Bye");


*/

//  --------------  promise  ---------------  Isko v browser handle krta hai

// callback multiple hote hai: 1. Micro Task Queue,  2: Callback Queue/ Task Queue
// Promises Micro Task Queue me jati hai , Timers/setTimeout, event handlers or Asynchronous task, Task Quesue me jate hai
// Micro Task Queue ko priority di jati hai

// What is starvation?

// If MTQ (MicroTask Queue) keeps popping up without allowing other task a chance to run. In this case callback task queue never get opportunity to execute it's task, This situation is called starvation or starvation of task in callback queue.

/*

console.log("Hi");

setTimeout( () => console.log(`Hello after 0 seconds`), 0);

Promise.resolve().then( () => console.log(`Promise resolve ho gya`));

setTimeout( () => console.log(`Hello after 2 seconds`), 2* 1000);

console.log(`BYE`);

// starvation example

Promise.resolve().then( () => {
  console.log(`1. promise resolve ho gya`);

  Promise.resolve().then( () => {
    console.log(`2. promise resolve ho gya`);

    Promise.resolve().then( () => {
      console.log(`3. promise resolve ho gya`);
    })
  })
})

setTimeout( () => console.log(`Hello callback queue, kya hal chal bhai`), 1*1000);

*/

// HLD -> High level design  -> means upar upar se

// LLD -> Low level design  -> means in depth

// Vanilla JS means Simple JS, without any library, without anything, means plane JS (Pure Browser pe jo likhi jati hai)

// **************  interview questions:  *********************************************

// Khud ki event loop likh do
// khud ki promises likh do
