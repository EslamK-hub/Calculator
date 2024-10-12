let display = document.getElementById('result');
let historyDisplay = document.getElementById('history');

//--------------------------------------- Light Mode / Dark Mode ---------------------------------------//
function toggleMode() {
    document.body.classList.toggle('dark');
}

//--------------------------------------- Calc ---------------------------------------//
function calculate() {
    let expression = display.innerText
    if (expression === "") {
        return;
    }

    try {
        let expression = display.innerText;
        let result = eval(expression);
        historyDisplay.innerHTML = expression;
        display.innerHTML =  "=" + result;
    } catch {
        
    }
}

//--------------------------------------- Number (Calculating numbers) ---------------------------------------//
function number(value) {
    display.innerHTML += value;
    updateDisplay();
}

//--------------------------------------- Clear Screen ---------------------------------------//
function clearScreen() {
    display.innerHTML = '';
    historyDisplay.innerHTML = '';
}

//--------------------------------------- Delete Number ---------------------------------------//
function deleteButton() {
    let display = document.getElementById("result");
    let spans = display.getElementsByTagName("span");
    if (spans.length > 0) {
        display.removeChild(spans[spans.length - 1]);
    }
};

//--------------------------------------- Update Display (Dump the input ) ---------------------------------------//
function updateDisplay() {
    let expression = display.innerText;
    display.innerHTML = '';
    
    for (let char of expression) {
        let span = document.createElement('span');
        if ('+-*/'.includes(char)) {
            span.style.color = '#5000a0';
        }
        span.textContent = char;
        display.appendChild(span);
    }
}