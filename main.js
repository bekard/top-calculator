const display = document.getElementById("display");

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

function isOperator(param) {
    return param === "+" || param === "-" || param === "*" || param === "/";
}

function addToDisplay(param) {
    const text = display.textContent;
    if (param == ",") {
        // найти последнее число и проверить, есть ли в нём разделитель
        // canInsertSeparator()
    }
    else if (isOperator(param)) {
        const lastCharracter = text[text.length - 1];
        if (!isOperator(lastCharracter)) {
            display.textContent += param;
        }
    }
    else {
        display.textContent += param;
    }
}

function evaluateExpression() {
    return "";
}

function initDigits() {
    for (let index = 0; index <= 9; index++) {
        const btn = document.getElementById(index);
        if (index != 0) {
            btn.addEventListener("click", () => addToDisplay(index));
        }
        else {
            btn.addEventListener("click", () => {
                if (display.textContent !== "") {
                    addToDisplay(index);
                }
            });
        }
    }
}

function initOperators() {
    let initOperator = (id, operator) => {
        const operatorBtn = document.getElementById(id);
        operatorBtn.addEventListener("click", () => addToDisplay(operator));
    };

    initOperator("plus", "+");
    initOperator("minus", "-");
    initOperator("multiply", "*")
    initOperator("divide", "/");
}

function initEqual() {
    const equalBtn = document.getElementById("equal");
    equalBtn.addEventListener("click", () => {
        display.textContent = evaluateExpression();
    });
}

function initSeparator() {
    const separatorBtn = document.getElementById("separator");
    separatorBtn.addEventListener("click", () => addToDisplay(","));
}

function initClear() {
    const clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", () => {
        display.textContent = "";
    });
}

function initBacktrace() {
    const deleteOneBtn = document.getElementById("delete-one");
    deleteOneBtn.addEventListener("click", () => {
        let text = display.textContent;
        display.textContent = text.slice(0, text.length - 1);
    })
}

function initButtons() {
    initDigits();
    initOperators();
    initEqual();
    initSeparator();
    initClear();
    initBacktrace();
}

initButtons();