//Первый подпукнт
const timer = document.getElementById('timer').innerHTML;
let timerNum = Number(timer);

function countDownTime (){
    document.getElementById('timer').innerHTML = timerNum--;

    if(document.getElementById('timer').innerHTML === '0'){
        clearInterval(i);
        alert('Вы выиграли в конкурсе');
    }
}
const i = setInterval(countDownTime, 1000);

//Второй подпункт
/*let timerNum2 = Number(timer);
function countDownTime2 (){
    const timer2 = document.getElementById('timer2').innerHTML;
    const date = new Date(0);
    let hours = ('0' + date.getUTCHours()).slice(-2);
    let minutes = ('0' + date.getUTCMinutes()).slice(-2);
    let seconds = ('0' + date.getUTCSeconds() + timerNum2--).slice(-2);


    document.getElementById('timer2').innerHTML = hours + ':' + minutes + ':' + seconds;
    if(document.getElementById('timer2').innerHTML === '00:00:00'){
        clearInterval(t);
        alert('Вы выиграли и в этом конкурсе');
        window.location.href = 'file:///C:/Users/Nikol/Desktop/js%20%D0%B2%20%D0%B1%D1%80%D1%83%D0%B7%D0%B5%D1%80%D0%B5/bhj-homeworks/js-features/countdown/wonPage/index.html';
    }

    //Третий подпункт
}

const t = setInterval(countDownTime2, 1000);
*/

const t = setInterval(demo(), 1000);

function demo() {
  var seconds = 60;
  var output = document.getElementById('timer2');

  return function() {
    if (seconds >= 0) {
      output.innerHTML = formatSeconds(seconds);
      seconds--;
    }
      else if(output.innerHTML === '00:00:00'){
          clearInterval(t);
        alert('Вы выиграли и в этом конкурсе');
        window.location.href = 'file:///C:/Users/Nikol/Desktop/js%20%D0%B2%20%D0%B1%D1%80%D1%83%D0%B7%D0%B5%D1%80%D0%B5/bhj-homeworks/js-features/countdown/wonPage/index.html';
      }

  };
}


function formatSeconds(secs) {
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

  var h = Math.floor(secs / 3600);
  var m = Math.floor(secs / 60) - (h * 60);
  var s = Math.floor(secs - h * 3600 - m * 60);
  return pad(h) + ":" + pad(m) + ":" + pad(s);
}