function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    }
}

// get first number
// get operator
// get second number
// computer result after an = button is clicked
// result gets stored into first number 

let firstNum = '';
let secondNum = '';
let operator = '';
let isResult = false;

let numbers = document.querySelectorAll(".num-btn")
let operators = document.querySelectorAll(".op-btn")
let display = document.querySelector('.display')

numbers.forEach((number) => {
    number.addEventListener('click', () => {

        if (operator === '' && !isResult) {
            firstNum += number.textContent;
            display.textContent = firstNum;
            console.log(firstNum);
        }
        else if (operator === '' && isResult) {
            firstNum = number.textContent;
            display.textContent = firstNum
            isResult = false;
            console.log(firstNum);
        }
        else {
            secondNum += number.textContent;
            display.textContent = secondNum;
            console.log(secondNum);
        }
    });
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (operator !== '' && secondNum !== '') {
            let output = operate(operator, +firstNum, +secondNum);
            console.log(output);
            display.textContent = output

            firstNum = output.toString();
            secondNum = '';
            isResult = true;

            if (op.textContent === '=') { operator = ''; }

            else { operator = op.textContent };
        }

        else {
            if (op.textContent !== '=') {
                operator = op.textContent;
            }
        }
    });
});

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    display.textContent = '0';

})
