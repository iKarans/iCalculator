// Query Selectors
const numberBtns = document.querySelectorAll(".calculator__number");
const operatorBtns = document.querySelectorAll(".calculator__operator");
const equalsBtn = document.querySelector(".calculator__equals");
const deleteBtn = document.querySelector(".calculator__DEL");
const clearBtn = document.querySelector(".calculator__AC");
const displayText = document.querySelector(".calculator__display");
const lightBtn = document.querySelector(".calculator__light");
const body = document.querySelector("body");
const calculatorDisplay = document.querySelector(".calculator__display");
const lightBulb = document.querySelector(".calculator__light__i");


// Variables
let store = "";
let display = "";
let prevOperator = "";
let currentOperator = "";
let eqlBtnTrack1 = "";
let eqlBtnTrack2 = "";


// Functions (need to name them better)
appendToDisplay = (str) => {
    if(display.length > 11) {
        return;
    } else {
        display += str;
    };
};

updateScreen = (str) => {
    if (str == "") {
        displayText.innerText = "";
    } else {
        if (str == ".") {
            displayText.innerText = "0."
            display = "0."
        } else {
            splitStr = str.split(".");
            splitStr[0] = parseFloat(splitStr[0]).toLocaleString('en');
            displayText.innerText = splitStr.join(".");
        }
    }
    //😏
    if (displayText.innerText == "8,008,135") {
        displayText.innerText = "8008135";
        alert("noice 😏");
    }
};


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
};

styleOperator = () => {
    operatorBtns.forEach((btn) => {
        if (btn.innerText == currentOperator) {
            btn.classList.add("clicked");
        } else {
            btn.classList.remove("clicked");
        };
    });
}

// adding functionality on the buttons

numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // no multiple decimals
        if(btn.innerText === "." && display.includes(".")) {
            return;
        }
        appendToDisplay(btn.innerText);
        updateScreen(display);
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // if user changes operators during a calculatiob
        if( display == "") {
            currentOperator = btn.innerText;
            styleOperator();
            return;
        } else {
            if(currentOperator == "") {
                currentOperator = btn.innerText;
            } else {
                prevOperator = currentOperator
                currentOperator = btn.innerText;
            };
            styleOperator();
        };
        if (store == "") {
            store = display;
            display = "";
        } else {
            // Think this fixes charlie problem
            if(prevOperator == "") {
                display= performOperation(currentOperator, store, display);
            } else {
                display= performOperation(prevOperator, store, display);
            }
            store = display;
            updateScreen(display);
            display = "";
        };
    });
});

equalsBtn.addEventListener("click", () => {
    // spamming equal with nothing in input
    if (store === "") {return};
    // continuous equal functionality
    if (display === "") {
        display = performOperation(eqlBtnTrack1, store, eqlBtnTrack2);
        store = display;
        updateScreen(display);
        display = "";
        return;
    };
    eqlBtnTrack2 = display;
    eqlBtnTrack1 = currentOperator;
    display= performOperation(currentOperator, store, display);
    store = display;
    // if(display.length > 11) {
    //     display = display.substring(0, 12);
    // }
    updateScreen(display);
    display = ""
    currentOperator = "";
    prevOperator = "";
    styleOperator();
});

deleteBtn.addEventListener("click", () => {
    // acts like acif pressed after equal
    if (display === "") {
        store = "";
        display = "";
        prevOperator = "";
        currentOperator = "";
        updateScreen(display);
        styleOperator();
        // return;
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
    styleOperator();
});

lightBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    calculatorDisplay.classList.toggle("dark-text");
    lightBulb.classList.toggle("dark-text");
});
