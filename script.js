let display = document.getElementById('result');

function addToDisplay(value) {
    display.innerHTML += value;
}

function clearDisplay() {
    display.innerHTML = '';
}

function calculate() {
    let expression = display.innerHTML;
    let result = eval(expression);
    let stringed = result.toString().slice(0, 11);
    display.innerHTML = stringed;
}