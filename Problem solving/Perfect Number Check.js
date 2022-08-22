 
var Perfect_Check = (N) => 
{
let sum = 1;

for(let i = 2; i <= N/2; i++)  {
  if(N/i == 0) {
    sum = sum + i;
  }
}

if(sum == N) {
  return "YES"
}

return "NO";          
};
 
