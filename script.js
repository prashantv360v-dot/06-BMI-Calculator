function calculateBMI(){
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        document.getElementById('result').innerHTML ="Please enter valid weight and height.";
        return;
    }
    let heightInmeters = height/100;
    let bmi = weight / (heightInmeters * heightInmeters);

    let resultText = "Your BMI is : " + bmi.toFixed(2);
   if(bmi < 18.5){
    resultText += "(UnderWeight)";
   }else if(bmi < 24.9){
    resultText += "(Normal Weight)";
   }else if (bmi < 29.9){
    resultText += "(OverWeight)";
   }else {
    resultText += "(obese)";
}

document.getElementById('result').innerHTML = resultText;
}


