let buttons = document.querySelectorAll('.box')
let body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        if(e.target.id==="purple"){
            body.style.background = 'purple';
        }
        
        if(e.target.id==="white"){
            body.style.background = "white";
        }

        if(e.target.id==="blue"){
            body.style.background = "blue";
            
        }

        if(e.target.id==="yellow"){
            body.style.background = "yellow";
        }


    })
});
