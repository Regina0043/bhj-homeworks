const reveal = document.querySelector('.reveal');

window.addEventListener('scroll' , showElem);

function showElem(){
    const windowHeight = window.innerHeight;
    const revealRect = reveal.getBoundingClientRect();

    if(revealRect.top < windowHeight/2 && revealRect.top > 0){
        reveal.classList.add('reveal_active');
    }

    else{
        reveal.classList.remove('reveal_active');
    }
}