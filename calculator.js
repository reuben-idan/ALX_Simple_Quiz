// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Cannot divide by zero';
    }
    return number1 / number2;
}

// Helper function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Update result display
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    updateResult(result);
});

// Handle keyboard input for better UX
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const { number1, number2 } = getInputValues();
        updateResult(add(number1, number2));
    }
});
