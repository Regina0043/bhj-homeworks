let tabs = document.getElementsByClassName('tab');
let tabContents = document.getElementsByClassName('tab__content');

for(let tab of tabs){
    tab.addEventListener('click', (e) =>{
        let target = e.target;

        for(item of tabs){
            item.classList.remove('tab_active');
        }

        tab.classList.add('tab_active');

        for(let i = 0; i < tabs.length; i++){
            if(target && target.classList.contains('tab')){
                if(target === tabs[i]){
                    showTab(i);
                }

                else{
                    hideTab(i);
                }
            }
        }

        function showTab(x){
            if(!tabContents[x].classList.contains('tab__content_active')){
                tabContents[x].classList.add('tab__content_active');
            }
        }

        function hideTab(y){
            if(tabContents[y].classList.contains('tab__content_active')){
                tabContents[y].classList.remove('tab__content_active');
            }
        }


    });
}



    
