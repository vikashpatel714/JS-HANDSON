const Max_out_of_three = (A,B,C) => {
    
    if(A>B && B>C) {
      return A;
    }
    
    if(A>C && C>B) {
      return A;
    }
     
    if(B>A && A>C) {
      return B;
    }
    
    if(B>C && C>A) {
      return B;
    }
      
    if(C>A && A>B) {
      return C;
    }
    
    if(C>B && B>A) {
      return C;
    }
    
    if(A==B && B==C) {
      return -1;
    }
      
  };