// Add Event Listeners
document.querySelector('form').addEventListener('submit', getBMI);
// Getting BMI 
function display(bmi){
    if(bmi < 18.5){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Lean ,Put some More Weight`;
    } else if(bmi > 18.5 && bmi < 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Normal ,Just  Maintain Your Fitness`;
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
