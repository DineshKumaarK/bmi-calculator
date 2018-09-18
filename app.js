// Add Event Listeners
document.querySelector('form').addEventListener('submit', getBMI);
// Getting BMI 
function display(bmi){
    let bmiColor = document.querySelector('.bmi-output');
    if(bmi < 18.5){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Lean ,Put some More Weight`;
        bmiColor.style.background = " rgb(224, 77, 24)";
    } else if(bmi > 18.5 && bmi < 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Normal , Just  Maintain Your Fitness`;
        bmiColor.style.background = " rgb(20, 173, 20)";
    }  else if(bmi > 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Obese , Go To Gym and Start Training`;
        bmiColor.style.background = " red";
    }

}
function getBMI(e){
    e.preventDefault();
    // Getting Inputs
    let weight = document.querySelector('#calc-weight').value;
    let height = document.querySelector('#calc-height').value;
    let heightinM = height/100;
    let bmi = (weight/heightinM**2).toFixed(2);
    display(bmi);
}
