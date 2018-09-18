// Add Event Listeners
document.querySelector('form').addEventListener('submit', getBMI);
// Getting BMI 
function display(bmi){
    let bmiColor = document.querySelector('.bmi-output');
    if(bmi < 18.5){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Lean ,Put some More Weight`;
        // bmiColor.classList.remove('bmi-output');
        bmiColor.classList.add('lean');
    } else if(bmi > 18.5 && bmi < 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Normal , Just  Maintain Your Fitness`;
        bmiColor.classList.add('normal');
    }  else if(bmi > 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Obese , Go To Gym and Start Training`;
        bmiColor.classList.add('obese');
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
