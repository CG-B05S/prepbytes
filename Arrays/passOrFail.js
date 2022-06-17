const isAllPass = (N, Arr) => 
{
  let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"
    
};

let N=7;
let Arr=[32,43,12,56,54,12,26];
console.log(isAllPass(N,Arr));