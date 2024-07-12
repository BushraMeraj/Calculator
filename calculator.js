document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let displayValue = '';

    function appendNumber(number) {
        displayValue += number;
        updateDisplay();
    }

    function appendOperator(operator) {
        displayValue += ` ${operator} `;
        updateDisplay();
    }

    function clearDisplay() {
        displayValue = '';
        updateDisplay();
    }

    function deleteDigit() {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }

    function calculateResult() {
        try {
            displayValue = eval(displayValue).toString();
            updateDisplay();
        } catch (e) {
            displayValue = 'Error';
            updateDisplay();
            setTimeout(clearDisplay, 1500);
        }
    }

    function updateDisplay() {
        display.innerText = displayValue || '0';
    }

    // Attach functions to the global scope for onclick attributes
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.clearDisplay = clearDisplay;
    window.deleteDigit = deleteDigit;
    window.calculateResult = calculateResult;
});