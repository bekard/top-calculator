function add(left, right) {
    return left + right;
}

function subtract(left, right) {
    return left - right;
}

function multiply(left, right) {
    return left * right;
}

function divide(left, right) {
    return left / right;
}

function operate(operator, left, right) {
    switch (operator) {
        case "+":
            return add(left, right);
        
        case "-":
            return subtract(left,right);

        case "*":
            return multiply(left, right);

        case "/":
            return divide(left,right);
    
        default:
            console.log(`Undefined operator "${operator}"`);
            break;
    }
}