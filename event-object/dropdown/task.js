let dropValue = document.querySelector('.dropdown__value');
let dropList = document.querySelector('.dropdown__list');
let dropItem = document.getElementsByClassName('dropdown__item');

dropValue.addEventListener('click', () =>{
    dropList.classList.toggle('dropdown__list_active');

    
      for (let item of dropItem) {
          if(item.closest('.dropdown__list')){
            item.addEventListener('click',(evt) =>{
                evt.preventDefault();
              dropValue.textContent = item.textContent;
              dropList.classList.remove('dropdown__list_active');
            });
        } 
    }
});