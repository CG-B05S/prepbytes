function Unique_Shirts (arr,N) {
    let temp=""
        let dress=0;
        let i,j;
        for(i=0;i<N;i++){
            let compare=0;
            for(j=0;j<N;j++){
                if(arr[i]==arr[j]){
                    compare++;
                }
    
            }
            if(compare==1){
                temp=temp+arr[i];
                dress++;
            }
        
    }
    return dress;
    
    }

    let N=6;
    let arr=[2,3,4,2,1,9];
    console.log(Unique_Shirts(arr,N));