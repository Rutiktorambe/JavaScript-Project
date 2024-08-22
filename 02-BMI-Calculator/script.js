const form = document.querySelector('.btn')
form.addEventListener( 'click', function (num) {
    // num.preventDefault();
    const weight= document.querySelector('#weight').value
    const height= document.querySelector('#height').value

    if( weight <= 0 && height <= 0 )
    {
        alert(`Weight and Height can't be zero or Negative. Please give a valid Weight and Height `)
    }

    else if (weight <= 0 || weight == '')
    {
        alert(`Weight can't be zero or Negative. Please give a valid Weight`)
    }

    else if (height <= 0 || height == '')
        {
            alert(`Height can't be zero or Negative.Please give a valid Height`)
        }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       
        const result= document.querySelector('#result')
        result.innerText=bmi
    }


})