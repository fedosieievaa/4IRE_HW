const memories = document.querySelectorAll(".gray");
const operands = document.querySelectorAll(".black");
const operators = document.querySelectorAll(".pink");
const equal = document.querySelector(".orange");

let memory = 0;
let current = "";
let prev = "";
let operator = "";
let oldOperator = "";
let isEqualActive = false;

const getOperand = (e) => {
    if (e.target.value === "C") {
        current = "";
        prev = "";
        operator = "";
        oldOperator = "";
        document.querySelector(".display").innerHTML = current;
        return;
    }
    if (isEqualActive) {
        current = "";
        prev = "";
        operator = "";
        oldOperator = "";
        isEqualActive = false;
    }
    current = current.concat(e.target.value);
    document.querySelector(".display").innerHTML = current;
}

const calc = (prev, operator, current) => {
    switch (operator) {
        case "+":
            return +prev + +current;
        case "-":
            return prev - current;
        case "/":
            return prev / current;
        case "*":
            return prev * current;
    }
}

const getOperator = (e) => {
    isEqualActive = e.target.value === "=" ? true : false;
    if (prev === "") {
        oldOperator = e.target.value;
        prev = current;
        current = "";
    } else {
        if (current === "") {
            oldOperator = e.target.value;
        } else if (operator === "") {
            operator = e.target.value;
            prev = calc(prev, oldOperator, current);
            current = "";
            oldOperator = operator;
            operator = "";
            document.querySelector(".display").innerHTML = prev;
        }
    }
}

const getMemory = (e) => {
    switch (e.target.value) {
        case "m+":
            memory += +current;
            current = "";

            break;
        case "m-":
            memory -= +current;
            current = "";

            break;
        case "mrc":
            current = memory;
            document.querySelector(".display").innerHTML = current;
            break;
        default:
    }
}

memories.forEach((m) => m.addEventListener("click", getMemory));
operands.forEach((operand) => operand.addEventListener("click", getOperand));
operators.forEach((operator) => operator.addEventListener("click", getOperator));
equal.addEventListener("click", getOperator);

//TODO later
// 1
// const display = document.querySelector(".display");
// const div = document.createElement("span");
// div.innerText = "m";
// const res = display.insertAdjacentElement("beforebegin", div);
//2
// const getKeys = (e) => {
//     const key = document.querySelector(`.button[id="${e.keyCode}"]`);
// }
// window.addEventListener("keydown", )