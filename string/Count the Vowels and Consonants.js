
var Count_Vowels= (S) => 
{
    let count = 0;
   const vowel = "aeiouAEIOU";
   for(let letters of S){
      for(let vow of vowel){
        if(letters === vow){
          count++;
        }
      } 
   }
   return count;     
};
var Count_Consonants= (S) => 
{
  let count2 = 0;
   const vowel2 = "aeiouAEIOU";
   for(let letters of S){
      for(let vow of vowel2){
        if(letters === vow){
          count2++;
        }
      }
   }
   return (S.length - count2);        
};
 
