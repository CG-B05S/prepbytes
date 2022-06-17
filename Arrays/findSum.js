const Find_Sum = (array, N) => 
{
  let result = 0;
        for (let i = 0; i < N; i++)
            result = result + array[i];
        return result;

};

array =[1,2,3,4,5];
N=5;
console.log(Find_Sum(array,N));