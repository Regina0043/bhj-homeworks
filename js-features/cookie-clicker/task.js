//Первый подпункт

const elem = document.getElementById('cookie');
let clicker = document.getElementById('clicker__counter');
let clickerNum = Number(clicker.innerHTML);

function counter () {
    clicker.innerHTML = clickerNum++;
    elem.style.width = '250px';
}

function changeWidth () {
    elem.style.width = '200px';
}
elem.addEventListener('click', counter);
elem.addEventListener('mousedown', changeWidth);



