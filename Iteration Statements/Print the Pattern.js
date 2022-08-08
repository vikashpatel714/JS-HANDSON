
const Print_pattern = (N) => 
{
  let i,j;
 
  for(i=0;i<N;i++){
     let result=''
    for(j=0;j<=i;j++){
      result=result+'*'
    }
    console.log(result)
  }
};
