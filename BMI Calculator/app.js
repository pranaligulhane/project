function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight.";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
