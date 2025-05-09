/*
const obj1 = {
  fname: "Hitesh",
  lname: "Kumar",
  city: "patna",

  greet(){
    console.log(`Greeting from ${this.city}`);
  }
};
console.log(obj1);
console.log(obj1.greet()); 
*/

// --------------------------------

/*

Function.prototype.describe = function(){
  console.log(`Function name is ${this.name}`);  // this.name means function name 
  
  
};

function greet(name){         // Aha pe function name greet hai
  return `Hello ${name}`
}

// greet.describe();  
// console.log(greet("abhay"));

*/


/*

// first class function 

function applyOperation(a,b,operation){
  return operation(a,b);
}

const result = applyOperation(5,4,(x,y) => x/y);
console.log(result);
  
*/


/*

//     --------   Tiffin concept 
function createCounter(){

  let count = 0;

  return function(){
    count++;
    return count;
  }
}

const counter = createCounter();  // Aha pe counter ek normal variable nhi hai but ek function hai
console.log(counter());
                  
*/

/*
//------------------------  IIFE -------

(function(){

  // const val = 555;
  console.log("Hitesh");
})();

*/


//  -----------------------  DOM  ----------------------

function changeBackground(color){
  document.body.style.background = color;
}

// Event Listener

const darkButton = document.getElementById('dark-mode');

darkButton.addEventListener('click', function(){

  console.log("Getting dark");
  changeBackground('black');
  
})

darkButton.addEventListener('click', function(){
  console.log('Another property added!')
})

//-------------------


const lightButton = document.getElementById('light-mode');

lightButton.addEventListener('click', function(){

  console.log("Getting light");
  changeBackground('white');
  
})

lightButton.addEventListener('click', function(){
  console.log('Another property added!')
})


//-------------------- Toggle Button

const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener('click', ()=> {

const currentColor = document.body.style.backgroundColor;

if(!currentColor || currentColor === 'white'){
  changeBackground('black');
  toggleButton.innerText = "Light-Mode";
}else{
  changeBackground('white');
  toggleButton.innerText = 'Dark-Mode';
}

})


// -----------------------------

// -----------------  To-do-app --------------

const addButton = document.getElementById('add-button');
const inputItems = document.getElementById('input-items');

const itemList = document.getElementById('item-container');

const clearAll = document.getElementById('All-Clear');


addButton.addEventListener('click', () => {
  const value = inputItems.value;

  const li = document.createElement('li');
  li.innerText = value;

  const delButton = document.createElement('button');
  delButton.innerText = 'X';
  li.appendChild(delButton);

  delButton.addEventListener('click', () => {
    li.remove();
  })


  itemList.appendChild(li);

  inputItems.value = '';

  clearAll.addEventListener('click', () => {
    itemList.innerHTML = '';
  })


})