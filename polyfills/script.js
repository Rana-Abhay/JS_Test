// focus on what matters, SHAOLIN, The art of thinking clearly, ->Books name
// 1. create an object representing a type of tea with properties for name,type and caffine content.

const tea = {
  name:"Lemon tea",
  type:"Green",
  Caffine: "low",
  "price value": 100    // isko dot opeartor se access nhi kr skte
}
// console.log(tea);

// 2. access and print the name and type

// console.log(tea.name);
// console.log(tea.type);

// console.log(tea["type"]);

// console.log(tea["price value"]);

// 3. Add a new property origin to tyhe tea object

tea.origin = "India";
// console.log(tea);

//4. change the caffine level to medium

tea.Caffine = "medium";

// console.log(tea);

// 5. remove the type property from the tea object

delete tea.type;

// console.log(tea);

//6. check if object has aproperty origin

// console.log("origin" in tea);

//7. use a for...in loop to print all properties

// for(let i in tea){
//   console.log(tea[i]);
  
// }

//8. nested object

const teas = {
  greentea:{
    name:"Green tea"
  },
  blacktea:{
    nane:"Black tea"
  }
}

//9. create a copy of tea object

const teacopy = {...tea};  // shallow copy
// console.log(teacopy);

const anothercopy = tea; // not a cpy just a reference

// ---------------- Prototype -------------
/*
Object.prototype.chai = function(){
  console.log("Chai ready hai Sir!");
  
}

// Note: Har object k liye a chai function available hai ab like inbuilt function

// tea.chai();
// teas.chai();
*/

// const myTea = {
//   name : "Lemon Tea",
//   taste : "sweet & sour",
//   cup : {
//     shape : ["round","curve","flat"],
//     color : {
//       round : "Green",
//       curve : {
//         yellow : {
//           weight : [100,200]
//         }
//       }
//     }
//   }
// }

// console.log(myTea);


const myTea = {
  name : "Lemon Tea",
  taste : "sweet & sour",
  cup : {
    shape : ["round","curve","flat"],
    color : {
      round : "Green",
      curve : "yellow"  
    }
  }
}
// console.log(myTea);

const myTeas = {...myTea};  // shallow copy hai, same reference share krega
// console.log(myTeas);


//  ------ Polyfill -------------- ********************************
/*
const arr = [1,2,3];

if(!Array.prototype.fill){

//  Fallback -> Polyfill   -> backup function
  Array.prototype.fill = function(){
 // worst case me isko use krlo

  }
}
*/

const arr = [1,2,3,4,5,6,7,8];


// Error : .map doesn't exist on arr variable -> It means we need to add polyfill for .map

// .for each ka polyfill

// first of all real signature ko samjho ki wo function krta kya hai, uska input kya hai


// const res = arr.forEach(function(value,index){
//   console.log(`value at index ${ index } is ${value}`);
  
// })    // A to inbuilt hai

// APna bnate hain foreach ka polyfill *********************

/*
if(!Array.prototype.myForEach){
  Array.prototype.myForEach = function(userFn){
    const originalArr = this;  // this jo hai current object ko point krega

    for (let i=0;i<originalArr.length;i++){
      userFn(originalArr[i], i);
    }
  }
}

const res = arr.myForEach(function(value,index){
    console.log(`value at index ${ index } is ${value}`);
    
   })   
  */
 /*

 // ------------- Map ka polyfill hai *********************
   if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
      const result = [];

      for(let i=0;i<this.length;i++){
        const value = userFn(this[i],i);
        result.push(value);
      }


      return result;
    };
   }

   const n2 = arr.myMap((e) => e*3);
   console.log(n2);

   */

  //  const n4 = arr.filter((e) => e%2 !=0);
  //  console.log(n4);

  // ---filter ka polyfill hai **************************
  /*
   if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){

      const res = [];

      for(let i=0;i<this.length;i++){
        if(userFn(this[i],i)){
          res.push(this[i]);
        }

       
        
      }


      return res;

    };

   }

   const n3 = arr.myFilter((e) => e%2 ==0);
   console.log(n3);
   
   */



   