let holes = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for(let i = 0; i < holes.length; i++){
    holes[i].addEventListener('click', () =>{
        if(holes[i].classList.contains('hole_has-mole')){
            dead.textContent++;
            if(dead.textContent === '10'){
                dead.textContent = '0';
                lost.textContent = '0';
                alert('Победа');
            }
        }

        else{
            lost.textContent++;
            if(lost.textContent === '5'){
                dead.textContent = '0';
                lost.textContent = '0';
                alert('Вы проиграли');
            }
        }
    });
}