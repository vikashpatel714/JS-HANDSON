 
var Reverse_Number = (N) => 
{
 N = N + "";
	let num = N.split("").reverse().join("");
  return parseFloat(num);  
};
 
