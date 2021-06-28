let rotators = document.getElementsByClassName('rotator__case');

let rotatorIndex = 1;

function showRotator (n){
    if (n > rotators.length){
        rotatorIndex = 1;
    }

    if (n < 1){
        rotatorIndex = rotators.length;
    }

    for (let rotator of rotators){
        rotator.classList.remove('rotator__case_active');
    }

    rotators[rotatorIndex - 1].classList.add('rotator__case_active');
    rotators[rotatorIndex - 1].style.color = rotators[rotatorIndex - 1].dataset.color;



}
  


            let timer = 0;
        makeTimer();
        
            function makeTimer(){
                clearInterval(timer);
                    timer = setInterval(function(){
                        rotatorIndex++;
                        showRotator(rotatorIndex);
                        }, 1000);
    
        }
  
    


    











