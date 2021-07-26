const chatForm = document.querySelector('.chat-form');
const input = chatForm.querySelector('input');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = chatWidget.querySelector('.chat-widget__messages');
const strTag = `
    <div class="message message_client">
<div class="message__time">22:10</div>
<div class="message__text">Добрый день!</div>
    </div>

    <div class="message message_bot">
<div class="message__time">22:10</div>
<div class="message__text">Добрый день!</div>
    </div>`;

const date = new Date();
 hours = date.getHours();
 minutes = date.getMinutes();
 now = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);

const botArr = ['Вы кто?', 'Что вам надо?', 'Забудьте этот адрес', 'Мы вас не ждали', 'Не покупайте у нас ничего', 'Вы слишком грубы', 'Желаю вам хорошего дня, но не от всего серца'];
const savedBotMessages = [];
const clientArr = [];
let value = input.value;


chatWidget.addEventListener('click', () =>{
    chatWidget.classList.add('chat-widget_active');

    chatForm.addEventListener('submit', evt=>{
        evt.preventDefault();
        input.addEventListener('keydown', (e) =>{
            if(e.keyCode === 13 && input.value !== ''){
                clientArr.push(input.value);
                console.log(clientArr);
                input.value = '';

                
               chatWidgetMessages.insertAdjacentHTML('beforeend', strTag);  

               const messages = chatWidgetMessages.getElementsByClassName('message');
               const messagesClient = chatWidgetMessages.getElementsByClassName('message_client');
               const messagesBot = chatWidgetMessages.getElementsByClassName('message_bot');
                for(let i = 0; i < messages.length; i++){
                    messages[i].firstElementChild.textContent = now;
                }
                
                for(let i = 0; i < messagesClient.length; i++){
                    messagesClient[i].lastElementChild.textContent = clientArr[i];
                }


                let index = Math.floor(Math.random() * botArr.length);
                savedBotMessages.push(botArr[index]);
                //const reversedBotArray = savedBotMessages.reverse();

                for(let i = 0; i < messagesBot.length; i++){
                  messagesBot[i].lastElementChild.textContent = savedBotMessages[i];
                  
                
                }   
            } 
        });
        
    });
});


