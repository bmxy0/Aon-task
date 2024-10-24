// let { getAll, getFirst, getLast,printAll } = require("./src/students");

// // console.log(getAll());
// // console.log(getFirst());
// // console.log(getLast());

// printAll()
// // require("./src/block.js");

// let sayHello = (msg, cb) => {
//   cb(msg);
// };

// sayHello("Hello", (msg) => {
//   console.log(msg);
// });



let num1
let num2

// let numbers= (cb) =>{
//   num1 = 10
//   num2 = 20
//   cb(num1+num2)
//  }


let sayHello = async () =>{
await new Promise((resolve)=>{
  setTimeout(() => {
    console.log("hello")
    resolve()
  }, 1000);
})
  console.log("Ali")
}

sayHello()