const findSum = (n) => {
    let sum=0;
    let item=2;
    while (item<=n){
      sum=sum+item;
      item+=2;
    }
    return(sum);  
};