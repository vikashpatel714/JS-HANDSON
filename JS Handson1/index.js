//1-add two number 

const AddTwoNumbers = (a,b) => {
    return a+b;
    
};

// 2-Find if the conditions are obey

const Is_Valid = (a,b) => {
    return a<10 && a>b; 
  };


// 3- Check the conditions

  const Check = (A, B) => 
{
    return (A%10 == 0) || (B%10 == 0) ? true : false;
};

//4-Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that number.
const First_Digit = (n) => {
    n-=(n%1000);
    
    return n/1000;
 };

 //  5-Find the last digit of a 4 digit number
//  You are provided a four digit number N only. Your task is to print out the last digit of that number.
const Last_Digit = (n) => {
    return n%10;
 };


 //6-find the remainder
const Find_the_remainder = (a,b) => {
    return b%a;
};

//7- Multipy two Numbers
// You are provided with two numbers 
// A and B
// . Your task is to multiply these two numbers.

const Multiply_two_number = (a,b) => {
    return a*b;
};

//8- //Marks Calculator
 const Sum = (A, B, C) => 
{
  return A+B+C;
};

const Average = (A, B, C) => 
{
  return (A+B+C)/3;
};

