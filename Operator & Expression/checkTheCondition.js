const Check = (A, B) => 
{
  let result;
   if (A % 10 == 0 && B % 10 ==0) {
        result="true";
   }
   else if (A % 10 == 0 || B % 10 ==0){
       result="true";
   }
   else{
       result="false"
   }
   return result;  
};
console.log(Check(12,20));