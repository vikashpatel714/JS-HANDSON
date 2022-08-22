
var Minimal_Angle = (h, m) => 
{
const ah = 360/12; 
const am = 360/60;  
let ma= m*am;      
let ha=h*ah+m/60*ah;
const angle=Math.abs(ha-ma);
return Math.min(360-angle , angle);     
};
 