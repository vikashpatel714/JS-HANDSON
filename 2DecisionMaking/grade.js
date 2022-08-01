const findGrades = (a) => {
    if(a<=10){
      return 'E'
    }else if((a>=11)&& (a<=20)){
      return 'D'
    }else if((a>=21)&&(a<=30)){
      return 'C'
    }else if((a>=31)&&(a<=40)){
      return 'B'
    }else if((a>=41)&&(a<=50)){
      return 'A'
    }
};