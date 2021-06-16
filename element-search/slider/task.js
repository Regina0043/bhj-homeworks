let slideIndex = 1;

showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let slides = document.getElementsByClassName('slider__item');
    let dots = document.getElementsByClassName('slider__dot');

    if(n > slides.length){
        slideIndex = 1;
    }

    else if(n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('slider__item_active');
    }

    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('slider__dot_active');
    }


   slides[slideIndex - 1].classList.add('slider__item_active');

   dots[slideIndex -1].classList.add('slider__dot_active');

}

