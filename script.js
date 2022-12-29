let display = document.querySelector(`.displayscreen`);
const btn7 = document.querySelector(`.button7`);
const btn8 = document.querySelector(`.button8`);
const btn9 = document.querySelector(`.button9`);
const btn4 = document.querySelector(`.button4`);
const btn5 = document.querySelector(`.button5`);
const btn6 = document.querySelector(`.button6`);
const btn1 = document.querySelector(`.button1`);
const btn2 = document.querySelector(`.button2`);
const btn3 = document.querySelector(`.button3`);
const btn0 = document.querySelector(`.button0`);
const btndoc = document.querySelector(`.buttondoc`);
const btnAdd = document.querySelector(`.buttonadd`);
const btnMinus = document.querySelector(`.buttonminus`);
const btnMultiply = document.querySelector(`.buttonmultiply`);
const btnDivide = document.querySelector(`.buttondivide`);
const btnClear = document.querySelector(`.buttonclear`);
const btnEqual = document.querySelector(`.buttonequal`);
const btnDel = document.querySelector(`.buttonDel`);

let num1 = "";
let num2 = "";
let operator = "";
let result = 0;
let isResult = false;

function updateValue(number) {
  if (!operator) {
    if (!num1) {
      if (number === 0) {
        return false;
      } else if (number === ".") {
        num1 = `0`;
      }
    }
    isResult = false;
    num1 = num1 + number;
    display.textContent = num1;
  } else {
    if (!num2) {
      if (number === 0) {
        return false;
      } else if (number === ".") {
        num2 = `0`;
      }
    }
    isResult = false;
    num2 = num2 + number;
    display.textContent = num2;
  }
}
function calculate() {
  if (!num2) {
    return;
  }
  let num3 = parseFloat(num1);
  let num4 = parseFloat(num2);
  switch (operator) {
    case "+":
      result = num3 + num4;
      break;
    case "-":
      result = num3 - num4;
      break;
    case "*":
      result = num3 * num4;
      break;
    case "/":
      result = num3 / num4;
      break;
    default:
      break;
  }
  isResult = true;
  display.textContent = result;
  num1 = result;
  num2 = "";
}
function del() {
  if (isResult) {
    return;
  }
  if (!operator) {
    num1 = num1.substring(0, num1.length - 1);
    display.textContent = num1;
  } else {
    num2 = num2.substring(0, num2.length - 1);
    display.textContent = num2;
  }
}
btn7.addEventListener("click", () => {
  updateValue(7);
});
btn8.addEventListener("click", () => {
  updateValue(8);
});
btn9.addEventListener("click", () => {
  updateValue(9);
});
btn4.addEventListener("click", () => {
  updateValue(4);
});
btn5.addEventListener("click", () => {
  updateValue(5);
});
btn6.addEventListener("click", () => {
  updateValue(6);
});
btn1.addEventListener("click", () => {
  updateValue(1);
});
btn2.addEventListener("click", () => {
  updateValue(2);
});
btn3.addEventListener("click", () => {
  updateValue(3);
});
btn0.addEventListener("click", () => {
  updateValue(0);
});
btndoc.addEventListener("click", () => {
  if (!operator && num1.includes(`.`)) {
    return;
  } else if (operator && num2.includes(`.`)) {
    return;
  }
  updateValue(`.`);
});
btnClear.addEventListener("click", () => {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  operator = "";
});
btnAdd.addEventListener("click", () => {
  if (!operator) {
    operator = "+";
    display.textContent = num1;
  } else if (operator !== "+") {
    calculate();
    operator = "+";
  } else {
    calculate();
  }
});

btnMinus.addEventListener("click", () => {
  if (!operator) {
    operator = "-";
    display.textContent = num1;
  } else if (operator !== "-") {
    calculate();
    operator = "-";
  } else {
    calculate();
  }
});
btnMultiply.addEventListener("click", () => {
  if (!operator) {
    operator = "*";
    display.textContent = num1;
  } else if (operator !== "*") {
    calculate();
    operator = "*";
  } else {
    calculate();
  }
});
btnDivide.addEventListener("click", () => {
  if (!operator) {
    operator = "/";
    display.textContent = num1;
  } else if (operator !== "/") {
    calculate();
    operator = "/";
  } else {
    calculate();
  }
});
btnEqual.addEventListener("click", () => {
  calculate();
});
btnDel.addEventListener("click", () => {
  del();
});