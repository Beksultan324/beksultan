function calculate(a, b, op) {
  switch(op) {
    case '+':
      res = +a + +b;
      break;
    case '-':
      res = +a - +b;
      break;
    case '/':
      res = +a / +b;
      break;
    case '*':
      res = +a * +b;
      break;
  }
  return res;
}

function reassignVar() {
  operand1 = calculate(operand1, operand2, operator);
  operand2 = '';
}

function delLastVal(str) {
  return str.slice(0, str.length - 1);
}

let operator = '';
let operand1 = '';
let operand2 = '';
let resDisplay = '';
let flag = false;

let click = document.getElementById("hook-click");
click.addEventListener('click', (event) => {
  const value = event.target.textContent;
  switch(value) {
    case '+':
      if (operand2) { 
        reassignVar();
      }
      operator = '+';
      break;
    case '-':
      if (operand2) { 
        reassignVar();
      } 
      operator = '-';
      break;
    case '/':
      if (operand2) { 
        reassignVar();
      }
      operator = '/';
      break;
    case '*':
      if (operand2) { 
        reassignVar();
      }
      operator = '*';
      break;
    case 'AC':
      operator = '';
      operand1 = '';
      operand2 = '';
      break;
    case 'DEL':
      if (resDisplay) {
        flag = true;
      }
      break;
    default:
      if (!operator) operand1 = operand1 + value;
      else {
        operand2 = operand2 + value;
      }
  }
  resDisplay = operand1 + operator + operand2;
  if (flag) {
    display.innerHTML = delLastVal(resDisplay);
    flag = false;  
  } else {
    display.innerHTML = resDisplay;
  }
})

let equal = document.getElementById("equal");
equal.addEventListener('click', (event) => {
  reassignVar();
  display.innerHTML = operand1; 
  event.stopImmediatePropagation();
})

let display = document.getElementById("display-screen");




 



