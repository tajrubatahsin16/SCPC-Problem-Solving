function calculator(num1, num2, operator){
    let output = 0;
    if(operator === '+'){
        output = num1 + num2;
    }
    else if(operator === '-'){
        output = num1 - num2;
    }
    else if(operator === '*'){
        output = num1 * num2;
    }
    else if(operator === '/'){
        output = num1 / num2;
    }
    else{
        console.log("invalid input");
    }
    return output;
}

const result = calculator(12, 10, '+');
console.log(result);