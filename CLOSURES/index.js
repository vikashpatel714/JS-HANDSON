// 1-
// "    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());"

// function counter() {
//     var counter = 0;
  
//     function IncreaseCounter() {
//       return (counter += 1);
//     }
  
//     return IncreaseCounter;
//   }
  
//   var counter = counter();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   output:- 1
//   index.js:17 2
//   index.js:18 3
//   index.js:19 4

// 2-"let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();"

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// output -index.js:51 1
// index.js:53 0

// 3-"for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }"

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
// output-index.js:66 3 3 3

// 4-Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
// const rectangle = (length) => {
//     br = function (breadth) {
//       console.log(length * breadth);
//     };
//   };
  
//   rectangle(5);
//   br(8);
//   output- index.js:74  40

// 5-Take a variable in outer function and create an inner function to increase the counter every time it is called
// const outer = () => {
//     let n = 0;
//     inner = function () {
//       return n++;
//     };
//     return inner;
//   };
  
//   const result = outer();
//   console.log(result());
//   console.log(result());
//   console.log(result());
//   console.log(result());
//   output-
// ﻿
//   index.js:92 0
//   index.js:93 1
//   index.js:94 2
//   index.js:95 3

// 6-"Print Output
// var a = 12;
// (function () {
//   alert(a);
// })();"

// var a = 12;
// (function () {
//   alert(a);
// })(); 
// output -12

// 7-"var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();"

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// output-12

// 8-"var globalVar = ""xyz"";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);
    
//     })(456);
// })(123);"
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//   var outerVar = "a";

//   (function innerFunc(innerArg) {
//     var innerVar = "b";

//     console.log(
//       "outerArg = " +
//         outerArg +
//         "\n" +
//         "innerArg = " +
//         innerArg +
//         "\n" +
//         "outerVar = " +
//         outerVar +
//         "\n" +
//         "innerVar = " +
//         innerVar +
//         "\n" +
//         "globalVar = " +
//         globalVar
//     );
//   })(456);
// })(123);
// output-
// ﻿
// index.js:159 outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz