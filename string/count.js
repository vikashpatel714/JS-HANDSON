
const countCharacters = (S) => 
{
    let B=[0,0];
    for(let i=0;i<S.length;i++){
      
      if(S.charAt(i)=="A")
      {
      B[0]+=1;
      }
    else if(S.charAt(i)=="D")
      {
      B[1]+=1;
      }
    }
    
    return B;  
};
 
