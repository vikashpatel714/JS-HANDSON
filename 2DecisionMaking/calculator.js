const Calculator = (A, B, C) => 
{
	switch(A){
	  case '+':{
	    return B+C;
	  }break;
	   case '-':{
	    return B-C;
	  }break;
	   case '*':{
	    return B*C;
	  }break;
	   case '/':{
	    return B/C;
	  }break;
	}
    
};