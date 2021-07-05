// const fs = require('fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });

// const t = Date.now()

// setTimeout(() =>{
//     console.log(Date.now() - t )
// },2000)
// setTimeout(() =>{
//     console.log(Date.now() - t )
// },2000)
// setTimeout(() =>{
//     console.log(Date.now() - t )
// },2000)

// console.log(Date.now() - t)


function func(cb){
    console.log("hi")
    cb()
}

function cb() {
    console.log("i am call back")
}

func(cb)