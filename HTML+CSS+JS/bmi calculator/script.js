const form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault();

    const h = parseInt(document.querySelector("#height").value);
    const w = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if( h === '' || h<=0 || isNaN(h)  ){
        result.innerHTML = `Please enter valid height : ${h} 😣`;
    }
    else if( w === '' || w<=0 || isNaN(w)){
        result.innerHTML = `Please enter valid weight : ${w} 😣`;
    }
    else{
        const res = (w / ((h * h) / 10000)).toFixed(2);
        //result.innerHTML = `Your BMI is : <span>${res}</span>`;

        if(res < 18.6 ){
            result.innerHTML = `Your BMI is : <span>${res} 😭🤏</span> `;
        }
        
        else if(res >= 18.6 && res<=24.9){
            result.innerHTML = `Your BMI is : <span>${res} 🙂</span> `;
        }
        else if(res>24.9 ){
            result.innerHTML = `Your BMI is : <span>${res} 🤯☠️</span> `;
        }

    }

});
