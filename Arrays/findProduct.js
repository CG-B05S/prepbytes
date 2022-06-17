const Find_Prod = (array, N) => 
{
 let result = 1;
        for (let i = 0; i < N; i++)
            result = result * array[i];
        return result;
     

};

let array =[1,2,3,4,5];
let N=5;
console.log(Find_Prod(array,N));