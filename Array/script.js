// console.log("Hello JS-Array");

const myArray = [1,2,3,"Apple",'BMW',"Sweet"];
// console.log(myArray);
// console.log(myArray.toString());
// console.log(Array.isArray(myArray));  // check if array
// console.log(myArray instanceof Array); // check if array

const myObj ={
  name: "Abhay",
  age: 30,
  cars: [
    {name:"tata",models:["punch","curvv","nexon"]},
    {name:"suzuki",models:["swift","DZire","Brezza"]},
    {name:"Hyundai",models:["city","Creta","ciaz"]}
  ]
}

// console.log(myObj);
// for(let i in myObj.cars){
//   console.log(myObj.cars[i]);
// }
// console.log(myObj.cars[2].models[2]);   // o/p: ciaz

/*
for(let i in myObj.cars){
  console.log(myObj.cars[i].name + " .....");
  for(let j in myObj.cars[i].models){
    console.log(myObj.cars[i].models[j]);
  }
}

*/
//    ---------------  Array Methods ---------

const testArray = [20,25,"Hitesh","chaiCode","Banana",200,"Apple"];
// console.log(testArray.length);
// console.log(testArray.toString());

// console.log(testArray.at(5));
// console.log(testArray[5]);
// console.log(testArray[-1]);

// console.log(testArray.join("--"));

/*
console.log(testArray.pop());
console.log(testArray.push("Apple"));  // returns the new length of the array
console.log(testArray);
*/
/*
console.log(testArray.shift());
console.log(testArray.unshift(20));  // returns the new length of the array
*/

/*
console.log(delete testArray[0]);
console.log(testArray[0]);      // gives undefined

*/

// const arr1 = [1,2,3,4,5,6,7,8];
// arr1.copyWithin(2,0);
// console.log(arr1);


// ----- flat ---------------
/*
const arr2 = [2,3,4,[5,6,[7,[9,8,0,1,[5,5,6,7]]]]];
console.log(arr2);
console.log(arr2.flat());
console.log(arr2.flat(0));
// console.log(arr2.flat(Infinity));
*/

// ----------- flatmap --------------
/*
const arr3 = [10,15,20,25,30];
const newArr3 = arr3.flatMap(x =>[x,x+10]);
console.log(newArr3);
*/

// --------------- splice ------------- manipulates original array
/*
const arr4 = [2,3,4,5,6];
arr4.splice(2,0,10);  //index 2 pe 0 elem htao or 10 add kro
console.log(arr4);
arr4.splice(2,1,20);  //index 2 pe 1 elem htao or 20 add kro
console.log(arr4);
arr4.splice(3,3,50,60,70); // index 3 pe 3 elem htao or 50,60,70 add kro
console.log(arr4);
*/

// ------ slice ---------

// const arr5 = [10,20,30,40,50,60,70,80,90,100];
// console.log(arr5.slice(2)); // slice from index 2 onwards
// console.log(arr5.slice(0,8));  // slice from inex 0 t0 8

/*
const myArr = [0,1,2,3,4,5];
console.log(myArr);
const myArr2 = myArr.slice(1,3);
console.log(myArr2);
console.log(myArr);
const myNewArr = myArr.splice(1,3);
console.log(myNewArr);
console.log(myArr);
*/

// ------  fill  ------------- manipulates original array
/*
const arr = [5,10,15,20];

console.log(arr.fill(0,1,3));  // fill value = 0 from index 1 to 3(excluded)
console.log(arr);
console.log(arr.fill(5,2));  // fill value = 5 from index 2 onwards
console.log(arr);
*/


















