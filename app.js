const numberBtns = document.querySelectorAll(".calculator__number");
const operatorBtns = document.querySelectorAll(".calculator__operator");
const equalsBtn = document.querySelector(".calculator__equals");
const deleteBtn = document.querySelector(".calculator__DEL");
const clearBtn = document.querySelector(".calculator__AC");
const displayText = document.querySelector(".calculator__display");
const lightBtn = document.querySelector(".calculator__light");
const body = document.querySelector("body");
const calculatorDisplay = document.querySelector(".calculator__display");

let store = "";
let display = "";
let prevOperator = "";
let currentOperator = "";

appendToDisplay = (str) => {
    display += str;
}

updateScreen = (str) => {
    if (str == "") {
        displayText.innerText = "";
    } else {
        splitStr = str.split(".");
        splitStr[0] = parseFloat(splitStr[0]).toLocaleString('en');
        displayText.innerText = splitStr.join(".");
    }
}


performOperation = (operator, str1, str2) => {
    num1 = parseFloat(str1);
    num2 = parseFloat(str2);
    switch(operator) {
        case "+":
            return String(num1 + num2);
        case "-":
            return String(num1 - num2);
        case "×":
            return String(num1 * num2);
        case "÷":
            return String(num1 / num2);
        default:
            return
    }
}

numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerText === "." && display.includes(".")) {
            return;
        }
        appendToDisplay(btn.innerText);
        updateScreen(display);
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if( display == "") {
            currentOperator = btn.innerHTML
            return
        } else {
            if(currentOperator == "") {
                currentOperator = btn.innerText;
            } else {
                prevOperator = currentOperator
                currentOperator = btn.innerText;
            }
        }
        if (store == "") {
            store = display;
            display = ""
        } else {
            display= performOperation(prevOperator, store, display);
            store = display;
            updateScreen(display);
            display = ""
        }
    });
});

equalsBtn.addEventListener("click", () => {
    if (display === "") {return};
    if (store === "") {return};
    console.log(currentOperator)
    console.log(store)
    console.log(display)
    display= performOperation(currentOperator, store, display);
    console.log(display);
    store = display;
    updateScreen(display);
    display = ""
    currentOperator = "";
    prevOperator = "";
});

deleteBtn.addEventListener("click", () => {
    if (display === "") {
        return;
    } else {
        display = display.substring(0, display.length - 1);
        updateScreen(display);
    }
});


clearBtn.addEventListener("click", () => {
    store = "";
    display = "";
    prevOperator = "";
    currentOperator = "";
    updateScreen(display);
});

lightBtn.addEventListener("click", () => {
    console.log("hi");
    console.log(body.style.backgroundColor);
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "white";
        calculatorDisplay.style.color = "black";
    }
    else {
        body.style.backgroundColor = "black";
        calculatorDisplay.style.color = "white";
    }
});
