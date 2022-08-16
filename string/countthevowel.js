
var Count_Vowels= (S) => 
{
 const vowel = "aeiouAEIOU";
  let count = 0;
  for( let input of S){
    for(let vow of vowel){
      if(input === vow){
        count++;
      }
    }
  }
  return count;      
};
 
