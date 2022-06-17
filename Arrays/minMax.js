function arrayMin(arr){
    let min = arr[1];
        for(var i=0; i<N; i++){
            if(min > arr[i]){
                min = arr[i]
            }
        }
        return min;
    }
    
    function arrayMax(arr){
    let max = arr[1];
        for(var i=0; i<N; i++){
            if(max < arr[i]){
                max = arr[i]
            }
        }
        return max;
    }
    let arr = [3,1,4,5,6,7,8];
    N = arr.length;
    console.log(arrayMin(arr,N),arrayMax(arr,N));
    
    let arr1 = [0,0,0,0,0,0,0];
    N = arr1.length;
    console.log(arrayMin(arr1,N),arrayMax(arr1,N));