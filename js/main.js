let num1 = 21;
let num2 = 10;

function isNrOrSumTwenty(number1, number2){
    let result = false;

    if (number1 == 20 || number2 == 20 || (number1 + number2) <=20) {
        result = true;
    }

    return result;
}

console.log(isNrOrSumTwenty(num1, num2));