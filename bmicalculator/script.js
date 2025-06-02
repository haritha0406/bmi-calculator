function calculateBmi(){
    let weight=parseFloat(document.getElementById("weight").value);
    let height=parseFloat(document.getElementById("height").value);
    if(weight >0 && height){
        let bmi=weight/(height*height);
        let category=bmiCategory(bmi);
        document.getElementById("result").innerHTML=`Your bmi: <b>${bmi.toFixed(2)}</b> <br> Category: <b>${category}</b>`

    }else{
        document.getElementById("result").innerHTML="Enter valid values";

    }

    
}
function bmiCategory(bmi)
{
    if(bmi< 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
