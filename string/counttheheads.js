
var Count_Occ = (s) => 
{
 let arr = [];
  let arr2 = s.split('');
  let str = "";
  let count = 1;
  for(let i = 0; i < arr2.length-1; i++){
    for(let j = i+1; j < arr2.length; j++){
      if(arr2[i] === arr2[j]){
        count++;
        arr2.splice(j,1);
        j--;
      }
    }
    if(count > 1){
      str = `${arr2[i]}${count}`;
      arr.push(str);
      count = 1;
    }
  }
  let sorted = arr.sort();
  return sorted.join('');    
};
 
