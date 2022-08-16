 
var Game_Winner = (S) => 
{
  let countA = 0;
  let countD = 0;
  for(let value of S){
    if(value === "A"){
      countA++;
    }else{
      countD++;
    }
  }
  if(countA === countD){
    return "Draw";
  }else if(countA > countD){
    return "Aditya";
  }else{
    return "Danish";
  } 
}
 
