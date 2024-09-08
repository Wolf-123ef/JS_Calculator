let currentNumber = '';
let previousNumber = '';
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (number === '.' && currentNumber.includes('.')) return;
  currentNumber += number;
  display.value = currentNumber;
}

function setOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
  display.value=previousNumber+operator+currentNumber;
  display.value=previousNumber;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  display.value = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      result.toFixed(2);
      break;
    case '-':
      result = prev - current;
      result.toFixed(2);
      break;
    case 'X':
      result = prev * current;
      result.toFixed(2);
      break;
    case '/':
      result = prev / current;
      result.toFixed(2);
      break;
    default:
      return;
  }
  
  currentNumber = result;
  operator = null;
  previousNumber = '';
  display.value = result;
}