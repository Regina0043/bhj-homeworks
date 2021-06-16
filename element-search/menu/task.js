const menuLinks = document.getElementsByClassName('menu__link');


for(let link of menuLinks){
    link.addEventListener('click', (evt) => {
        const subMenu = link.nextElementSibling;
        if(subMenu){
            evt.preventDefault();
            subMenu.classList.toggle('menu_active');
        }
    });
}


