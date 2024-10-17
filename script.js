function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculate(operation) {
    const display = document.getElementById('display');
    let result;
    try {
        // Mengganti '^' dengan '**' untuk evaluasi pangkat
        if (operation === '=') {
            result = eval(display.value.replace('^', '**'));
        } else if (operation === 'pow') {
            const numbers = display.value.split('^');
            result = Math.pow(parseFloat(numbers[0]), parseFloat(numbers[1]));
        } else if (operation === '%') {
            const numbers = display.value.split('%');
            result = parseFloat(numbers[0]) % parseFloat(numbers[1]);
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
