document.getElementById('calculate').addEventListener("click", function(){
    let weight = document.getElementById('weight').value;

    let height = document.getElementById('height').value;

    let BMI = weight/(height * height);

    if(BMI < 18.5){
        alert("Your BMI is" + BMI + "You are underweight");
    } else if (BMI >= 18.5 && BMI <25) {
        alert("Your BMI is:" + BMI + "You have a normal weight.");
    } else if (BMI > 25  && BMI <= 30) {
        alert("Your BMI is:" + BMI + "You are overweight!");
    } else if (BMI > 30) {
        alert("Your BMI is:" + BMI + "You are obese!");
    } else {
        alert("Invalid weight/height. Please try again.");
    }
});

