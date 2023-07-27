function getTheIndicesOfSumElements(arr, target){
    let indices;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]+arr[j] == target)
            {
                return [i,j];
            }
        }
    }
}

const result = getTheIndicesOfSumElements([1, 3, 6, 8, 11, 15], 9);
console.log(result);