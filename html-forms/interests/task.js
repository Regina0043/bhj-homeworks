const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('click', (evt) =>{
   if(evt.target.type === 'checkbox'){
      const checked = evt.target.checked;

      walk(evt.target, function(child){
         child.checked = checked;
      })
   }
});

function walk(root, callback){
   if(root.type ==='checkbox'){
      callback(root);
      const next = root.parentElement.nextElementSibling;
   
      
      
      if(next && next.classList.contains('interests_active')){
         const children = next.getElementsByTagName('input');
         for(let i = 0; i < children.length; i++){
            
            root.addEventListener('change', (evt) =>{
            
               if(root.checked && children[i].checked === false){
                  children[i].checked = true;
               }

               else if (!root.checked && children[i].checked === true){
                  children[i].checked = false;
               }
    
            
            });

         }
      
      }
      

      const inputs = interestsMain.getElementsByTagName('input');


         for (let input of inputs){
            const previousElement = root.parentElement.parentElement.parentElement.previousElementSibling;
            console.log(input.parentElement === previousElement);

           
          if(root.parentElement.parentElement.parentElement.classList.contains('interests_active') && root.checked){
             if(!input.parentElement.parentElement.parentElement.classList.contains('interests_active')  && input.parentElement === previousElement && input.checked === false){
               input.checked = true;

               
             }

             else {
               input.checked = false;
             }
          } 
         }


          
      
      
   }

}

let kids = interestsMain.getElementsByTagName('input');




function kidsChecked () {
   for (let k = 0; k < kids.length; k++){

   }
}

kidsChecked();