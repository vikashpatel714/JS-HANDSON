const Number_Sum = (N) => 
{
let sum=0;
	while(N!==0){
	  let remainder = N % 10;
	  N =parseInt(N/10);
	  sum=sum+remainder;
	}
	return(sum);
};
