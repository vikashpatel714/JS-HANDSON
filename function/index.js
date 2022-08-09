console.log("connected🌹");
//1.// Q1 Create a function with zero parameter having console statement
function sum()
{
    console.log("js");
}
sum();
//output-js


//2.Create a function which takes two values as a parameter and print the sum of them as "Sum of 3 and 4 is 7"
// function add(a,b)
// {
//     let sum;
//     sum=a+b;
//     console.log(sum); 
// }
// add(3,4);
// output-7

//3 Create one arrow function
// const addition = (a,b) =>{
//     let result = a+b;
//     console.log(result);
// }
// addition(6,8);
//output-14


//Q.4 Print Output

// var x =21;
// var girl = function()
// {
//     console.log(x);
//     var x = 20;
// }

// girl();
//output -undefined

//5
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
//21


//6.
// var x = 21;
// a();
// b();
// console.log(a);
// a = function(){
//     x = 20;
//     console.log(x);
// };
// b = function(){
//     x = 40;
//     console.log(x);
// };
//output-index.js:55 
        
    //    Uncaught ReferenceError: a is not defined
    //    at index.js:55:1

// //8.
function fact(n){
    if (n===0)
    {
        return 1;
    }
        return (n * fact (n - 1));
}
console.log(fact(5)); //120