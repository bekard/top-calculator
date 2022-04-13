window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            document.getElementById('1').click();
            break;
        case '2':
            document.getElementById('2').click();
            break;
        case '3':
            document.getElementById('3').click();
            break;
        case '4':
            document.getElementById('4').click();
            break;
        case '5':
            document.getElementById('5').click();
            break;
        case '6':
            document.getElementById('6').click();
            break;
        case '7':
            document.getElementById('7').click();
            break;
        case '8':
            document.getElementById('8').click();
            break;
        case '9':
            document.getElementById('9').click();
            break;
        case '0':
            document.getElementById('0').click();
            break;
        case 'Backspace':
            document.getElementById("backspace").click();
            break;
        case 'Delete':
            document.getElementById("clear").click();
            break;
        case 'Enter':
            document.getElementById("equal").click();
            break;
        case '+':
            document.getElementById("plus").click();
            break;
        case '-':
            document.getElementById("minus").click();
            break;
        case '*':
            document.getElementById("multiply").click();
            break;
        case '/':
            document.getElementById("divide").click();
            break;
        case '.':
            document.getElementById("separator").click();
            break;
    }
}

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
    left = Number(left);
    right = Number(right);
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
            return undefined;
    }
}

function isOperator(param) {
    return param === "+" || param === "-" || param === "*" || param === "/";
}

function addToDisplay(param) {
    display.textContent += param;
}

function evaluateExpression(expression) {
    const separatorIndex = expression.length - 1 - expression.split("").reverse().findIndex((char) => { return isOperator(char)});
    const firstValue = expression.slice(0, separatorIndex);
    const secondValue = expression.slice(separatorIndex + 1);
    const operator = expression[separatorIndex];

    if (secondValue === "") {
        return firstValue;
    }
    return operate(operator, firstValue, secondValue);
}

function getLastEntry() {
    let text = display.textContent;
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        if (isOperator(text[i])) {
            break;
        }
        result += text[i];
    }
    return result.split("").reverse().join("");
}

function getLastChar() {
    return display.textContent[display.textContent.length - 1];
}

function initDigits() {
    for (let index = 0; index <= 9; index++) {
        const btn = document.getElementById(index);
        if (index != 0) {
            btn.addEventListener("click", () => addToDisplay(index));
        }
        else {
            btn.addEventListener("click", () => {
                if (display.textContent !== "" && !isOperator(getLastChar())) {
                    addToDisplay(index);
                }
            });
        }
    }
}

function initZeroes() {
    const zeroesBtn = document.getElementById("000");
    zeroesBtn.addEventListener("click", () => {
        if (display.textContent !== "" && !isOperator(getLastChar())) {
            addToDisplay("000");
        }
    });
}

function initOperators() {
    let initOperator = (id, operator) => {
        const operatorBtn = document.getElementById(id);
        operatorBtn.addEventListener("click", () => {
            const text = display.textContent;
            const lastCharracter = text[text.length - 1];
            const validConditions = !isOperator(lastCharracter) 
                && text.length != 0
                && lastCharracter != ".";

            if (validConditions) {
                let result = evaluateExpression(display.textContent);
                if (result !== undefined) {
                    display.textContent = result;
                }
                addToDisplay(operator);
            }
        });
    };

    initOperator("plus", "+");
    initOperator("minus", "-");
    initOperator("multiply", "*")
    initOperator("divide", "/");
}

function initEqual() {
    const equalBtn = document.getElementById("equal");
    equalBtn.addEventListener("click", () => {
        display.textContent = evaluateExpression(display.textContent);
    });
}

function initSeparator() {
    const separatorBtn = document.getElementById("separator");
    separatorBtn.addEventListener("click", () => {
        const lastEntry = getLastEntry();
        const lastChar = getLastChar();
        const validConditions = lastEntry.split("").findIndex((char) => { 
            return char === "." || isOperator(char);
        }) === -1 && !isOperator(lastChar) && display.textContent.length !== 0;

        if (validConditions) {
            addToDisplay(".");
        }
    });
}

function initClearEntry() {
    const clearEntryBtn = document.getElementById("clear-entry");
    clearEntryBtn.addEventListener("click", () => {
        const lastEntrySize = getLastEntry().length;
        const text = display.textContent;
        display.textContent = lastEntrySize === 0 ? "" : text.slice(0, text.length - lastEntrySize);
    });
}

function initClear() {
    const clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", () => {
        display.textContent = "";
    });
}

function initBacktrace() {
    const deleteOneBtn = document.getElementById("backspace");
    deleteOneBtn.addEventListener("click", () => {
        let text = display.textContent;
        display.textContent = text.slice(0, text.length - 1);
    })
}

function initOneOfX() {
    const oneOfBtn = document.getElementById("one-of-x");
    oneOfBtn.addEventListener("click", () => {
        const result = evaluateExpression(display.textContent);
        if (result !== undefined) {
            display.textContent = 1 / result;
        }
    });
}

function initPowerOfTwo() {
    const powerBtn = document.getElementById("power-of-two");
    powerBtn.addEventListener("click", () => {
        const result = evaluateExpression(display.textContent);
        if (result !== undefined) {
            display.textContent = result * result;
        }
    });
}

function initSquareRoot() {
    const rootBtn = document.getElementById("square-root");
    rootBtn.addEventListener("click", () => {
        const result = evaluateExpression(display.textContent);
        if (result !== undefined) {
            display.textContent = Math.sqrt(result);
        }
    });
}

function initButtons() {
    initDigits();
    initZeroes();
    initOperators();
    initEqual();
    initSeparator();
    initClearEntry();
    initClear();
    initBacktrace();
    initOneOfX();
    initPowerOfTwo()
    initSquareRoot();
}

function initClculatorStyles() {
    let rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
        let item = rows[i];
        item.setAttribute("style", "margin: 3px; display: flex; justify-content: space-between; gap:3px");
    }
}

initButtons();
initClculatorStyles();