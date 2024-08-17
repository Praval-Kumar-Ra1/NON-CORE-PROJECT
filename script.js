function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let resultMessage = `Your BMI is ${bmi}. `;

        if (bmi < 18.5) {
            resultMessage += "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultMessage += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultMessage += "You are overweight.";
        } else {
            resultMessage += "You are obese.";
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerText = resultMessage;
        resultDiv.classList.add('show');
    } else {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
    }
}
