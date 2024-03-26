// 버튼
const calculator = document.querySelector('.calculator');
const screen = calculator.querySelector('.screen');
const buttonGroup = calculator.querySelector('.calculator-btns');
const buttons = buttonGroup.querySelectorAll('button');

let numA = 0; // 변수A
let sign = ''; // 연산자
let numB = 0; // 변수B
let resultValue = 0; // 결과값

// 계산
function calculate(numA, sign, numB) {
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

        default:
            break;
    }
    return resultValue;
}

let isFirst = true; // 입력된 값이 첫번째 값인지 확인하는 변수

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        let screenValue = screen.value;
        let clickedType = e.target.classList[0]; //입력한 버튼의 타입
        let clickedBtn = e.target.innerText; //입력한 버튼
        let preClicked = ''; //최근에 클릭한 버튼 타입

        // 스크린 업로드
        function upload() {
            // 기존 입력값에 따른 스크린 업로드 변화
            if (screenValue === '' || screenValue === '0') {
                screen.value = clickedBtn;
            } else {
                screen.value = screenValue + clickedBtn;
            }
        }

        switch (clickedType) {
            case 'number':
                // 숫자

                // 결과를 확인한 후 클리어 없이 숫자를 누를 시
                if (result) {
                    numA = 0;
                    numB = 0;
                    sign = '';
                    resultValue = 0;
                    isFirst = true;
                }

                // 첫번째 숫자가 0인지 확인
                if (isFirst && clickedBtn !== '0') {
                    isFirst = false;
                }

                // 변수A || 변수B 지정
                if (!resultValue) {
                    // 변수A
                    numA = numA + clickedBtn;
                } else if (numA && sign) {
                    // 변수B
                    numB = numB + clickedBtn;
                }

                upload();
                preClicked = 'number';
                break;

            case 'func':
                // 연산자

                // 연산자가 중복될 때 수정

                upload();
                sign = clickedBtn;
                isFirst = true;
                preClicked = 'func';

                // '()', '+/-','.'일때 수정 필요
                break;

            case 'percent':
                // 퍼센트
                preClicked = 'percent';
                break;

            case 'clear':
                // 초기화
                numA = 0;
                numB = 0;
                sign = '';
                percent = '';
                isFirst = true;
                screen.value = 0;
                break;

            case 'result':
                // 결과산출
                if (sign && preClicked !== 'func') {
                    calculate(numA, sign, numB);
                    screen.value = resultValue;
                    preClicked = '';
                }
                break;

            default:
                break;
        }
    });
});
