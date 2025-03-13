function calculate(operation) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultText = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        resultText.textContent = "Please enter both numbers!";
        resultText.style.color = "red";
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            resultText.textContent = "Cannot divide by zero!";
            resultText.style.color = "red";
            return;
        }
        result = num1 / num2;
    }

    resultText.textContent = `Result: ${result}`;
    resultText.style.color = "black";
}