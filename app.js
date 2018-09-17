// Add Event Listeners
document.querySelector('form').addEventListener('submit', getBMI);
// Getting BMI 
function display(bmi){
    if(bmi < 18.5){
        document.body.style = "background: green";
    }
}
function getBMI(){
    // e.preventDefault();
    // Getting Inputs
    let weight = document.querySelector('#calc-weight').value;
    let height = document.querySelector('#calc-height').value;
    let heightinM = height/100;
    let bmi = (weight/heightinM**2).toFixed(2);
    document.querySelector('p').innerText = `${bmi}`;
    display(bmi);
}
