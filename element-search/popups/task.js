const modalMain = document.getElementById('modal_main');
const modalCloseTimes  = document.getElementsByClassName('modal__close_times');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');
let arrClose = [...modalCloseTimes];

arrClose.forEach(item => {
    item.addEventListener('click',() =>{
        modalMain.style.display = 'none';
        modalSuccess.style.display = 'none';
        
    });
});

showSuccess.addEventListener('click', () =>{
    modalSuccess.classList.add('modal_active');
    modalMain.style.display = 'none';
});
