const Inc_Arr = (array,N) => 
{
    array.forEach(function(ele){
        console.log(ele + 1);
    })

};
 
let array=[1,2,3,4,5];
let N=5;
console.log(Inc_Arr(array,N));