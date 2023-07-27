function frequencyCount(arr){
    let maxCount = 0;
    let numMoreThanOnce;
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            numMoreThanOnce = arr[i];
        }
    }
    console.log(numMoreThanOnce);
}

frequencyCount([3, 5, 2, 5, 3, 3, 1, 4, 5]);