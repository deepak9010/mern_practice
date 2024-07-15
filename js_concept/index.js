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