function reverseString(str){
    const letters = str.split('');
    let result = '';
    for(let i=letters.length-1; i>=0; i--){
        result += letters[i];
    }
    console.log(result);
}

reverseString('hello world');