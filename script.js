const display = document.getElementById('display');

function displayValue(input) {
    display.value += input;
}

function delOne(delet) {
    return delet.value = delet.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    if(display.value == '0/0') {

        display.value = `Can't t Divid By Zero`;
    } else {

        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }

    }
}