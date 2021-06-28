const book = document.querySelector('.book');

let sizes = document.getElementsByClassName('font-size');

let bookTextColor = document.querySelector('.book__control_color');
let textColors = bookTextColor.getElementsByClassName('color');

let bookBgColor = document.querySelector('.book__control_background');
let bgColors = bookBgColor.getElementsByClassName('color');




   
   for(let fs of sizes){
    
    fs.addEventListener('click', (evt) =>{
        let target = evt.target;
        evt.preventDefault();
        for (let i = 0; i < sizes.length; i++){
            if(target === sizes[i]){
                book.classList.add(`font-size_${sizes[i].dataset.size}`);
                changeActive(i, sizes, sizes[i].classList[0]);
                console.log(sizes[i].classList[0]);
            }
    
            else{
                deleteActive(i, sizes, sizes[i].classList[0]);
                book.classList.remove(`font-size_${sizes[i].dataset.size}`);
            }
    }
   });

}

    for(let textColor of textColors){
        
        textColor.addEventListener('click', (evt) =>{
            let target = evt.target;
             evt.preventDefault();
             for(let i = 0; i < textColors.length; i++){
                 if(target === textColors[i]){
                    book.classList.add(`book_color-${textColors[i].dataset.textColor}`);
                    changeActive(i, textColors, textColors[i].classList[0]);
                 }

                 else{
                    book.classList.remove(`book_color-${textColors[i].dataset.textColor}`);
                    deleteActive(i, textColors, textColors[i].classList[0]);
                 }
             }
        });
    }

    for(let bgColor of bgColors){
        
        bgColor.addEventListener('click', (evt)=>{
            let target = evt.target;
            evt.preventDefault();

            for(let i =0; i < bgColors.length; i++){
                if(target === bgColors[i]){
                    book.classList.add(`book_bg-${bgColors[i].dataset.bgColor}`);
                    changeActive(i, bgColors, bgColors[i].classList[0]);
                }

                else{
                    book.classList.remove(`book_bg-${bgColors[i].dataset.bgColor}`);
                    deleteActive(i, bgColors, bgColors[i].classList[0])  
                }
            }
        })
    }



   function changeActive(x, arr, cl){
       if(!arr[x].classList.contains(`${cl}_active`)){
           arr[x].classList.add(`${cl}_active`);
       }


   }

   function deleteActive(y, arr, cl){
    if(arr[y].classList.contains(`${cl}_active`)){
        arr[y].classList.remove(`${cl}_active`);
       }
   }