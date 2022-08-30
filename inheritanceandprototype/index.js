// 1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
// const parent = {
//     name: "ikash",
//     printName: function () {
//       console.log(this.name);
//     },
//   };
//   const child = Object.create(parent);
//   child.printName();
//   OUTPUT-index.js:5 Vikash

 // 2. Write code to explain prototype chaining
//  function Mobile(brand, model, os) {
//     this.brand = brand;
//     this.model = model;
//     this.os = os;
//   }
//   const myMobile = new Mobile("Samsung", "A11", "Android 12");
//   console.log(myMobile.hasOwnProperty("brand"));
//   OUTPUT-index.js:20  true

  // 3. Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays
//   const num1 = [10, 20, 30, 40, 50]; 
//   const num2 = [100, 200, 300]; 
  
//   Array.prototype.total = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//       sum += this[i];
//     }
//     console.log(sum);
//   };
  
//   num1.total();
//   num2.total(); 
//   OUTPUT-
//   index.js:31 150
//   index.js:31 600

 // 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
 const studentOne = {
    name: "Vikash",
    age: 22,
  };
  studentTwo = Object.create(studentOne);
  studentTwo.birthYear = 2022;
  for (const key in studentTwo) {
    console.log(key);
  }
//   output-
//   index.js:51 birthYear
//   index.js:51 name
//   index.js:51 age