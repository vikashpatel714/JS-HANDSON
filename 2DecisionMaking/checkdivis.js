
const Check_divisibility = (N) => {
    if((N%6 == 0) && (N%9 == 0)){
      return 'divisible by both';
    }else{
      return 'not divisible by both';
    }  
};