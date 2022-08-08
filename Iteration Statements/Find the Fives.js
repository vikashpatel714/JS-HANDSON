
const Find_Five = (N) => 
{
	 let count = 0;
	 while (N!==0){
	   var remainder = N % 10;
	   N = parseInt(N/10);
	   if(remainder==5){
	     count=count+1;
	   }
	 }
	 return count; 
};