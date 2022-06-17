const findEvenOdd = (N, Arr) => 
{
    let odd_sum= 0;
    let even_sum= 0;
    let B=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 === 0 ){
        even_sum+=Arr[i];
      }
      else{
        odd_sum+=Arr[i];
      }
    }
    B[0]=even_sum ;
    B[1]=odd_sum;
    return B;  
};

let N=7;
let Arr=[1,2,3,4,5,6,7];
console.log(findEvenOdd(N,Arr));