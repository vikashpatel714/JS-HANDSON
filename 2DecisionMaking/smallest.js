const findSndSmallest = (x,y,z) => {
    if(x>y && y>z) {
     return y;
   }
   
   if(x>z && z>y) {
     return z;
   }
   
   if(y>x && x>z) {
     return x;
   }
   
   if(y>z && z>x) {
     return z;
   }
     
   if(z>x && x>y) {
     return x;
   }
   
   if(z>y && y>x) {
     return y;
   }
   
     
 };