/*
Basic function check!
 
function addTwoNumber(number1 , number2){
  return number1 + number2;
}

function piantBrush(num){
  console.log(`We need total ${num} Brush for painting!`);
}

console.log(addTwoNumber(10,10));
piantBrush(5);

*/

/*

let  -> change hoga
const -> change nhi hota

string: " ", ' ', ` `

 */

let name = "rohit"; // string
let age = 30; // number
let isPaid = true; // boolean

let favouriteClass = null; // means avi ku6 nhi hai, null means emptyness

let hometown; // undefined / bad me dekhenge

let skills = [true, false, false, true, "html", "css", `Javascript`]; // Array (index starts from 0)

let studentProfile = {
  name: `Arun`,
  age: 25,
  isPaid: true,
  skills: ["HTML", "Css", `JavaScript`],
  favouriteClass: null,
};

//  console.log(typeof age);
//  console.log(typeof(name));

//  console.log(hometown);
//  console.log(favouriteClass);

//Processing:

// -----------------  use of if loop ---------------

/*
let weather = `cloudy`;

if(weather === `rainy`){
  console.log(`It's raining outside, umbrella le lar jana`);
  
}else if(weather === `cloudy`){
  console.log(`Be careful about weather`)
}
else{
  console.log(`Mje me jao`)
}

*/

// ############## calculate pizza size ###############

/*
let numerOfGuests = 1;

let pizzaSize;  // undefined

if(numerOfGuests <= 2){
  pizzaSize = `small`;
}else if(numerOfGuests <= 5){
  pizzaSize = 'medium';
}else{
  pizzaSize = "large";
}
 console.log(`Your pizza size must be ${pizzaSize}`);
 
 */

//  ***************** calculate grade ****************

/*

 function calculateGrade(marks){

  if(marks >= 90){
    return 'A';
  }
  else if(marks >= 80){
    return 'B';
  }else if(marks >= 70){
    return 'C';
  }else if(marks >= 60){
    return 'D';
  }else{
    return 'F';
  }

 }

let grade = calculateGrade(80);
console.log(`Your grade is: ${grade}`);
console.log(`Your grade is: ${calculateGrade(90)}`);

*/

// ------------------- Array ------------------
/*

let fruits = ["apple", "cherry", "banana", "mango"];
let intlFruits = new Array(`kiwi`, `avacado`, `dragon fruit`); // 2 ways to declare array

console.log(typeof fruits);
console.log(fruits);
console.log(typeof intlFruits);
console.log(intlFruits);

console.log(fruits.length); // gives count of total element in array
fruits[0] = `blueberry`;
console.log(fruits);

fruits.push("grapes"); // adds element at last
console.log(fruits);
fruits.unshift("guava"); // adds element at first
console.log(fruits);
fruits.sort(); // sort elements
console.log(fruits);
fruits.pop(); // removes from last
console.log(fruits);
fruits.shift();
console.log(fruits); // removes from first

*/

// --------------------------  loop - iteration -------------------

/*

let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

for (let h = 0; h < teas.length; h++) {
  console.log(`tea at index ${ h } is: ${teas[h]}`);
}

*/

// ------------------- pass array to function -----------
/*

let myArray = new Array(1,2,3,4,5,6);
function arraySum(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum+=numbers[i];
  }
  return sum;
}

console.log(arraySum(myArray));
console.log(arraySum([10,20,30,40,50]));

*/

//  --------------------- Array Revision --------------------

let oneArray = new Array(1,2,3,4,5,6,7,8,9,10);
let twoArray = [10,9,8,7,6,5];
// console.log(oneArray.at(0));
// console.log(oneArray.at(-1));
// console.log(twoArray.at(-1));
// console.log(oneArray.concat(twoArray));
// console.log(oneArray);
// console.log(twoArray);
let mixArray = oneArray.concat(twoArray);   // doesn't modify any existing array
// console.log(mixArray);
// console.log(oneArray);
// console.log(twoArray);



// let copyArray = twoArray.copyWithin(0,2,5);
// console.log(copyArray);

const iterator1 = oneArray.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

/*

for (const[index,element] of twoArray.entries()){
  console.log(index,element);
}

const arrayEntries = oneArray.entries();
for(const element of arrayEntries){
  console.log(element);
}

*/

// console.log(oneArray.fill(20,3,7));  modify array




// --------------------------------------- Object discussion

const person = {
  age : 30,
  firstName : "Abhay",
  lastName : "Kumar",
  course: "chaiCode",
  hobbies: ["coding","running","Gym"],
  isPaid: true,
  fee : function(){
    return 5400;

  },
  projects:{
    dev : "JavaScript",
    library : "react",
    frontend: "HTML-CSS-JS",
    backend: "nodeJs"

  }
}
// console.log(person);
// console.log(person.projects);
// console.log(person.fee);

// const fees = person.fee();
// console.log(fees);


const human = person;

// console.log(human);

human.firstName = "Hitesh";
human.projects.library = "Angular";

// console.log(human);
// console.log(person);   // Aha pe human ka value change krne se person ka value v change ho gya

// dono same hi memory address ko point kr rhe hain

// heap memory

//-------------------------------------------------------------------------------


let p1 = "Abhay";
let p2 = p1;

p2 = "hitesh"

// console.log(p1);
// console.log(p2);  // Ahe pe p2 ka value change krne se p1 change nhi hua

// stack memory use krta hai primitive data types, stack grow nhi kr skta

// -------------------------------------------

// trade off , garbage collector, memory leak  -> Rust (solve these)

let p01 = {
  fName : "Hitesh",
  lName : "Kumar"
}

// let p02 = p01;
// p02.fName = "Abhay";

// let p02 = {
//   fName: p01.fName,
//   lName : p01.lName
// }

let p02 = { ...p01}; // spread operator
p02.fName = "Abhay";
p02.lName = "Rana"
// console.log(p01);
// console.log(p02);

// Aha pe p02 ko change krne se p01 change nhi hua

// spread operator inner level object (nested obj)pe work nhi krta , only one level ki chijo ko copy kr leta hai
// shallow copy khte hain . (...) shallow copy


// Deep copy : function-> obj -> string me copy -> obj

const p01KaString = JSON.stringify(p01);
console.log(p01);
let p02 = JSON.parse(p1);






