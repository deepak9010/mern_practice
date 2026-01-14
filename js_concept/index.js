// let a = 10;
// console.log(a);
// function f() {
//     let b = 9

// 		// It prints 9
// 		console.log(b);
// }
// f();
// console.log(b);

// // It prints 10
// console.log(a);


// let a = 10;
// // console.log(a);
//  {
//     let b = 9

// 		// It prints 9
// 		console.log(b);
// }
// // console.log(b);
// console.log(a);
// console.log(b);

// It prints 10

// console.log(document.body.firstElementChild)
// console.log(document.body.children)




/* ***********************event listeners***************************************/
// eventlisteners
// const box1= document.getElementById("box1");
// const btn= document.getElementById("btn");

// btn.addEventListener("click",() =>{
//     box1.classList.add("classforDiv");
// });

// btn.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     btn.style.backgroundColor = "purple";
// });

// box1.addEventListener("mouseover", () => {
//     btn.style.transform = "scale(2.1)";
// });
// box1.addEventListener("mouseout", () => {
//     btn.style.transform = "";
// });

// addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });


/* ***********************storage***************************************/

// session storage
// const input = document.getElementById("myInput");

// const btn = document.getElementById("btn");

// const btnClick = () => {
//     sessionStorage.setItem("key1", input.value);
// };

// btn.addEventListener("click", btnClick);
  


// local storage
// const input = document.getElementById("myInput");

// const btn = document.getElementById("btn");

// const btnClick = () => {
//     localStorage.setItem("key1", input.value);
// };

// btn.addEventListener("click", btnClick);



/* ***********************promise***************************************/
  
// promise

// const mypromise = new Promise((resolve, reject) => {  
//     let anyCondition = false;  
    
//     if(anyCondition) {    
//         resolve('Promise is resolved');  
//     } else {    
//         reject('Promise is rejected');  
//     }
// });
// mypromise.then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// })


// Api
// fetch('https://some-api.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });









/* ***********************callback function***************************************/

// callback func- jo function as a argument pass hota h , like displaySum
// High order func- jiske andar vo func. pass hota h like in below eg. is sum is high order func.
// function sum(a,b,c){
//   const result= a+b;
//   c(result);
// }

// function displaySum(result){
//   console.log(result);
// }

// sum(20,30,displaySum);
// sum(20,30,alert);

// another ex. of callback
const arr=[1,2,3,4,5,6];

function calculator(arr=[], callbackfunction){
  const ans=[];
  for(let i=0; i<arr.length; i++){
    const element = callbackfunction(arr[i]);
    ans.push(element);
  }
  console.log(ans);
}

// function multiply(a){
//   return a*10;
// }
// function divide(a){
//   return a/10;
// }
// calculator(arr,multiply);
// calculator(arr,divide);

// we can also write like this
// calculator(arr,(a)=>{
//   return a*10;
// });
// calculator(arr,(a)=>{
//   return a/10;
// });


// we can also write like this
// calculator(arr,(a)=> a*10);
// calculator(arr,(a)=> a/10);








/* ***********************Lexical Scoping and closure***************************************/

// youtube- chai aur code


 // lexical scoping
//  Lexical scope is the ability for a function scope to access variables from the parent scope.
// function outer(){
//   let username = "vinod"
//   // console.log("try to fetch innner passwors in outer function",password);
  
//   function inner(){
//     let password = "1234"
//     console.log("inner", username);
//   }

//   function innerTwo(){
//     console.log("innerTwo", username);
//     console.log("password",password);
//   }

//   inner()
//   innerTwo()
// }
// outer();
// console.log("Too outer", username)


// closure
// in above ex. we call inner function in outer function, but in this we return it
// in below example we only return function displayname it also fetch name from outer bcz when we return it , only displayname don't go to the memory , displayname + lexical scoping (and we know in lexical scoping , it has acces of outer function's data) will go to the memory that's why it fetch name


// Def-A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// closure = closure is the combination of a function and the lexical environment within which that function was declared

// anotherdef-A closure is a function having access to the parent scope, even after the parent function has closed
function makeFunc() {
  const name = "Mozilla";
     function displayName() {
       console.log(name);
      }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

//  Lexical scope defines the accessibility and visibility of variables based on their location in the code's nested functions. Closures are functions that have access to variables in their outer function scope, even after the outer function has returned.

// Lexical scoping defines a function's accessible scope, while closure enables a function to access variables even after its scope closes.




/* ***********************Call , Apply, Bind***************************************/


// call, apply bind

// call means function borrowing
// let myname = {
//   firstname:"deepak",
//   surname:"singh",
//   printFullName : function(){
//     console.log(this.firstname + " " + this.surname);
//   }
// }

// let myname2= {
//   firstname:"vinod",
//   surname:"pratap",
// }

// myname.printFullName();
// myname.printFullName.call(myname2);



// we can define function outside the obj.
let myname = {
    firstname:"deepak",
    surname:"singh",
  }
    
  let myname2= {
    firstname:"vinod",
    surname:"pratap",
  }

  let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.surname + " " + "from" + " " + hometown + " "+ state);
  }
  
 printFullName.call(myname, "Dehradun", "uttarakhand");
 printFullName.call(myname2, "mathura" , "UP");

//  in apply mehtod is same as call but here we pass 2nd argumrnt is array list form
printFullName.apply(myname, ["Dehradun", "uttarakhand"]);
printFullName.apply(myname2, ["mathura" , "UP"]);

// in call and apply , this methods directly call method but in bind method, it bind the method with object and return a copy of this method, and we have to call it to print  

let printMyName=  printFullName.bind(myname, "Dehradun", "uttarakhand");
console.log(printMyName);
printMyName();






                              // map and reduce 
// Map- > array.map(callback(currentValue, index, array), thisArg)
// ✅ Arguments:
// callback: Function to execute for each element.
// currentValue: The current element.
// index (optional): The index of the current element.
// array (optional): The original array.
// thisArg (optional): Value to use as this inside the callback.

//  filter-> array.filter(callback(currentValue, index, array), thisArg)
// ✅ Arguments:
// callback: Function that returns true to keep the element.
// Same 3 parameters as map(): currentValue, index, array.
// thisArg (optional): Value to use as this.

// reduce->  array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// ✅ Arguments:
// callback: Function that reduces the array to a single value.
// accumulator: The accumulated result from previous iterations.
// currentValue: The current element.
// index (optional): The index of the current element.
// array (optional): The original array.
// initialValue (optional but recommended): Initial value for the accumulator.



// let arr =[1,2,3,5];
// const ans = arr.map((previous, value)=>{
//   return  previous*2;
// })
// const ans = arr.reduce((prev, curr, i, arr)=>{
 
//    arr[i] = arr[i]*2;
  
//   return  arr;
// },[])
// console.log(ans);



                                 // var ,let,const

// 1st concept
// for(var i=0; i<5; i++){
//   console.log(i);
// }
// // output: 0 1 2 3 4 

// for(let j=0; j<5; j++){
//   console.log(j);
// }
// // output: 0 1 2 3 4 

// for(const z=0; z<5; z++){
//   console.log("z ",z);
// }
// // output:  Uncaught TypeError: Assignment to constant variable, bcz it it const we can't update const


// // 2nd concept
// for(var i=0; i<5; i++){
// }
// console.log(i);
// // output 5, it has no block scope
// for(let j=0; j<5; j++){
// }
// console.log(j);
// // outout:  Uncaught ReferenceError: j is not defined, bcz it has block scope , so it can't access outside


// 3rd concept
// for(var i=0; i<5; i++){
//   setTimeout(()=>{
//     console.log("i  ",i);
//   },1000)
// }
// // output: 5 5 5 5 5 
// for(let j=0; j<5; j++){
//   setTimeout(()=>{
//     console.log("J  ",j);
//   },1000)
// }
// // outout: 0 1 2 3 4 







// let my_array = [];

// my_array.push(10) ;               
// my_array.push(3.14) ;             
// my_array.push("Hello, world!") ;            


// console.log(my_array);


/*********************************************** Currying ******************************************* */

// currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

// It transform the function into a number of functions where every function will accept one argument.
// by two types, first using bind and second using closure
// example f(a,b) into f(a,b)

// yt- roadsidecoder

//        --------------------using closure--------------
function f(a){
  return function(b){
      // console.log(a,b);
      return `${a} ${b}`;
  }
}

console.log(f(5)(6));


// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.
/*Simple function*/ 
const add = (a, b, c)=>{
  return a+ b + c
}
console.log(add(1,2 ,3)); // 6

/* Curried Function */
const addCurry = (a) => { // takes one argument
  return (b)=>{                 //takes second argument
      return (c)=>{             //takes third argument
          return a+b+c
      }
  }
}
console.log(addCurry(1)(2)(3)); //6




// another example
function evaluate(operation) {
  return (a) => {
      return (b) => {
         if(operation === "sum") return a + b;
         else if(operation === "multiply") return a * b;
         else if(operation === "divide") return a / b;
         else if(operation === "subtract") return a - b;
         else return "No / Invalid Operation Selected"
      }
  }
}


console.log(evaluate("subtract")(5)(2));




// exapmple of infinite currying 

// infinite currying using simple straightfoward approach and it is time-taking solution
// const sum = function(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 ...
//                 ...
//                 ...
//                 return a + b + c + d + ... n;
//             }
//         }
//     }
// }

// console.log(sum(a)(b)(c) ......n ())

// The above solution is not much of an optimised solution.
//  infinite currying using recursive

  //recursive solution for infinte currying
const sum = function(a) {
  return function(b) {
      if (b) {
          return sum(a + b);
      } else {
          return a;
      }
  }
}

console.log(sum(2)(8)(9)(1)());   //in last add "()" to terminae the chain





//  ---------using bind-----------
// yt-namaste js


let multiply= function(x,y){
  console.log(x+y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(7);

// curry-implementation -roadsidecoder video 


// Why is Currying useful in JavaScript?
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
//It is very useful in building modular and reusable code
//It helps us to avoid passing the same variable multiple times
//It makes the code more readable
// It helps us to create a higher-order function













/***************************************** Prototype Inheritance ********************************************************************* */
// Prototype- basically , it is an hidden object which contain all the properties , methods to use for our original object, function.
// yt- namaste js
let arr1 = ["test" , "user"];

let object = {
  name:"test",
  city:"noida",
  getIntro: function(){
      console.log(this.name + "from" +this.city);
  }
}

let object2={
  name:"test34"
}

// never use this proto in code directly
object2.__proto__ = object;



// doc link-  https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb
// eg.
function Dog() {

 }
Dog.prototype.bark = function() {
  console.log("woof");
 };
 var fido = new Dog();
fido.bark(); // ‘woof!’




Function.prototype.mybind = function(){
  console.log("usertest");
}

function fun2(){

}




// /**************************************** Event Bubbling and Capturing *********************************** */
// yt- namstejs
// doc.-> https://www.freecodecamp.org/news/event-bubbling-and-event-capturing-in-javascript/


// Event flow in the DOM-> Events are generally processed in three phases in the DOM. They are the capturing, the target, and the bubbling phase.

// Event capturing is the first phase , this phase trickles down from the top of the DOM tree to the target element.
// Event Capturing also known as Event trickling-> trickling down(from grandparent to target)

// The target phase is the second phase that begins immediately after the capturing phase ends. This phase is basically the end of the capturing and the beginning of the bubbling phase.The target element is the element where the event originally occurred.

// Event bubbling is the third phase where the event bubbles up from the target element all the way to the global window object.
// Event bubbling -> bubbling up(from target to grandparent) ,(o which div we are clicking then that div is target)
// Event bubbling called bydefault means  useCapture is false bydefault

// if useCapture(boolean value) is true then trickling down will happen, and if useCapture is false then bubbling up will happen 


document.querySelector("#grandparent")
.addEventListener('click', ()=>{
  console.log("granparent clicked");
}, true); //here this true is value of useCapture, if we donot pass any vlue then it is false bydefault


document.querySelector("#parent")
.addEventListener('click', ()=>{
  console.log("parent clicked");
}, true);

document.querySelector("#child")
.addEventListener('click', ()=>{
  console.log("child clicked");
}, true);

// these bubbling and capturing are expensive for a application so we use  stopPropagation() to stop this flow/hierarchy
//  below is the exmple of this
 
document.querySelector("#grandparent")
.addEventListener('click', (e)=>{
  console.log("granparent clicked");
}, true); 


document.querySelector("#parent")
.addEventListener('click', (e)=>{
  console.log("parent clicked");
  e.stopPropagation();
}, true);

document.querySelector("#child")
.addEventListener('click', (e)=>{
  console.log("child clicked");
  e.stopPropagation();
}, true);






// /**************************************** Event Delegation *********************************** */
//  Doc- https://www.freecodecamp.org/news/event-bubbling-and-event-capturing-in-javascript/
// Event delegation - It takes advantage of the DOM (Document Object Model) bubbling event. This means setting event listeners on ancestor elements allows you to handle events efficiently. Unlike setting event listeners on individual elements that trigger the events. 
// But there are some situations where it will be almost impossible to delegate to a child element. For example, it's impossible if the child has a nested child element itself. In this case, it will be impossible to delegate to a child element.

document.querySelector("#category").addEventListener('click',(e)=>{
  console.log(e.target.id);
  console.log("category parent clicked");
  // window.location.href = "/" + e.target.id;
})







/************************************************ Debouncing ******************************************************************** */

// Doc- https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc
// Doc- https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
// Debouncing is a programming technique that helps to improve the performance of web applications by limiting the frequency of function calls.
// Debouncing- Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

// eg- For example, imagine we have a search box that shows suggestions as the user types. If we call a function to fetch suggestions on every keystroke, we might end up making too many requests to the server, which can slow down the application and waste resources. Instead, we can use debouncing to wait until the user has stopped typing for a while before making the request.

let counter = 0;
const getData = () =>{
  // calls an API and gets data
  console.log('fetching data ....', counter++);
}


// Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time.
// syntax
// function debounce(func, delay) {
//     return () => {}   // return debounced function
// }

// below we need to cleartimeout timer bcz here it is run after delay time but  suppose if we type 3 letter , now it will run after delay time but it will run 3 time, that's why we usenclearout time , using cleartimeout if we type some letter and pause then it run after delay time but it will only run 1 time.
const debounce = function(func, delay){
     let timer;
     return function(){
       let context = this,
       args= arguments;
       clearTimeout(timer);

      timer = setTimeout(()=>{
             getData.apply(context, arguments);
          }, delay)
     }
 }
const debouncedSearchData = debounce(getData, 2000);

// below is the example of why we use this
// const debounce = function(func, delay){
//   let timer;
//   return function(){
//     let context = this,        // 👈 capturing the original 'this'
//         args = arguments;      // 👈 capturing any arguments
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args);  // 👈 using 'apply' to call func with original context and args
//     }, delay);
//   }
// }

// const obj = {
//   value: 42,
//   printValue() {
//     console.log(this.value);
//   }
// };

// const debouncedPrint = debounce(obj.printValue, 1000);
// debouncedPrint(); // ❌ this.value is undefined if 'this' is not preserved

// so make this reserver we need to bind the context
// like below option1
// const debouncedPrint = debounce(obj.printValue, 1000);
// // Bind the correct context so 'this' refers to 'obj'
// const boundDebouncedPrint = debouncedPrint.bind(obj);
// // Call it
// boundDebouncedPrint();

// or likne bwlo option2
// const debouncedPrint = debounce(obj.printValue.bind(obj), 1000);
// debouncedPrint();
// If you don't preserve this, the function loses its context and this.value becomes undefined.



//   another example for debouncing- Button
//   ques-1 - Create a button Ui and add debounce as follows->
//          --> show "button pressed <X> times" every time button is pressed
//          --> Increase "Triggered <Y> times" count after 800ms of debounce
// roadsidecoder yt

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount =0;
var triggerCount=0;

const myDebounce = (cb,d) =>{
    let timer;

    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
           cb(...args);
        },d)
    }
};

const debouncedCount = myDebounce(()=>{
      triggerCount += 1;
      count.innerHTML = triggerCount;
},800);

btn.addEventListener("click", ()=>{
  btnPress.innerHTML = ++pressedCount;

  debouncedCount();
})
// roadsidecoder yt - you can done this above example using lodash library, button press debounce using lodash library


// Debouncing example for search bar
const input = document.querySelector(".search_input");
const inputPress = document.querySelector(".input_pressed");
const searchCount = document.querySelector(".search_count");

let inputPressedCount = 0;
let debouncedTriggerCount = 0;

const myDebounce = (cb, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debouncedSearch = myDebounce(() => {
  debouncedTriggerCount += 1;
  searchCount.innerHTML = debouncedTriggerCount;
  console.log("Debounced search triggered:", debouncedTriggerCount);
}, 800);

input.addEventListener("input", () => {
  inputPress.innerHTML = ++inputPressedCount;
  debouncedSearch();
});








/************************************************ Throttling ******************************************************************** */

// Doc- https://www.freecodecamp.org/news/throttling-in-javascript/
// Doc- https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081
// Throttling is a technique used to limit the rate at which a function is called. Throttling transforms a function such that it can only be called once in a specific interval of time.
// Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.
// For example, if you have a function that fetches some data from an API every time the user scrolls the page, you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls. This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.


// roadsidecoder- yt

const btn2 = document.querySelector(".increment_btn2");
const btnPress2 = document.querySelector(".increment_pressed2");
const count2 = document.querySelector(".increment_count2");

var pressedCount2 =0;
var triggerCount2 =0;

const start = new Date().getTime();


const myThrottle = (cb,d)=>{
  // let last = 0;
  // return(...args)=>{
  //    let now = new Date().getTime();

  //    if(now-last < d) return;

  //    last = now;
  //    return cb(...args);
  // }

  //using settimeout 
  let timeout = null;
  console.log('timeout', timeout);
  return(...args)=>{
      if (timeout) {
          console.log('timeouttt', timeout);
          return;
        }
      cb(...args);
      timeout = setTimeout(() => {
          timeout = null;
        }, d);
  }
}

var throttled = myThrottle(()=>{
     triggerCount2 += 1;
     count2.innerHTML = triggerCount2;
}, 1000)

btn2.addEventListener("click", ()=>{
  btnPress2.innerHTML = ++pressedCount2;
  
  // const now = new Date().getTime();
  // const seconds = (now-start) / 1000;
  // console.log(seconds.toFixed());

  throttled();
})

// roadsidecoder yt - you can done this above example using lodash library, button press debounce using lodash library



/************************************************  async vs defer ******************************************************************** */
// namste js -yt
// Doc-  https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm





/*********************************************** CORS ******************************************************************* */

// yt-namastejs
// Doc- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// DOc- https://medium.com/@lfoster49203/javascript-cors-cross-origin-resource-sharing-troubleshooting-6c2767530efe




/*********************************************** Polyfill ******************************************************************* */

// yt-namastejs
// yt-roadsidecoder
// Doc- https://vivekmoradiya.medium.com/most-asked-polyfills-in-javascript-interviews-bad3ec868ead
// Doc- https://dev.to/shubhamdutta2000/polyfills-for-javascript-a-full-overview-3f7m

// polyfill for map function
//syntax-- array.map((num, index, array)=>{})
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 4, 5, 6, 4];

const multiplyByThree = nums.myMap((num, i, arr)=> {
  return num * 3;
});

console.log(multiplyByThree);

// polyfill for filter function
//syntax-- array.filter((num, index, array)=>{})
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
     if (cb(this[i], i, this))  temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 4, 5, 6, 4];

const moreThanTwo = nums.myFilter((num, i, arr)=> {
  return num > 2;
});

console.log(moreThanTwo);

// polyfill for reduce function
//syntax-- arr.reduce((acc, curr, i, arr)={}, initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
   var accumulator = initialValue
    
  for (let i = 0; i < this.length; i++) {
       accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3,4];

const sum = nums.myReduce( (acc, curr, i, arr) =>{
  return acc + curr;
}, 0);

console.log(sum);


// -------------- Polyfill for call and apply and bind---------------------------------------
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

// polyfill for call
Function.prototype.myCall = function (context ={}, ...args) {
    if(typeof this !== "function"){
      throw new Error(this + "it is not callable")
    }

    context.fn = this;
    const result = context.fn(...args);
    return result;
    // below code more perfect for edge cases
     // Handle null / undefined
    // context = context ?? globalThis;

    // const fnSymbol = Symbol("fn");
    // context[fnSymbol] = this;
    // const result = context[fnSymbol](...args);

    // delete context[fnSymbol];
    // context.fn = this;
    // return result;


};

// using prebuilt call
console.log(multiplyAge.call(mary));    
console.log(multiplyAge.call(john, 2)); 


console.log(multiplyAge.myCall(mary));    
console.log(multiplyAge.myCall(john, 2)); 



// polyfill for apply

Function.prototype.myApply = function (context ={}, argArray=[]) {
    if(typeof this !== "function"){
      throw new Error(this + "it is not callable")
    }

    if(!Array.isArray(argArray)){
        throw new TypeError("CreateListFromArrayLike called on non-object")
    }

    context.fn = this;
    const result = context.fn(...argArray);
    return result;

};

console.log(multiplyAge.myCall(mary));    
console.log(multiplyAge.myCall(john, [2])); 


//// polyfill  for bind 
Function.prototype.myBind = function (context ={}, ...args) {
    if(typeof this !== "function"){
      throw new Error(this + "it is not callable")
    }
  
    context.fn = this;
     return function (...newargs){
        return context.fn(...args, ...newargs)
     }

}

// // using prebuilt
// const first = multiplyAge.bind(mary);
// const second = multiplyAge.bind(john, 2)
// const third = multiplyAge.bind(john);
// console.log(first());    
// console.log(second()); 
// console.log(third(2)); 

const fifth = multiplyAge.myBind(mary);
const sixth = multiplyAge.myBind(john, 2)
const seventh = multiplyAge.myBind(john);
console.log(fifth());    
console.log(sixth()); 
console.log(seventh(2));





