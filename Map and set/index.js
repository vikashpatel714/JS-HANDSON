console.log("connected🌹🌹");
//"Problem:-1
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb
var s='abcadeecfb';
let n=s.length;
let set=new Set();
for(let i=0;i<n;i++){
    set.add(s.charAt(i));
}
console.log(set);
//output- Set(6) {'a', 'b', 'c', 'd', 'e', …}
// [[Entries]]
// 0: "a"
// 1: "b"
// 2: "c"
// 3: "d"
// 4: "e"
// 5: "f"
// size: 6

//"Problem:2
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
// Input:
// abcadeecfb
function printChar(s){
    var map=new Map();
    s.split('').forEach((element)=>{
        if(map.has(element)){
            map.set(element,map.get(element)+1)
        }
        else{
            map.set(element,1)
        }
    });
    s.split('').forEach((i)=>{
        if(map.has(i) && map.get(i)!=0){
            console.log(i + "="+map.get(i)+' ');
            map.set(i,0)
        }
    })

}
var s="abcadeecfb";
printChar(s)

//Output -
//a=2 
// index.js:52 b=2 
// index.js:52 c=2 
// index.js:52 d=1 
// index.js:52 e=2 
// index.js:52 f=1 




// [[Prototype]]: Set
// arr = ['1','1','1','2','2','3','4','5','5','6','6'];
// a
// const uniqueValues = (array)=>(
//     arr.filter((curr,index,ref)=>(
//          ref.indexOf(curr) === index
//     ))

// )

// console.log(uniqueValues(arr))

//output -
// ﻿
// index.js:1 connected🌹🌹
// index.js:11 
// (6) ['1', '2', '3', '4', '5', '6']
// 0: "1"
// 1: "2"
// 2: "3"
// 3: "4"
// 4: "5"
// 5: "6"
// length: 6
// [[Prototype]]: Array(0)