function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var expression = document.getElementById('result').value;
    var operands = expression.split(/[-+/*]/); // Split expression by operators
    var operators = expression.replace(/[\d.]/g, '').split(''); // Extract operators

    var result = parseFloat(operands[0]);

    for (var i = 0; i < operators.length; i++) {
        var operand = parseFloat(operands[i + 1]);

        switch (operators[i]) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand !== 0) {
                    result /= operand;
                } else {
                    result = "Error: Division by zero!";
                }
                break;
        }
    }

    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('result').value = '';
}
