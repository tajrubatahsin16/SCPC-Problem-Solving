function getSecondSmallestOfTheArray(arr){
    arr.sort((a, b) => {
        return (a-b);
    })
    console.log(arr[1]);
}
getSecondSmallestOfTheArray([6, 3, 5, 2, 9]);