// const height = parseInt(document.querySelector('#height').value); // this method will give height = undefined value

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give valid height`
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give valid weight`
    }
    else{
        const BMI = ((weight/(height * height)) * 10000).toFixed(2)

        if (BMI < 18.6) {
            result.innerHTML = `Your BMI is ${BMI}, you are under weight`  
        }
        else if (BMI > 24.9) {
            result.innerHTML = `Your BMI is ${BMI}, you are over weight`  
        }
        else {
            result.innerHTML = `Your BMI is ${BMI}, you are in normal range`  
        }
    }
})

