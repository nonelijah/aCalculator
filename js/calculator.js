// 버튼
const calculator = document.querySelector('.calculator');
const screen = calculator.querySelector('.screen');
const buttonGroup = calculator.querySelector('.calculator-btns');
const buttons = buttonGroup.querySelectorAll('button');
const func = buttonGroup.querySelectorAll('.func');
const number = buttonGroup.querySelectorAll('.number');
const clearBtn = buttonGroup.querySelector('#clear');
const bracketBtn = buttonGroup.querySelector('#bracket');
const percentBtn = buttonGroup.querySelector('#percent');
const divideBtn = buttonGroup.querySelector('#divide');
const multiplyBtn = buttonGroup.querySelector('#multiply');
const subtractBtn = buttonGroup.querySelector('#subtract');
const addBtn = buttonGroup.querySelector('#add');
const changeBtn = buttonGroup.querySelector('#change');
const decimalPointBtn = buttonGroup.querySelector('#decimal-point');
const resultBtn = buttonGroup.querySelector('#result');
const num1 = buttonGroup.querySelector('#number1');
const num2 = buttonGroup.querySelector('#number2');
const num3 = buttonGroup.querySelector('#number3');
const num4 = buttonGroup.querySelector('#number4');
const num5 = buttonGroup.querySelector('#number5');
const num6 = buttonGroup.querySelector('#number6');
const num7 = buttonGroup.querySelector('#number7');
const num8 = buttonGroup.querySelector('#number8');
const num9 = buttonGroup.querySelector('#number9');
const num0 = buttonGroup.querySelector('#number0');

// 첫째값
let numA = 0;
// 부호
let sign = '';
// 둘째값
let numB = 0;
// 결과값
let resultValue = 0;

// 계산
function calculate(numA, sign, numB) {
    if (!sign) {
        return;
    } else {
        switch (sign) {
            case '+':
                resultValue = Number(numA) + Number(numB);
                break;
            case '-':
                resultValue = Number(numA) - Number(numB);
                break;
            case '*':
                resultValue = Number(numA) * Number(numB);
                break;
            case '/':
                resultValue = Number(numA) / Number(numB);
                break;
            case '%':
                resultValue = Number(numA) / Number(numB);
                break;

            default:
                break;
        }

        return resultValue;
    }
}

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        let preValue = screen.value;
        let clickedType = e.target.classList[0];
        let clickedBtn = e.target.innerText;

        console.log(clickedBtn);

        switch (clickedType) {
            case 'clear':
                numA = 0;
                numB = 0;
                sign = '';
                screen.value = '0';
                break;
            case 'percent':
                screen.value = clickedBtn;
                break;
            case 'func':
                if (
                    clickedBtn !== '.' ||
                    clickedBtn !== '()' ||
                    clickedBtn !== '+/-'
                ) {
                    numA = preValue;
                }
                sign = clickedBtn;
                screen.value += clickedBtn;
                break;
            case 'number':
                if (resultValue !== 0) {
                    resultValue = 0;
                    numB = 0;
                    screen.value = clickedBtn;
                }
                if (preValue === '0') {
                    screen.value = clickedBtn;
                } else {
                    screen.value += clickedBtn;
                }
                break;
            case 'result':
                if (!numB) {
                    numB = preValue.match(/\d+$/);
                }
                calculate(numA, sign, numB);
                screen.value = resultValue;
                numA = resultValue;
                break;

            default:
                break;
        }
    });
});
